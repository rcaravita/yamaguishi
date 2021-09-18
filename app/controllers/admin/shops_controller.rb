class Admin::ShopsController < AdminController
	# GET /admin/shops
	# GET /admin/shops.json
	def index
		@admin_shops = Admin::Shop.all

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @admin_shops }
		end
	end

	# GET /admin/shops/1
	# GET /admin/shops/1.json
	def show
		@admin_shop = Admin::Shop.find(params[:id])
		@marker = @admin_shop.to_gmaps4rails do |object, marker|
			marker.infowindow render_to_string(:partial => "/website/marker_infowindow", :locals => { :object => object})
			marker.picture({:picture => view_context.image_path("shared/#{object.kind.parameterize}.png"), :width => 40, :height => 40})
			marker.title object.name
			marker.json({:id => "#{object.id}"})
		end
		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @admin_shop }
		end
	end

	# GET /admin/shops/new
	# GET /admin/shops/new.json
	def new
		@admin_shop = Admin::Shop.new

		respond_to do |format|
			format.html # new.html.erb
			format.json { render json: @admin_shop }
		end
	end

	# GET /admin/shops/1/edit
	def edit
		@admin_shop = Admin::Shop.find(params[:id])
	end

	# POST /admin/shops
	# POST /admin/shops.json
	def create
		@admin_shop = Admin::Shop.new(admin_shop_params)

		respond_to do |format|
			if @admin_shop.save
				format.html { redirect_to @admin_shop, notice: 'Shop was successfully created.' }
				format.json { render json: @admin_shop, status: :created, location: @admin_shop }
			else
				format.html { render action: "new" }
				format.json { render json: @admin_shop.errors, status: :unprocessable_entity }
			end
		end
	end

	# PUT /admin/shops/1
	# PUT /admin/shops/1.json
	def update
		@admin_shop = Admin::Shop.find(params[:id])

		respond_to do |format|
			if @admin_shop.update_attributes(admin_shop_params)
				format.html { redirect_to @admin_shop, notice: 'Shop was successfully updated.' }
				format.json { head :no_content }
			else
				format.html { render action: "edit" }
				format.json { render json: @admin_shop.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /admin/shops/1
	# DELETE /admin/shops/1.json
	def destroy
		@admin_shop = Admin::Shop.find(params[:id])
		@admin_shop.destroy

		respond_to do |format|
			format.html { redirect_to admin_shops_url }
			format.json { head :no_content }
		end
	end

private
	def admin_shop_params
		params.require(:admin_shop).permit(:name, :kind, :postcode, :phone, :address, :number, :complement,
			:quarter, :city, :state, :latitude, :longitude, :gmaps, :description)
	end
end
