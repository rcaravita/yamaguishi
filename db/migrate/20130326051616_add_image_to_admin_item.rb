class AddImageToAdminItem < ActiveRecord::Migration
	def change
		add_column :admin_items, :image_file_name, :string
		add_column :admin_items, :image_content_type, :string
		add_column :admin_items, :image_file_size, :integer
	end
end
