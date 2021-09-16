class Admin::Route < ActiveRecord::Base
	
	has_many :route_markers, :dependent => :destroy
	accepts_nested_attributes_for :route_markers, :allow_destroy => true
	
	has_many :clients
	
	validates_presence_of :name, :day, :value, :route_markers
	
end
