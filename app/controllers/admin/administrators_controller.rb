class Admin::AdministratorsController < AdminController
	
	def index
		@data = Admin::Administrator.find(1)
	end

	# PUT /admin/products/1
	# PUT /admin/products/1.json
	def update
		@admin_administrator = Admin::Administrator.find(params[:id])

		respond_to do |format|
			if @admin_administrator.update_attributes(params[:admin_administrator])
				format.html { redirect_to admin_administrators_url }
				format.json { head :no_content }
			else
				format.html { render action: "index" }
				format.json { render json: @data.errors, status: :unprocessable_entity }
			end
		end
	end
	
end
