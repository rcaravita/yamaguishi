class CreateAdminOrderItems < ActiveRecord::Migration
  def change
    create_table :admin_order_items do |t|
      t.references :item
      t.references :order
      t.integer :quantity, default: 0
      t.float :value, default: 0

      t.timestamps
    end
    add_index :admin_order_items, :item_id
    add_index :admin_order_items, :order_id
  end
end
