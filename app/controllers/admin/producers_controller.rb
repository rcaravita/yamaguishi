class Admin::ProducersController < AdminController
  # GET /admin/producers
  # GET /admin/producers.json
  def index
    @admin_producers = Admin::Producer.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @admin_producers }
    end
  end

  # GET /admin/producers/1
  # GET /admin/producers/1.json
  def show
    @admin_producer = Admin::Producer.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @admin_producer }
    end
  end

  # GET /admin/producers/new
  # GET /admin/producers/new.json
  def new
    @admin_producer = Admin::Producer.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @admin_producer }
    end
  end

  # GET /admin/producers/1/edit
  def edit
    @admin_producer = Admin::Producer.find(params[:id])
  end

  # POST /admin/producers
  # POST /admin/producers.json
  def create
    @admin_producer = Admin::Producer.new(params[:admin_producer])

    respond_to do |format|
      if @admin_producer.save
        format.html { redirect_to @admin_producer, notice: 'Producer was successfully created.' }
        format.json { render json: @admin_producer, status: :created, location: @admin_producer }
      else
        format.html { render action: "new" }
        format.json { render json: @admin_producer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /admin/producers/1
  # PUT /admin/producers/1.json
  def update
    @admin_producer = Admin::Producer.find(params[:id])

    respond_to do |format|
      if @admin_producer.update_attributes(params[:admin_producer])
        format.html { redirect_to @admin_producer, notice: 'Producer was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @admin_producer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/producers/1
  # DELETE /admin/producers/1.json
  def destroy
    @admin_producer = Admin::Producer.find(params[:id])
    @admin_producer.destroy

    respond_to do |format|
      format.html { redirect_to admin_producers_url }
      format.json { head :no_content }
    end
  end
end
