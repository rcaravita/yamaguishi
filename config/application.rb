require File.expand_path('../boot', __FILE__)

require 'rails/all'

if defined?(Bundler)
	# If you precompile assets before deploying to production, use this line
	Bundler.require(*Rails.groups)
	# If you want your assets lazily compiled in production, use this line
	# Bundler.require(:default, :assets, Rails.env)
end

module Yamaguishi
	class Application < Rails::Application
		# Settings in config/environments/* take precedence over those specified here.
		# Application configuration should go into files in config/initializers
		# -- all .rb files in that directory are automatically loaded.

		# Custom directories with classes and modules you want to be autoloadable.
		config.autoload_paths += %W(#{config.root}/modules)

		# Only load the plugins named here, in the order given (default is alphabetical).
		# :all can be used as a placeholder for all plugins not explicitly named.
		# config.plugins = [ :exception_notification, :ssl_requirement, :all ]

		# Activate observers that should always be running.
		# config.active_record.observers = :cacher, :garbage_collector, :forum_observer

		# Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
		# Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
		config.time_zone = 'Brasilia'

		# The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
		# config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
		config.i18n.default_locale = :pt

		# Configure the default encoding used in templates for Ruby 1.9.
		config.encoding = "utf-8"

		# Configure sensitive parameters which will be filtered from the log file.
		config.filter_parameters += [:password]

		# Enable escaping HTML in JSON.
		config.active_support.escape_html_entities_in_json = true

		# Use SQL instead of Active Record's schema dumper when creating the database.
		# This is necessary if your schema can't be completely dumped by the schema dumper,
		# like if you have constraints or database-specific column types
		# config.active_record.schema_format = :sql

		# Enable the asset pipeline
		config.assets.enabled = true

		config.assets.precompile += ['admin/main.css', 'website/main.css', 'admin/main.js', 'website/main.js']

		# Version of your assets, change this if you want to expire all your assets
		config.assets.version = '1.0'
		
		#ActionMailer::Base.delivery_method = :smtp
		#ActionMailer::Base.raise_delivery_errors = false
		#ActionMailer::Base.smtp_settings = {
		# :enable_starttls_auto => true,
		# :address => "smtp.gmail.com",
		# :port => 587,
		# :domain => "yamaguishi1.webbyapp.com",
		# :user_name => "siteyamaguishi@gmail.com",
		# :password => "",
		# :authentication => :plain
		#}
		
		#ActionMailer::Base.delivery_method = :smtp
		#ActionMailer::Base.raise_delivery_errors = false
		#ActionMailer::Base.smtp_settings = {
		# :address => "smtp.yamaguishi.com.br",
		# #:enable_starttls_auto => true,
		# :port => 25,
		# :domain => "yamaguishi.com.br",
		# :user_name => "pedidos@yamaguishi.com.br",
		# :password => "",
		# :authentication => :login
		#}
		
		#config.action_mailer.delivery_method = :sendmail
		#config.action_mailer.sendmail_settings = { :arguments => "-i" }
		#config.action_mailer.perform_deliveries = true
		#config.action_mailer.raise_delivery_errors = true
		
	end
end
