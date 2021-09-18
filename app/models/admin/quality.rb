class Admin::Quality < ActiveRecord::Base

	has_many :items
	accepts_nested_attributes_for :items, :allow_destroy => true
	
	before_destroy :nil_nested_before_destroy
	
	def nil_nested_before_destroy
		self.items.each do |p|
			p.producer_id = nil
			p.save!
		end
	end
end
