class Admin::Order < ActiveRecord::Base

	include Store

	attr_protected :id

  belongs_to :client

	has_many :order_items, :dependent => :destroy
	# ISTO É UM VALIDATE PARA ORDER VIA ADMIN MAS QUEBRA O PROCESSO VIA WEBSITE QUE NAO TEM ITEM_ID NO FORMULARIO
	#accepts_nested_attributes_for :order_items, :allow_destroy => true, :reject_if => proc { |attributes| attributes['quantity'].to_i < 1 || attributes['item_id'].blank? }
	accepts_nested_attributes_for :order_items, :allow_destroy => true, :reject_if => proc { |attributes| attributes['quantity'].to_i < 1 }

	after_save :update_total

	validates_presence_of :client_id
	validate :yamaguishi_date

	def yamaguishi_date
		if status == 2 && delivery == false && pickup == 1 && delivery_date < get_delivery_date(false, 1)
			errors.add(:delivery_date, "Data de entrega/retirada invalida")
		end
	end

	def add_item(item)
		oi = self.order_items.find_or_create_by_item_id(item.id)
		oi.quantity += 1
		self.transaction do
			oi.save
			self.save
		end
		return oi
	end

	def remove_item

	end

	def update_total
		self.update_column(:items_value, self.order_items.sum(:total_value))
		self.update_column(:items_quantity, self.order_items.sum(:quantity))
		self.update_column(:total_value, self.items_value + self.delivery_value)
	end

	def status_to_s
		case self.status
			when 0
				"Aberto"
			when 1
				"Assinado"
			when 2
				"Confirmado"
			when 3
				"Atendido"
			when 4
				"Cancelado"
		end
	end

end
