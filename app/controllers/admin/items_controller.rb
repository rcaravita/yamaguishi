class Admin::ItemsController < AdminController
  # GET /admin/items
  # GET /admin/items.json

	def toggleVisibility
		i = Admin::Item.find(params[:id])
		i.visible = !i.visible
		i.highlight = false if i.visible == false
		i.save
		
		respond_to do |format|
			format.json { render json: i }
		end
	end
	
	def toggleHighlight
		i = Admin::Item.find(params[:id])
		i.highlight = !i.highlight
		i.visible = true if i.highlight == true
		i.save
		
		respond_to do |format|
			format.json { render json: i }
		end
	end
	
  def index
    @admin_items = Admin::Item.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @admin_items }
    end
  end

  # GET /admin/items/1
  # GET /admin/items/1.json
  def show
    @admin_item = Admin::Item.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @admin_item }
    end
  end

  # GET /admin/items/new
  # GET /admin/items/new.json
  def new
    @admin_item = Admin::Item.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @admin_item }
    end
  end

  # GET /admin/items/1/edit
  def edit
    @admin_item = Admin::Item.find(params[:id])
  end

  # POST /admin/items
  # POST /admin/items.json
  def create
    @admin_item = Admin::Item.new(params[:admin_item])

    respond_to do |format|
      if @admin_item.save
        format.html { redirect_to @admin_item, notice: 'Item was successfully created.' }
        format.json { render json: @admin_item, status: :created, location: @admin_item }
      else
        format.html { render action: "new" }
        format.json { render json: @admin_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /admin/items/1
  # PUT /admin/items/1.json
  def update
    @admin_item = Admin::Item.find(params[:id])

    respond_to do |format|
      if @admin_item.update_attributes(params[:admin_item])
        format.html { redirect_to @admin_item, notice: 'Item was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @admin_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/items/1
  # DELETE /admin/items/1.json
  def destroy
    @admin_item = Admin::Item.find(params[:id])
    @admin_item.destroy

    respond_to do |format|
      format.html { redirect_to admin_items_url }
      format.json { head :no_content }
    end
  end

private
	def item_params
		params.require(:item).permit(:avail)
	end
end
