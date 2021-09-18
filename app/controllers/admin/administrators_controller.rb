class Admin::AdministratorsController < AdminController

	def index
		@data = Admin::Administrator.find(1)

		@admin_administrators = Admin::Administrator.all

		respond_to do |format|
			format.html # index.html.erb
			format.json  { render json: @admin_administrators }
		end
	end

	# PUT /admin/administrators/1
	# PUT /admin/administratos/1.json
	def update
		if !administrator_signed_in? || current_administrator.id != 1
			redirect_to root_path
			return
		end

		@admin_administrator = Admin::Administrator.find(params[:id])

		respond_to do |format|
			if @admin_administrator.update_attributes(administrator_params)
				format.html { redirect_to admin_administrators_url }
				format.json { head :no_content }
			else
				format.html { render action: "edit" }
				format.json { render json: @data.errors, status: :unprocessable_entity }
			end
		end
	end

	# GET /admin/administrators/new
	# GET /admin/administrators/new.json
	def new
		if !administrator_signed_in? || current_administrator.id != 1
			redirect_to root_path
			return
		end

		@admin_administrator = Admin::Administrator.new()

		respond_to do |format|
			format.html # new.html.erb
			format.json { render json: @admin_administrator }
		end
	end

	# GET /admin/administrators/1/edit
	def edit
		if !administrator_signed_in? || current_administrator.id != 1
			redirect_to root_path
			return
		end
		@admin_administrator = Admin::Administrator.find(params[:id])
	end

	# POST /admin/administrators
	# POST /admin/administrators.json
	def create
		if !administrator_signed_in? || current_administrator.id != 1
			redirect_to root_path
			return
		end

		@admin_administrator = Admin::Administrator.new(administrator_params)

		respond_to do |format|
			if @admin_administrator.save
				format.html { redirect_to admin_administrators_url, notice: 'Usuario criado com sucesso.' }
				format.json { render json: @admin_administrator, status: :created, location: admin_administrators_url }
			else
				format.html { render action: "new" }
				format.json { render json: @admin_administrator.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /admin/administrators/1
	# DELETE /admin/administrators/1.json
	def destroy
		if !administrator_signed_in? || current_administrator.id != 1
			redirect_to root_path
			return
		end

		@admin_administrator = Admin::Administrator.find(params[:id])
		@admin_administrator.destroy

		respond_to do |format|
			format.html { redirect_to admin_administrators_url }
			format.json { head :no_content }
		end
	end

private
	def administrator_params
		params.require(:admin_administrator).permit(:name, :email, :password,
			:password_confirmation, :remember_me, :active, :new_users, 
			:variable_date, :only_pickup)
	end
end
