class Admin::OrderItem < ActiveRecord::Base
	
	include ActionView::Helpers::NumberHelper
	
	belongs_to :item
	belongs_to :order

	before_save :update_total

	def name
		self.item.name + " (#{number_to_human(self.item.quantity)} #{self.item.unity})"
	end
	
	def update_total
		self.total_value = self.item.value * self.quantity
	end
	
end
