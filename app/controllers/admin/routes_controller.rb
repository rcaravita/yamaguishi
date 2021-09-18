class Admin::RoutesController < AdminController
  # GET /admin/routes
  # GET /admin/routes.json
  def index
    @admin_routes = Admin::Route.all
		@routes = Admin::RouteMarker.all.to_gmaps4rails do |object, marker|
		  #marker.infowindow render_to_string(:partial => "/users/my_template", :locals => { :object => user})
			marker.infowindow "<h4>#{I18n.translate(Date::DAYNAMES[object.route.day])} (#{object.route.name})</h4>"
		  #marker.picture({
		  #                :picture => "http://www.blankdots.com/img/github-32x32.png",
		  #                :width   => 32,
		  #                :height  => 32
		  #               })
		  #marker.title   object.route.name
		  marker.sidebar object.city + "#{' - ' unless object.quarter.blank?}" + object.quarter
		  #marker.json({ :id => user.id, :foo => "bar" })
		end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @admin_routes }
    end
  end

  # GET /admin/routes/1
  # GET /admin/routes/1.json
  def show
    @admin_route = Admin::Route.find(params[:id])
		@route_markers = @admin_route.route_markers
		@markers = @admin_route.route_markers.to_gmaps4rails do |object, marker|
			marker.infowindow "<h4>#{object.name}</h4><p>#{object.city}#{' - ' unless object.quarter.blank?}#{object.quarter}</p>"
			#marker.picture({:picture => view_context.image_path("shared/#{object.kind.parameterize}.png"), :width => 40, :height => 40})
			marker.title object.name
			marker.json({:id => "#{object.id}"})
		end
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @admin_route }
    end
  end

  # GET /admin/routes/new
  # GET /admin/routes/new.json
  def new
    @admin_route = Admin::Route.new
		@admin_route.route_markers.build
		
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @admin_route }
    end
  end

  # GET /admin/routes/1/edit
  def edit
    @admin_route = Admin::Route.find(params[:id])
  end

  # POST /admin/routes
  # POST /admin/routes.json
  def create
    @admin_route = Admin::Route.new(admin_route_params)

    respond_to do |format|
      if @admin_route.save
        format.html { redirect_to @admin_route, notice: 'Route was successfully created.' }
        format.json { render json: @admin_route, status: :created, location: @admin_route }
      else
        format.html { render action: "new" }
        format.json { render json: @admin_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /admin/routes/1
  # PUT /admin/routes/1.json
  def update
    @admin_route = Admin::Route.find(params[:id])

    respond_to do |format|
      if @admin_route.update_attributes(admin_route_params)
        format.html { redirect_to @admin_route, notice: 'Route was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @admin_route.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/routes/1
  # DELETE /admin/routes/1.json
  def destroy
    @admin_route = Admin::Route.find(params[:id])
    @admin_route.destroy

    respond_to do |format|
      format.html { redirect_to admin_routes_url }
      format.json { head :no_content }
    end
  end

private
	def admin_route_params
		params.require(:admin_route).permit(:name, :description, :value, :day, :visible, :route_markers_attributes,
		route_markers_attributes: [:id, :_destroy, :name, :quarter, :city, :state, :latitude, :longitude, :gmaps])
	end
end
