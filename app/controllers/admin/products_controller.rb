class Admin::ProductsController < AdminController
	# GET /admin/products
	# GET /admin/products.json
	def index
		@admin_items = Admin::Item.all

		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @admin_products }
		end
	end

	# GET /admin/products/1
	# GET /admin/products/1.json
	def show

		@admin_product = Admin::Product.find(params[:id])

		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @admin_product }
		end
	end

	# GET /admin/products/new
	# GET /admin/products/new.json
	def new
		@admin_product = Admin::Product.new
		@admin_product.items.build

		respond_to do |format|
			format.html # new.html.erb
			format.json { render json: @admin_product }
		end
	end

	# GET /admin/products/1/edit
	def edit
		@admin_product = Admin::Product.find(params[:id])
	end

	# POST /admin/products
	# POST /admin/products.json
	def create
		@admin_product = Admin::Product.new(params[:admin_product])

		handle_routes

		respond_to do |format|
			if @admin_product.save
				format.html { redirect_to @admin_product, notice: 'Produto criado com sucesso.' }
				format.json { render json: @admin_product, status: :created, location: @admin_product }
			else
				format.html { render action: "new" }
				format.json { render json: @admin_product.errors, status: :unprocessable_entity }
			end
		end
	end

	# PUT /admin/products/1
	# PUT /admin/products/1.json
	def update
		@admin_product = Admin::Product.find(params[:id])

		handle_routes

		respond_to do |format|
			if @admin_product.update_attributes(params[:admin_product])
				format.html { redirect_to @admin_product, notice: 'Produto salvo com sucesso.' }
				format.json { head :no_content }
			else
				format.html { render action: "edit" }
				format.json { render json: @admin_product.errors, status: :unprocessable_entity }
			end
		end
	end

	# DELETE /admin/products/1
	# DELETE /admin/products/1.json
	def destroy
		@admin_product = Admin::Product.find(params[:id])
		@admin_product.destroy

		respond_to do |format|
			format.html { redirect_to admin_products_url }
			format.json { head :no_content }
		end
	end

private
	def handle_routes
		if params['route_ids']
			@admin_product.routes.clear
			routes = params['route_ids'].map { |id| Admin::Route.find(id) }
			@admin_product.routes << routes
		end
	end
end
