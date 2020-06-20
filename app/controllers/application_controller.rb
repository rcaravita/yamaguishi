class ApplicationController < ActionController::Base
	protect_from_forgery

	layout :layout_by_resource

	#FOR DEVISE

	after_filter :store_location

	def store_location
	  session[:previous_url] = request.fullpath unless request.fullpath =~ /\/admin/ || request.fullpath =~ /\/login/ || request.fullpath =~ /\/cadastro/ || request.fullpath =~ /\/cliente/ || request.fullpath =~ /\/pedido\/atualizar/
		#logger.info "\nstore_location: #{session[:previous_url]}\n"
	end

	def after_sign_in_path_for(resource)
		if devise_controller? && resource_name == :administrator
			administrator_root_path
		else
			session[:previous_url] || client_area_path
		end
	end

	def after_sign_out_path_for(resource)
		if devise_controller? && resource_name == :administrator
			administrator_root_path
		else
			root_path
		end
	end

	def after_sign_up_path_for(resource)
		if devise_controller? && resource_name == :administrator
			administrator_root_path
		else
			session[:previous_url] || root_path
		end
	end

	def after_update_path_for(resource)
		if devise_controller? && resource_name == :administrator
			administrator_root_path
		else
	  	session[:previous_url] || root_path
		end
	end

	protected

	def layout_by_resource
		if devise_controller? && resource_name == :administrator
			"admin"
		else
			"website"
		end
	end

	# Controllers can call this to add classes to the body tag
	def add_body_css_class(css_class)
		@body_css_classes ||= []
		@body_css_classes << css_class
	end

end
