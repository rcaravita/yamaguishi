#encoding: utf-8

class Admin::Administrator < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :token_authenticatable, :confirmable,
	# :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, #:registerable,
		:recoverable, :rememberable, :trackable, :validatable

	validates_presence_of :name

	validate :validate_password
	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

	def validate_password
		unless self.password_confirmation == self.password
			errors.add(:password, "não coincide com a confirmação.")
			errors.add(:password_confirmation, "não coincide com a senha.")
		end
	end
end
