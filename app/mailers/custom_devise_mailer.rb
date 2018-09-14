# encoding: utf-8

class CustomDeviseMailer < Devise::Mailer
	helper :application # gives access to all helpers defined within `application_helper`.
	include Devise::Controllers::UrlHelpers # Optional. eg. `confirmation_url`
	
	default		:from => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>",
						:reply_to => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>",
						:return_path => "Yamaguishi Orgânicos <produtos@yamaguishi.com.br>"
						
	default_url_options[:host] = "www.yamaguishi.com.br"
	
	def reset_password_instructions(record, token, opts={})
		@token = token
		#devise_mail(record, :reset_password_instructions, opts)
		@record = record
		mail(:to => record.email, 
			subject: "Recuperação de Senha",
			template_path: 'website/clients/mailer',
			template_name: 'reset_password_instructions')
	end
	
	#def sign_up_confirmation(record)
	#	@record = record
	#	mail(:to => record.email,
	#		subject: "Confirmação de Cadastro",
	#		template_path: 'website/clients/mailer',
	#		template_name: 'sign_up_confirmation')
	#end
	
end