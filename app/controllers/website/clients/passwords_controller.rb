class Website::Clients::PasswordsController < Devise::PasswordsController
	
	include Store
	
	layout 'website'

	before_filter :define_order
	
	
	# GET /resource/password/new
	def new
		self.resource = resource_class.new
	end

	# POST /resource/password
	def create
		self.resource = resource_class.send_reset_password_instructions(resource_params)
		yield resource if block_given?

		if successfully_sent?(resource)
			respond_with({}, location: after_sending_reset_password_instructions_path_for(resource_name))
		else
			respond_with(resource)
		end
	end
	
	def edit
		unless current_client
			self.resource = resource_class.new
			resource.reset_password_token = params[:reset_password_token]
		else
			redirect_to root_path
		end
	end

	def update
		self.resource = resource_class.reset_password_by_token(resource_params)
		yield resource if block_given?

		if resource.errors.empty?
			resource.unlock_access! if unlockable?(resource)
			flash_message = resource.active_for_authentication? ? :updated : :updated_not_active
			set_flash_message(:notice, flash_message) if is_flashing_format?
			sign_in(resource_name, resource)
			respond_with resource, location: after_resetting_password_path_for(resource)
			#respond_with resource, location: root_path
		else
			respond_with resource
		end
	end
	
	protected
	
	def after_resetting_password_path_for(resource)
		#signed_in_root_path(resource)
		root_path
	end
	
	# The path used after sending reset password instructions
	def after_sending_reset_password_instructions_path_for(resource_name)
		#new_session_path(resource_name) if is_navigational_format?
		root_path
	end
end
