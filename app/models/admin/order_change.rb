#encoding: utf-8

class Admin::OrderChange < ActiveRecord::Base

	belongs_to :order
	belongs_to :administrator

	def status_to_s
		case self.status
			when 0
				"Aberto"
			when 1
				"Assinado"
			when 2
				"Confirmado"
			when 3
				"Agendado"
			when 4
				"Cancelado"
		end
	end
end
