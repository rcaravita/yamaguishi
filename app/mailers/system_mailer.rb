# encoding: utf-8

class SystemMailer < ActionMailer::Base
	#add_template_helper(StoreHelper)
	#add_template_helper(ApplicationHelper)

	default		:from => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>",
						:reply_to => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>",
						:return_path => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>"

	def order_confirmation(order, client)
		@order = order
		@client = client
		mail(:to => "#{@client.name} <#{@client.email}>",
			:bcc => "siteyamaguishi@gmail.com, produtos@yamaguishi.com.br",
			:subject => "Confirmação de Pedido ##{@order.id.to_s.rjust(6, '0')}",
			:reply_to => "#{@client.name} <#{@client.email}>")
	end

	def order_cancel(order, client)
		@order = order
		@client = client
		mail(:to => "produtos@yamaguishi.com.br",
			:bcc => "siteyamaguishi@gmail.com",
			:subject => "Cancelamento do Pedido ##{@order.id.to_s.rjust(6, '0')}",
			:reply_to => "#{@client.name} <#{@client.email}>")
	end

	def client_changed(old_name, old_kind, old_document, old_email, old_phone, old_add, new)

		@old_name = old_name
		@old_kind = old_kind
		@old_document = old_document
		@old_email = old_email
		@old_phone = old_phone
		@old_add = old_add

		@new = new
		mail(:to => "produtos@yamaguishi.com.br",
			:bcc => "siteyamaguishi@gmail.com",
			:subject => "Alteração de Cliente ##{@new.yamasis_id.to_s.rjust(6, '0')} [#{@new.name}]",
			:reply_to => "#{@new.name} <#{@new.email}>")
	end

	def contact_form(contact)
		@contact = contact
		mail	:subject => "[Mensagem do Site] #{contact.subject}",
					:to => "produtos@yamaguishi.com.br",
					:bcc => "siteyamaguishi@gmail.com",
					:reply_to => "#{@contact.name} <#{@contact.email}>"
	end

end
