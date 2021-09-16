#encoding: utf-8

class Admin::Category < ActiveRecord::Base
	
	acts_as_list

	has_many :products
	has_many :items, :through => :products
	
	default_scope -> { order(:position) }

	validates :link, :presence => true, :uniqueness => true
	validates :name, :presence => true
	
	before_validation :parameterize_link
	before_destroy :nil_nested_before_destroy
	
	def parameterize_link
		self.link = self.link.parameterize.gsub(".", "-")
	end
	
	def available_items
		self.items.available
	end
	
	def nil_nested_before_destroy
		self.products.each do |p|
			p.category_id = nil
			p.save(validate: false)
		end
	end
	
end
