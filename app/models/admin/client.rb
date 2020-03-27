#encoding: utf-8

class Admin::Client < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	attr_accessible :name,
		:kind, :phone, :mobile, :email, :rg, :cpf, :cnpj, :aniversary, :gender, :optin, :route_id,
		:yamasis_id, :shopping_id, :ddd, :password, :password_confirmation, :addresses_attributes, :remember_me, :new


	has_many :addresses, :as => :addressable, :dependent => :destroy
	accepts_nested_attributes_for :addresses, :allow_destroy => true

	has_many :orders, :dependent => :destroy
	accepts_nested_attributes_for :orders, :allow_destroy => true

	belongs_to :route

	validates_presence_of :name, :kind, :phone

	validate :validate_document, :validate_password
	validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
	validates :name, length: { minimum: 10, too_short: "Por favor, preencha seu nome e sobrenome" }

	def validate_document
		case self.kind
		when "0"
			validates_cpf :cpf
		when "1"
			validates_cnpj :cnpj
		end
	end

	def validate_password
		unless self.password_confirmation == self.password
			errors.add(:password, "não coincide com a confirmação.")
			errors.add(:password_confirmation, "não coincide com a senha.")
		end
	end

	def kind_to_s
		case self.kind
		when "0"
			s = "CPF"
		when "1"
			s = "CNPJ"
		end
		return s
	end

	def document
		case self.kind
		when "0"
			s = self.cpf
		when "1"
			s = self.cnpj
		end
		return s
	end

	def main_address
		self.addresses.first
	end

	def self.import(file)
		spreadsheet = open_spreadsheet(file)
		header = spreadsheet.row(1)

		(2..spreadsheet.last_row).each do |i|
			row = Hash[[header, spreadsheet.row(i)].transpose]

			client = Admin::Client.new do |c|
				c.id = row["client_id"]
				c.kind = row["client_kind"]
				begin
					unless row["client_aniversary"].blank?
						da = Date.strptime(row["client_aniversary"], "%d/%m/%Y")
					end
				end
				c.aniversary = da.to_formatted_s(:db) if da
				#c.aniversary = row["client_aniversary"].to_formatted_s(:db) unless row["client_aniversary"].blank?
				c.password = row["cpf"]
			end

			client.attributes = row.to_hash.slice(*accessible_attributes)

			#unless client.save(validate: false)
			#	logger.info client.errors.to_yaml
			#end

			client.addresses << Admin::Address.new(
				complete_address: row["complete_address"],
				quarter: row["quarter"],
				city: row["city"],
				state: row["state"],
				postcode: row["postcode"],
				kind: row["address_kind"]
			)

			unless client.save(validate: false)
				logger.info client.errors.to_yaml
			end

		end

	end

	protected

	def self.open_spreadsheet(file)
		case File.extname(file.original_filename)
		when ".csv" then Roo::CSV.new(file.path, nil, :ignore)
		when ".xls" then Roo::Excel.new(file.path, nil, :ignore)
		when ".xlsx" then Roo::Excelx.new(file.path, nil, :ignore)
		else raise "Unknown file type: #{file.original_filename}"
		end
	end

  def password_required?
		# CONDICIONAR ESTE MÉTODO AO ROLE ADMIN OU NA ACTION EDIT COM O CAMPO EM BRANCO
    self.new_record?
  end

end
