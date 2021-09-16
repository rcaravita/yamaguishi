class Admin::Producer < ActiveRecord::Base

	has_many :items
	accepts_nested_attributes_for :items, :allow_destroy => true
	
	validates_presence_of :name
	validates :link, :presence => true, :uniqueness => true
	
	before_destroy :nil_nested_before_destroy	
	before_validation :parameterize_link
	
	def parameterize_link
		self.link = self.link.parameterize.gsub(".", "-")
	end
	
	def nil_nested_before_destroy
		self.items.each do |p|
			p.producer_id = nil
			p.save!
		end
	end
end
