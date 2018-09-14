class Admin::Shop < ActiveRecord::Base
	include AbstractController::Rendering
	attr_protected :id
	
	acts_as_gmappable
	
	geocoded_by :gmaps4rails_address
	
	validates_presence_of :name, :kind, :city, :state
	
	def gmaps4rails_address
	 "#{self.address} #{self.number} #{self.complement} #{self.quarter} #{self.city} #{self.state} #{self.postcode}"
	end
	
end
