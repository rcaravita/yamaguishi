class Website::Clients::SessionsController < Devise::SessionsController
	
	include Store
	
	before_filter :define_order
	
	def new
		@data = Admin::Administrator.find(1)
	end

	#def create
	#	email = params[:client][:email]
	#	client = Admin::Client.find_by_email(email)
	#	if client.encrypted_password.blank?
	#		client.password="#{params[:client][:password]}"
	#		client.password_confirmation="#{params[:client][:password]}"
	#		client.save
	#		puts "###### #{client.name} - #{client.email} password set to #{params[:client][:password]}."
	#		
	#		client = Admin::Client.find(client.id)
	#		sign_in client, bypass: true
	#		redirect_to session[:previous_url] || root_path
	#	else
	#		super
	#	end
	#end
	
end
