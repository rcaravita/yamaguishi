class CreateAdminPages < ActiveRecord::Migration
  def change
    create_table :admin_pages do |t|
      t.string :title
      t.text :content
      t.string :link
			t.references :attach
      t.timestamps
    end
	add_index :admin_pages, :link, :unique => true
  end
end
