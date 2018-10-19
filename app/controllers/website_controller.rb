# encoding: UTF-8

class WebsiteController < ApplicationController
	
	include Store
	helper_method Store.instance_methods
	
	before_filter :define_order #from Store module
	
	before_filter :define_order_details, except: [:order_update, :order_confirmed] #from Store module
		
	def index
		if params[:s]
			redirect_to :back and return if params[:s].blank?
			@items = search(params[:s])
		else
			@items = Admin::Item.where(highlight: true).order("RAND()").limit(6)
		end
	end
	
	def category
		@category = Admin::Category.find_by_link(params[:link])
		@items = @category.available_items
		#render action: :index
	end
	
	def product
		@admin_product = Admin::Product.find_by_link(params[:link])
	end
	
	def client
		redirect_to root_path and return unless current_client
		@client = current_client
	end
	
	def page
		case params[:page]
		when "loja"
			@markers = Admin::Shop.all.to_gmaps4rails do |object, marker|
				marker.infowindow render_to_string(:partial => "/website/marker_infowindow", :locals => { :object => object})
				marker.picture({:picture => view_context.image_path("shared/#{object.kind.parameterize}.png"), :width => 40, :height => 40})
				marker.title object.name
				marker.json({:id => "#{object.id}"})
			end
			@routes = Admin::Route.where(visible: true).order(:description, :day)
			@shops = Admin::Shop.where(:kind => "Ponto de Venda").order(:city)
			@fairs = Admin::Shop.where(:kind => "Feira Orgânica").order(:city)
			render "/website/pages/loja"
		#when "passo-a-passo"
		#	render "/website/pages/passo-a-passo"
		else
			begin
				@page = Admin::Page.find_by_link(params[:page])
				render "/website/pages/generic"
			rescue
				redirect_to root_path, notice: "Página não encontrada."
			end
		end
	end
	
	def find_local
		if params[:postcode].blank?
			render :js => "alert('Informe um local válido para consulta.');"
		else
			render :js => "findAddress('#{params[:postcode]}');"
		end
	end
	
	def where_to_buy #called by js, render js do place the found locals
		lat = params[:lat]
		lng = params[:lng]
		@fairs = Admin::Shop.where(:kind => "Feira Orgânica").near([lat, lng], 20, :units => :km).limit(3)
		@shops = Admin::Shop.where(:kind => "Ponto de Venda").near([lat, lng], 20, :units => :km).limit(4)
		@route = Admin::RouteMarker.near([lat, lng], 30, :units => :km).first.route if Admin::RouteMarker.near([lat, lng], 30, :units => :km).first
	end
	
	def contact_form_new
		@contact = ContactForm.new
		render "/website/pages/atendimento"
	end

	def contact_form_create
		@contact = ContactForm.new(params[:contact_form])
		if @contact.valid?
			if SystemMailer.contact_form(@contact).deliver
				redirect_to(:back, :notice => "Messagem enviada.")
			end
		else
			flash.now.alert = "Preencha todos os campos."
			render template: "/website/pages/atendimento"
		end
	end
	
end
