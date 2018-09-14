class Admin::MaintenanceController < AdminController
	
	def index
		
	end
	
	def import_clients
	  Admin::Client.import(params[:file])
		flash[:notice] = 'Clients imported.'
	  redirect_to admin_maintenance_path
	end
	
	def export_clients
		@clients = Admin::Client.includes(:addresses).all
		respond_to do |format|
			format.xls
		end
	end
	
	def export_orders_yamasis
		@orders = Admin::Order.where(status: 2).includes(:client)
		#@orders = Admin::Order.all
	end
	
end