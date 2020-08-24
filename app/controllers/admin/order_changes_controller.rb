class Admin::OrderChangesController < AdminController

	# GET /admin/changes
	# GET /admin/changes.json
	def index
		@admin_changes = Admin::OrderChange.order("id DESC").limit(100)

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @admin_changes }
		end
	end
end
