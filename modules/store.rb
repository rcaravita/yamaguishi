module Store

	def order

	end

	def get_variable_date
		@data = Admin::Administrator.find(1)
		return @data.variable_date
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

	def get_min_purchase_amount()
		min = 120
		return min
	end

	def get_delivery_date(delivery, pickup)

		#today = (Time.now - 7.hours).to_date # para pedidos realizados entre 0h e 7h da manha - OLD CODE
		#today = (Time.now + 6.hours).to_date - TEST CODE

		today = (Time.now + 5.hours).to_date # horário para o servidor
		#puts "Today: #{today}"

		if get_variable_date
			date = nil
		else
			if delivery == false #RETIRA
				date = today + 2.days # 48h de antecedencia

				if pickup == 1  #VILA YAMAGUISHI
					if date.wday <= 3 && today.wday < 3
						date = Date.commercial(date.year, date.cweek, 3)
					else
						if date.wday <= 5 && today.wday < 5
							date = Date.commercial(date.year, date.cweek, 5)
						else
							date = Date.commercial(date.next_week.year, date.next_week.cweek, 3)
						end
					end
				elsif pickup ==  2 #BOSQUE
					if date.wday > 3 || date.wday == 0 # proxima semana
						date = Date.commercial(date.next_week.year, date.next_week.cweek, 3)
					else
						date = Date.commercial(date.year, date.cweek, 3)
					end
				elsif pickup ==  3 #PARQUE ECOLÓGICO
					date = Date.commercial(date.next_week.year, date.next_week.cweek, 1)
					date = date - 1.days
				elsif pickup ==  4 #HOLAMBRA
					if date.wday > 6 || date.wday == 0  # proxima semana
						date = Date.commercial(date.next_week.year, date.next_week.cweek, 6)
					else
						date = Date.commercial(date.year, date.cweek, 6)
					end
				elsif pickup ==  5 #CENTRO CONVIVENCIA
					if date.wday > 5 || date.wday == 0  # proxima semana
						date = Date.commercial(date.next_week.year, date.next_week.cweek, 5)
					else
						date = Date.commercial(date.year, date.cweek, 5)
					end
				end
			else # DELIVERY
				#logger.info "# DELIVERY"
				#current_client = Admin::Client.find(814) #rota 3 segunda-feira
				#current_client = Admin::Client.find(8) #rota 2 terca-feira
				#current_client = Admin::Client.find(407) #rota 6 quarta-feira
				if current_client.route
					date = today + 2.days # 48h de antecedencia
					if current_client.route.day == 0
						date = Date.commercial(date.next_week.year, date.next_week.cweek, 1)
						date = date - 1.days
					elsif date.wday > current_client.route.day # proxima semana
						date = Date.commercial(date.next_week.year, date.next_week.cweek, current_client.route.day)
					elsif date.wday == 0 #domingo
						date = Date.commercial(date.next_week.year, date.next_week.cweek, current_client.route.day)
					else # esta semana
						date = Date.commercial(date.year, date.cweek, current_client.route.day)
					end
				end
			end
		end

		date

	end

	def define_order
		@data = Admin::Administrator.find(1)
		if session[:order]
			begin #em caso do pedido ter sido excluído via admin
				@order = Admin::Order.find(session[:order]) # pedido encontrado
				if @order.status > 1 #caso a order já tenha sido confirmada ou atendida
					@order = Admin::Order.create(status: 0, client_id: 0, delivery: 0)
					session[:order] = @order.id
				end
			rescue # pedido nao encontrado, criar novo
				@order = Admin::Order.create(status: 0, client_id: 0, delivery: 0)
				session[:order] = @order.id
			end
		else # pedido novo
			@order = Admin::Order.create(status: 0, client_id: 0, delivery: 0)
			session[:order] = @order.id
		end

		if current_client && @order.client_id == 0
			define_order_details
		end

		@categories = Admin::Category.all
	end


	def define_order_details

		if @order.delivery == false # retira na vila
			@order.delivery_value = 0
			@order.delivery_date = get_delivery_date(false, @order.pickup)
		else # entrega em domicilio
			@order.delivery_value = 0
			@order.delivery_date = nil
		end

		if current_client
			if !current_client.accept_delivery
				@order.delivery = false
				@order.delivery_value = 0
				@order.delivery_date = get_delivery_date(false, @order.pickup)
			elsif !current_client.accept_pickup
				@order.delivery = true
				@order.delivery_value = 0
			end

			Admin::Order.where(:status => [0,1], :client_id => current_client.id).where("id NOT IN (?)", [@order.id]).destroy_all
			@order.client_id = current_client.id
			@order.status = 1 unless @order.order_items.empty?

			if current_client.route && @order.delivery == true #delivery com rota definida
				@order.delivery_date = get_delivery_date(true, 0)
				@order.delivery_value = current_client.route.value

				@order.order_items.each do |i|
					available = false
					if i.item.product.routes.length() == 0
						available = true
					end
					i.item.product.routes.each do |r|
						if current_client.route.id == r.id
							available = true
						end
					end
					i.available = available
				end
			elsif @order.delivery == false
				@order.order_items.each do |i|
					i.available = true
				end
			end

			if current_client.route_id == 19 #rota de retirada
				@order.delivery = 0
				@order.delivery_value = 0
				@order.delivery_date = get_delivery_date(false, @order.pickup)
			end
		end

		@order.save!

	end

	def add_to_cart
		if current_client
			item = Admin::Item.find(params[:id])
			@item = @order.add_item(item)
			if @item
				respond_to do |format|
					format.html {redirect_to :back}
					format.js
				end
			end
		end
	end

	def remove_item
		item = Admin::OrderItem.find(params[:id])
		item.destroy

		@order.update_total
		define_order

		respond_to do |format|
			format.js
			format.html { redirect_to order_path, notice: 'Update successfully' }
		end
	end

	def order_update
		if @order.update_attributes(admin_order_params)
			respond_to do |format|
				format.js
				format.html { redirect_to order_path, notice: 'Update successfully' }
			end
		else
			redirect_to order_path
		end
	end

	def update_order
		updated = false
		
		if params.has_key?(:admin_order)

			if @order.update_attributes(admin_order_params)
				if (admin_order_params && admin_order_params['pickup'] != "1")
					define_order_details
				elsif (admin_order_params && admin_order_params['delivery'] == "true")
					define_order_details
				end
				updated = true
			end
		end

		updated
	end

	def order_confirmed
		
		
		redirect_to root_path and return if @order.order_items.empty?

		if update_order
			respond_to do |format|
				format.js
				format.html { redirect_to order_path, notice: 'Update successfully' }
			end
		end

	end

	def order_update_delivery
		redirect_to root_path and return if @order.order_items.empty?

		if update_order
			respond_to do |format|
				format.js
				format.html { redirect_to order_path, notice: 'Update successfully' }
			end
		end

	end

	def order_checkout
		redirect_to root_path and return if @order.order_items.empty?
		redirect_to order_path and return if @order.items_value < get_min_purchase_amount() && @order.delivery

		@order.confirmed_at = Time.now
		@order.status = 2

		@delivery_date = get_delivery_date(@order.delivery, @order.pickup)

		if @order.pickup == 1 && @order.delivery_date.wday != 3 && @order.delivery_date.wday != 5
			@order.errors.add(:delivery_date, "A data de retirada para esta opção deve ser quarta ou sexta.")
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		elsif @order.pickup == 1 && @order.delivery_date && @delivery_date > (@order.delivery_date).to_date
			@order.errors.add(:delivery_date, "A data de retirada para esta opção deve ser superior a data mínima informada")
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		elsif Admin::Order.where(:status => [2], :delivery_date => @order.delivery_date, :client_id => @order.client_id).first
			@order.errors.add(:id, "Outro pedido encontrado")
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		elsif Admin::Order.where(:status => [3], :delivery_date => @order.delivery_date, :client_id => @order.client_id).first
			@order.errors.add(:status, "Outro pedido encontrado")
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		elsif @order.save
			SystemMailer.order_confirmation(@order, @order.client).deliver
			session[:order] = nil

			respond_to do |format|
				format.js
				format.html { redirect_to order_path, notice: 'Update successfully' }
			end
		else
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		end
	end

	def order_merge
		if @other_order = Admin::Order.where(:status => 2, :delivery_date => @order.delivery_date, :client_id => @order.client_id).first
			@other_order.status = 0
			@other_order.save

			@order.order_items.each do |i|
				@item = Admin::OrderItem.find(i.id)
				@item.order_id = @other_order.id
				@item.save
			end

			@order.status = 4
			@order.save

			@order = @other_order;
			session[:order] = @order.id
		end
		redirect_to order_path
	end

	def order_keep
		redirect_to root_path and return if @order.order_items.empty?
		redirect_to order_path and return if @order.items_value < get_min_purchase_amount() && @order.delivery

		if @other_order = Admin::Order.where(:status => 2, :delivery_date => @order.delivery_date, :client_id => @order.client_id).first
			@other_order.status = 4
			@other_order.save
		end

		@order.confirmed_at = Time.now
		@order.status = 2

		if @order.save
			SystemMailer.order_confirmation(@order, @order.client).deliver
			session[:order] = nil

			respond_to do |format|
				format.js
				format.html { redirect_to order_path, notice: 'Update successfully' }
			end
		else
			respond_to do |format|
				format.json { render json: @order.errors, status: :unprocessable_entity }
			end
		end
	end

	def order_keep_other
		if @other_order = Admin::Order.where(:status => 2, :delivery_date => @order.delivery_date, :client_id => @order.client_id).first
			@other_order.status = 0
			@other_order.save

			@order.status = 4
			@order.save

			@order = @other_order;
			session[:order] = @order.id
		end
		redirect_to order_path
	end

	def order_destroy
		@order.destroy
		redirect_to root_path
	end

	def order_cancel
		ord = Admin::Order.find(params[:id])
		ord.status = 4
		if ord.save
			SystemMailer.order_cancel(ord, ord.client).deliver
		end
		redirect_to client_orders_path
	end
	
private
	def admin_order_params
		params.require(:admin_order).permit(:id, :pickup, :delivery, :delivery_date, order_items_attributes: [:id, :quantity])
	end
end
