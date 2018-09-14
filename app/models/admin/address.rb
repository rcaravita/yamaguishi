class Admin::Address < ActiveRecord::Base
	
  attr_protected :id

	belongs_to :addressable, :polymorphic => true
	
	validates_presence_of :quarter, :city, :state, :postcode, :complete_address, :number
	
	def full_address
		if self.number.blank?
			return self.complete_address
		else
			return "#{self.complete_address}, #{self.number} #{self.complement}"
		end
	end
	
end
