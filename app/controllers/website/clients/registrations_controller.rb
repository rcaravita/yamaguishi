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

		@admin_client.route_id = nil unless params[:admin_client][:addresses_attributes]["0"][:postcode] == @admin_client.main_address.postcode

		if @admin_client.update_attributes(params[:admin_client])
			sign_in @admin_client, :bypass => true

			new_record = Admin::ClientChange.new(:client_id => @admin_client.id)
			new_record.save!

			SystemMailer.client_changed(@old_name, @old_kind, @old_document, @old_email, @old_phone, @old_add, @admin_client).deliver
			redirect_to session[:previous_url] || client_path, notice: 'Dados atualizados com sucesso.'
		else
			render template: "/website/client"
		end
	end

end
