class CreateAdminProducts < ActiveRecord::Migration
	def change
		create_table :admin_products do |t|
			t.string :code
			t.string :name
			t.string :link
			t.text :description
			t.references :category

			t.timestamps
		end
		add_index :admin_products, :category_id
	end
end
