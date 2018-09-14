class Admin::ClientsController < AdminController
	# GET /admin/clients
	# GET /admin/clients.json
	def index
		#@admin_clients = Admin::Client.includes(:route).all

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: ClientsDatatable.new(view_context) }
		end
	end

	# GET /admin/clients/1
	# GET /admin/clients/1.json
	def show
		@admin_client = Admin::Client.find(params[:id])
		@orders = @admin_client.orders.where(status: [2,3,4])

		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @admin_client }
		end
	end

	# GET /admin/clients/new
	# GET /admin/clients/new.json
	def new
		@admin_client = Admin::Client.new(kind: "0")
		@admin_client.addresses.build
		
		respond_to do |format|
			format.html # new.html.erb
			format.json { render json: @admin_client }
		end
	end

	# GET /admin/clients/1/edit
	def edit
		@admin_client = Admin::Client.find(params[:id])
		@orders = @admin_client.orders
	end

	# POST /admin/clients
	# POST /admin/clients.json
	def create
		@admin_client = Admin::Client.new(params[:admin_client])

		respond_to do |format|
			if @admin_client.save
				format.html { redirect_to @admin_client, notice: 'Cliente criado com sucesso.' }
				format.json { render json: @admin_client, status: :created, location: @admin_client }
			else
				format.html { render action: "new" }
				format.json { render json: @admin_client.errors, status: :unprocessable_entity }
			end
		end
	end

	# PUT /admin/clients/1
	# PUT /admin/clients/1.json
	def update
		@admin_client = Admin::Client.find(params[:id])

		respond_to do |format|
			if @admin_client.update_attributes(params[:admin_client])
				format.html { redirect_to @admin_client, notice: 'Cliente salvo com sucesso.' }
				format.json { head :no_content }
			else
				format.html { render action: "edit" }
				format.json { render json: @admin_client.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /admin/clients/1
	# DELETE /admin/clients/1.json
	def destroy
		@admin_client = Admin::Client.find(params[:id])
		@admin_client.destroy

		respond_to do |format|
			format.html { redirect_to admin_clients_url }
			format.json { head :no_content }
		end
	end
end
