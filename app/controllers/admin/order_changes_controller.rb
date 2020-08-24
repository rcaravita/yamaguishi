class Admin::OrderChangesController < AdminController

	# GET /admin/changes
	# GET /admin/changes.json
	def index

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: OrderChangesDatatable.new(view_context) }
		end
	end
end
