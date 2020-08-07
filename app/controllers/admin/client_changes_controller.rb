class Admin::ClientChangesController < AdminController

	def markAsViewed
		o = Admin::ClientChange.find(params[:id])
		if o.viewed
			o.viewed = false
			o. viewed_at = nil
		else
			o.viewed = true
			o. viewed_at = Time.now.to_date
		end
		o.save

		render nothing: true
	end


	# GET /admin/changes
	# GET /admin/changes.json
	def index
		@admin_changes = Admin::ClientChange.order("id DESC")

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @admin_changes }
		end
	end
end
