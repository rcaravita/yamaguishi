class Admin::Item < ActiveRecord::Base

	include ActionView::Helpers::NumberHelper

	belongs_to :product
	belongs_to :producer
	belongs_to :quality


	has_many :order_items, :dependent => :destroy
	accepts_nested_attributes_for :order_items, :allow_destroy => true

	has_one :category, :through => :product

	validates_presence_of :quantity, :unity, :value

	has_attached_file :image,
	:styles => {
		:medium => ["300x300#", :jpg],
		:thumb => ["142x142#", :jpg],
		:mini => ["50x50#", :jpg]
	},
	:default_url => 'paperclip/:style.jpg',
	:path => ":rails_root/public/i/:style/:basename.:extension",
	:url => "/i/:style/:basename.:extension",
	:processor => "mini_magick",
	:convert_options => {
		:medium => "-background white -compose Copy -gravity center -extent 300x300",
		:thumb => "-background white -compose Copy -gravity center -extent 142x142",
		:mini => "-background white -compose Copy -gravity center -extent 50x50"
	}

	before_post_process :set_image_basename

	validates_attachment_content_type :image, :content_type => [/image/, /text/]

	scope :available, -> { where(visible: 1) }
	scope :highlight, -> { where(highlight: 1) }

	def name
		return self.product.name
	end

	def complete_name
		self.name + " (#{self.quantity}#{self.unity})"
	end

	#def avail
	#	self.avail
	#end

	# attr_writer
	def avail=(val)
		@avail = val
	end

	# virtual attribute
	def avail
		@avail
	end

	private

		def set_image_basename
			extension = File.extname(image_file_name).downcase
			basename = File.basename(image_file_name, File.extname(image_file_name)).parameterize
			# SET IMAGE BASENAME BASEADO NO NOME DO PRODUTO SÓ FUNCIONA DEPOIS DO PRODUTO ESTAR GRAVADO, POR ISSO ON CREATE DÁ PAU DEVIDO À RELAÇÃO POLIMÓRFICA
			#self.image.instance_write(:file_name, "#{self.pictureable.permalink}#{extension}")
			self.image.instance_write(:file_name, "#{basename}#{extension}")
		end

end
