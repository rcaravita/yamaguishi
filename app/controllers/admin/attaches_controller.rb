class Admin::AttachesController < AdminController

	def toggleSlideshow
		i = Admin::Attach.find(params[:id])
		i.slideshow = !i.slideshow
		i.save
		
		respond_to do |format|
			format.json { render json: i }
		end
	end
	
	def gallery
		@attaches = Admin::Attach.all
		respond_to do |format|
      format.html {
				render "gallery", layout: false
			}
      format.json { render json: @attaches }
    end
		
	end
	
  def index
    @admin_attaches = Admin::Attach.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @admin_attaches }
    end
  end

  # GET /admin/attaches/1
  # GET /admin/attaches/1.json
  def show
    @admin_attach = Admin::Attach.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @admin_attach }
    end
  end

  # GET /admin/attaches/new
  # GET /admin/attaches/new.json
  def new
    @admin_attach = Admin::Attach.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @admin_attach }
    end
  end

  # GET /admin/attaches/1/edit
  def edit
    @admin_attach = Admin::Attach.find(params[:id])
  end

  # POST /admin/attaches
  # POST /admin/attaches.json
  def create
    @admin_attach = Admin::Attach.new(admin_attach_params)

    respond_to do |format|
      if @admin_attach.save
        format.html { redirect_to admin_attaches_url, notice: 'Attach was successfully created.' }
        format.json { render json: admin_attaches_url, status: :created, location: @admin_attach }
      else
        format.html { render action: "new" }
        format.json { render json: @admin_attach.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /admin/attaches/1
  # PUT /admin/attaches/1.json
  def update
    @admin_attach = Admin::Attach.find(params[:id])

    respond_to do |format|
      if @admin_attach.update_attributes(admin_attach_params)
        format.html { redirect_to admin_attaches_url, notice: 'Attach was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @admin_attach.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/attaches/1
  # DELETE /admin/attaches/1.json
  def destroy
    @admin_attach = Admin::Attach.find(params[:id])
    @admin_attach.destroy

    respond_to do |format|
      format.html { redirect_to admin_attaches_url }
      format.json { head :no_content }
    end
  end

private
	def admin_attach_params
		params.require(:admin_attach).permit(:name, :filename, :description, :attach)
	end
end
