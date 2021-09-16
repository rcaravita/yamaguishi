class Admin::Product < ActiveRecord::Base

	belongs_to :category

	has_many :items, :dependent => :destroy
	has_and_belongs_to_many :routes, join_table: "admin_products_admin_routes"
	accepts_nested_attributes_for :items, :allow_destroy => true

	validates_presence_of :name, :category_id#s, :items
	validates :link, :presence => true, :uniqueness => true

	before_validation :parameterize_link

	def parameterize_link
		self.link = self.link.parameterize.gsub(".", "-")
	end

	def visible
		!self.items.collect{|i| i if i.visible}.flatten.compact.empty?
	end
end
