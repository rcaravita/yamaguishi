class CreateAdminDeliveries < ActiveRecord::Migration
  def change
    create_table :admin_deliveries do |t|
      t.datetime :date
      t.float :value
      t.references :order

      t.timestamps
    end
    add_index :admin_deliveries, :order_id
  end
end
