class Admin::ClientChangesController < AdminController

	def markAsViewed
		o = Admin::ClientChange.find(params[:id])
		if o.viewed
			o.viewed = false
			o.viewed_at = nil
		else
			o.viewed = true
			o.viewed_at = Time.now
		end
		o.save

		render nothing: true
	end


	# GET /admin/client_changes
	# GET /admin/client_changes.json
	def index
		@admin_changes = Admin::ClientChange.order("id DESC")

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @admin_changes }
		end
	end

	# GET /admin/client_changes/1
	# GET /admin/client_changes/1.json
	def show
		@admin_change = Admin::ClientChange.find(params[:id])
		@admin_client = @admin_change.client

		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @admin_change }
		end
	end
end
