class CreateAdminCategories < ActiveRecord::Migration
  def change
    create_table :admin_categories do |t|
      t.string :name
      t.string :link
      t.integer :position

      t.timestamps
    end
  end
end
