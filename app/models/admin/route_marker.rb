# encoding: UTF-8

class Admin::RouteMarker < ActiveRecord::Base
  belongs_to :route
  attr_protected :id

	acts_as_gmappable
	
	geocoded_by :gmaps4rails_address
	
	
	validates_presence_of :name, :city, :state
	
	def gmaps4rails_address
	 "#{self.quarter}, #{self.city} - #{self.state}" 
	end
	
end
