class CreateAdminItems < ActiveRecord::Migration
  def change
    create_table :admin_items do |t|
      t.float :quantity
      t.string :unity
      t.float :value
      t.references :product
      t.references :producer
      t.references :quality
      t.boolean :visible, :default => false

      t.timestamps
    end
    add_index :admin_items, :product_id
    add_index :admin_items, :producer_id
    add_index :admin_items, :quality_id
  end
end
