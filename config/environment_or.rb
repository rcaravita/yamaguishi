# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Yamaguishi::Application.initialize!

ActionMailer::Base.smtp_settings = {
}
