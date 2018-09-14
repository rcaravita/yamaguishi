class CreateAdminOrders < ActiveRecord::Migration
  def change
    create_table :admin_orders do |t|
      t.references :client
      t.references :delivery
      t.integer :status

      t.timestamps
    end
    add_index :admin_orders, :client_id
    add_index :admin_orders, :delivery_id
  end
end
