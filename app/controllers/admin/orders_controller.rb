class Admin::OrdersController < AdminController

	def toggleStatus
		o = Admin::Order.find(params[:id])
		if o.status == 2
			o.status = 3
		elsif o.status == 3
			o.status = 2
		end

		new_record = Admin::OrderChange.new(:order_id => o.id, :status => o.status, :administrator_id => current_administrator.id)
		new_record.save!

		o.save

		render nothing: true
	end

	# GET /admin/orders
	# GET /admin/orders.json
	def index
		#@admin_orders = Admin::Order.where(:status => [1,2,3])

		#logger.info params.to_yaml

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: OrdersDatatable.new(view_context) }
		end
	end

	# GET /admin/orders/1
	# GET /admin/orders/1.json
	def show
		@admin_order = Admin::Order.find(params[:id])
		@admin_client = @admin_order.client

		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @admin_order }
		end
	end

	# GET /admin/orders/new
	# GET /admin/orders/new.json
	def new
		if params[:client]
			@admin_order = Admin::Order.new(:status => 1, :client_id => params[:client], delivery: 0, confirmed_at: Time.now)
		else
			@admin_order = Admin::Order.new(:status => 1, delivery: 0, confirmed_at: Time.now)
			#@admin_order.client = Admin::Client.new
			#@admin_order.client.addresses.build
		end
		@admin_order.order_items.build

		respond_to do |format|
			format.html # new.html.erb
			format.json { render json: @admin_order }
		end
	end

	# GET /admin/orders/1/edit
	def edit
		@admin_order = Admin::Order.find(params[:id])
		@admin_client = @admin_order.client
	end

	# POST /admin/orders
	# POST /admin/orders.json
	def create
		@admin_order = Admin::Order.new(order_params)

		respond_to do |format|
			if @admin_order.save
				if params[:order_update].present?
					format.html { redirect_to edit_admin_order_path(@admin_order), notice: 'Pedido criado com sucesso.'}
				else
					format.html { redirect_to @admin_order, notice: 'Pedido criado com sucesso.' }
					format.json { render json: @admin_order, status: :created, location: @admin_order }
				end
			else
				format.html { render action: "new" }
				format.json { render json: @admin_order.errors, status: :unprocessable_entity }
			end
		end
	end

	# PUT /admin/orders/1
	# PUT /admin/orders/1.json
	def update
		@admin_order = Admin::Order.find(params[:id])

		respond_to do |format|
			if @admin_order.update_attributes(order_params)
				if params[:order_update].present?
					format.html { redirect_to edit_admin_order_path(@admin_order), notice: 'Pedido atualizado com sucesso.'}
				else
					format.html { redirect_to @admin_order, notice: 'Pedido atualizado com sucesso.' }
					format.json { head :no_content }
				end
			else
				format.html { render action: "edit" }
				format.json { render json: @admin_order.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /admin/orders/1
	# DELETE /admin/orders/1.json
	def destroy
		@admin_order = Admin::Order.find(params[:id])
		@admin_order.destroy

		respond_to do |format|
			format.html { redirect_to admin_orders_url }
			format.json { head :no_content }
		end
	end

private
	def order_params
		params.require(:admin_order).permit(:client_id,
			:status, :order_items_attributes, :delivery, :pickup, :delivery_date, :delivery_value,
			order_items_attributes: [:id, :quantity, :item_id, :_destroy])
	end
end
