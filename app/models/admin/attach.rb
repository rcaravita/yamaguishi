class Admin::Attach < ActiveRecord::Base
  attr_protected
	
	has_many :pages
	
	validates_presence_of :description
	
	has_attached_file :attach,
		:styles => lambda { |a|
			if a.instance.attach_content_type == "application/pdf"
				{:big => ["745x745", :png], :medium => ["300x300", :png], :thumb => ["100x100", :png], :banner => ["950x172#", :png] }
			else
				{:big => "745x745", :medium => "300x300", :thumb => "100x100", :banner => "950x172#" }
			end
		},
		:default_url => 'paperclip/:style.jpg',
		:path => ":rails_root/public/a/:id/:basename-:style.:extension",
		:url => "/a/:id/:basename-:style.:extension",
		:processor => "mini_magick",
		:convert_options => {
			:all => '-strip -colorspace RGB',
			:banner => "-background white -compose Copy -gravity center -extent 950x172"
		}
		
	before_post_process :set_image_basename
	
	validates_attachment_content_type :attach, :content_type => [/image/, /text/]
		
	def as_json(options={})
		{:title => self.description,
		:value => self.attach.url(:big)}
	end
	
	private

		def set_image_basename
			extension = File.extname(attach_file_name).downcase
			basename = File.basename(attach_file_name, File.extname(attach_file_name)).parameterize
			self.attach.instance_write(:file_name, "#{basename}#{extension}")
		end
		
end
