class Website::Clients::RegistrationsController < Devise::RegistrationsController

	include Store

	before_filter :define_order

	def new
		@data = Admin::Administrator.find(1)
		resource = build_resource({})
		resource.addresses.build
		resource.kind = "0"
		resource.new = 1
		respond_with resource
	end

	def update
		@admin_client = current_client

		@old_name = @admin_client.name
		@old_kind = @admin_client.kind_to_s
		@old_document = @admin_client.document
		@old_email = @admin_client.email
		@old_phone = @admin_client.phone
		@old_add = @admin_client.main_address
		@old_rg = @admin_client.rg
		@old_cpf = @admin_client.cpf

		@admin_client.route_id = nil unless params[:admin_client][:addresses_attributes]["0"][:postcode] == @admin_client.main_address.postcode

		if @admin_client.update_attributes(admin_client_params)
			sign_in @admin_client, :bypass => true

			new_record = Admin::ClientChange.new(:client_id => @admin_client.id, :name => @old_name, :phone => @old_phone, :email => @old_email, :rg => @old_rg, :cpf => @old_cpf, :full_address => @old_add.full_address + ", " + @old_add.quarter + " - " + @old_add.city + "/" + @old_add.state + " - " + @old_add.postcode)
			new_record.save!

			SystemMailer.client_changed(@old_name, @old_kind, @old_document, @old_email, @old_phone, @old_add, @admin_client).deliver
			redirect_to session[:previous_url] || client_path, notice: 'Dados atualizados com sucesso.'
		else
			render template: "/website/client"
		end
	end

private
	def admin_client_params
		params.require(:admin_client).permit(:name,
			:kind, :phone, :mobile, :email, :rg, :cpf, :cnpj, :aniversary, :gender, :optin, :route_id,
			:yamasis_id, :shopping_id, :ddd, :password, :password_confirmation, :addresses_attributes, :remember_me, :new,
			:accept_delivery, :accept_pickup,
			addresses_attributes: [:id, :postcode, :complete_address, :number, :complement, :quarter, :city, :state])
	end

	# Notice the name of the method
	def sign_up_params
		params.require(:client).permit(:name,
			:kind, :phone, :mobile, :email, :rg, :cpf, :cnpj, :aniversary, :gender, :optin, :route_id,
			:yamasis_id, :shopping_id, :ddd, :password, :password_confirmation, :addresses_attributes, :remember_me, :new,
			:accept_delivery, :accept_pickup,
			addresses_attributes: [:id, :postcode, :complete_address, :number, :complement, :quarter, :city, :state])
	end

end
