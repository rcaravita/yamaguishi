module Store

	def order
		@data = Admin::Administrator.find(1)
	end

	def search(string)
		s = string.to_s.parameterize
		redirect_to "/pedido" and return if s.include?("pedido")
		@items = Admin::Product.where("name LIKE ? OR description LIKE ?", "%#{s}%", "%#{s}%").collect{|p| p.items.available}.flatten.compact
		#@products = Admin::Product.where("name LIKE ? OR description LIKE ?", "%#{s}%", "%#{s}%").collect{|p| p.visible_presentations}.flatten.compact
		#@products << Admin::Brand.where("name LIKE ?", "%#{s}%" ).collect{|b| b.visible_presentations}.flatten.compact
		#if s.include?("organico")
		# @products << Product.where(:quality_id => 1).collect{|p| p.visible_presentations}.flatten.compact
		#end
		#if s.include?("biodinamico")
		# @products << Product.where(:quality_id => [2,3]).collect{|p| p.visible_presentations}.flatten.compact
		#end
		#if s.include?("demeter")
		# @products << Product.where(:quality_id => 3).collect{|p| p.visible_presentations}.flatten.compact
		#end
		@items.flatten!
		#render "search"
		return @items
	end

	def get_delivery_date(delivery)

		#today = (Time.now - 7.hours).to_date # para pedidos realizados entre 0h e 7h da manha - OLD CODE
		#today = (Time.now + 6.hours).to_date - TEST CODE

		today = (Time.now + 4.hours).to_date # horário para o servidor
		#puts "Today: #{today}"

		if @data.variable_date
			date = nil
		else
			if delivery == false #RETIRA
				#logger.info "# RETIRA"

				date = today + 2.days # 48h de antecedencia

				if date.wday == 0 # domingo (0) -> terça (2) desta semana
					date = Date.commercial(date.year, date.next_week.cweek, 2)
					#puts "Domingo"
				elsif date.wday == 1 # segunda (1) -> terça (2) desta semana
					date = Date.commercial(date.year, date.cweek, 2)
					#puts "Domingo"
				else # terça a sexta...
					date = date
					#puts "Semana"
				end
			else # DELIVERY
				#logger.info "# DELIVERY"
				#current_client = Admin::Client.find(814) #rota 3 segunda-feira
				#current_client = Admin::Client.find(8) #rota 2 terca-feira
				#current_client = Admin::Client.find(407) #rota 6 quarta-feira
				date = today + 2.days # 48h de antecedencia
				if current_client.route.day == 0
					date = Date.commercial(date.year, date.next_week.cweek, 1)
					date = date - 1.days
				elsif date.wday > current_client.route.day # proxima semana
					date = Date.commercial(date.year, date.next_week.cweek, current_client.route.day)
				elsif date.wday == 0 #domingo
					date = Date.commercial(date.year, date.next_week.cweek, current_client.route.day)
				else # esta semana
					date = Date.commercial(date.year, date.cweek, current_client.route.day)
				end
			end
		end;

		date

	end

	def define_order
		@data = Admin::Administrator.find(1)
		if session[:order]
			begin #em caso do pedido ter sido excluído via admin
				@order = Admin::Order.find(session[:order]) # pedido encontrado
				if @order.status > 1 #caso a order já tenha sido confirmada ou atendida
					@order = Admin::Order.create(status: 0, client_id: 0, delivery: 1)
					session[:order] = @order.id
				end
			rescue # pedido nao encontrado, criar novo
				@order = Admin::Order.create(status: 0, client_id: 0, delivery: 1)
				session[:order] = @order.id
			end
		else # pedido novo
			@order = Admin::Order.create(status: 0, client_id: 0, delivery: 1)
			session[:order] = @order.id
		end

		@categories = Admin::Category.all

	end

	def define_order_details

		@order.new_client = 1

		if @order.delivery == false # retira na vila
			@order.delivery_value = 0
			@order.delivery_date = get_delivery_date(false)
		else # entrega em domicilio
			@order.delivery_value = 0
			@order.delivery_date = nil
		end

		if current_client
			@order.client_id = current_client.id
			@order.status = 1 unless @order.order_items.empty?

			if !current_client.new
				@order.new_client = 0
			end

			if current_client.route && @order.delivery == true #delivery com rota definida
				@order.delivery_date = get_delivery_date(true)
				@order.delivery_value = current_client.route.value
			end

			if current_client.route_id == 19 #rota de retirada
				@order.delivery = 0
				@order.delivery_value = 0
				@order.delivery_date = get_delivery_date(false)
			end
		end

		if @order.new_client && @data.only_pickup
			@order.delivery = false
		end

		@order.save!

	end

	def add_to_cart
		item = Admin::Item.find(params[:id])
		@item = @order.add_item(item)
		if @item
			respond_to do |format|
				format.html {redirect_to :back}
				format.js
			end
		end
	end

	def order_update
		if @order.update_attributes(params[:admin_order])
			if params[:order_submit].present? #BOTAO FINALIZAR PEDIDO (SEM LOGIN)
				session[:previous_url] = "/pedido"
				redirect_to new_client_session_path
			elsif params[:order_confirmed].present? #BOTAO CONFIRMAR PEDIDO (COM LOGIN)
				redirect_to order_confirmed_path
			else #BOTAO ATUALIZAR
				redirect_to order_path
			end
		end
	end

	def order_confirmed
		redirect_to root_path and return if @order.order_items.empty?
		@order.confirmed_at = Time.now
		@order.status = 2
		@order.save!
		SystemMailer.order_confirmation(@order, @order.client).deliver
		session[:order] = nil
	end

	def order_destroy
		@order.destroy
		redirect_to root_path
	end

end
