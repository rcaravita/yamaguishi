class GeneralChanges < ActiveRecord::Migration
	def up
		drop_table :admin_deliveries
		rename_column :admin_orders, :delivery_id, :delivery_date
		change_column :admin_orders, :delivery_date, :datetime
		add_column :admin_orders, :delivery_value, :float, :default => 0
		add_column :admin_orders, :total_value, :float, :default => 0
		add_column :admin_orders, :items_value, :float, :default => 0
		add_column :admin_orders, :items_quantity, :integer, :default => 0
		remove_column :admin_order_items, :value
		add_column :admin_order_items, :total_value, :float, :default => 0
		add_column :admin_items, :highlight, :boolean, :default => false
		remove_column :admin_clients, :address_id
		add_column :admin_items, :code, :integer
	end

	def down
		remove_column :admin_items, :code
		add_column :admin_clients, :address_id, :integer
		remove_column :admin_items, :highlight
		remove_column :admin_order_items, :total_value
		add_column :admin_order_items, :value, :float
		remove_column :admin_orders, :items_quantity
		remove_column :admin_orders, :items_value
		remove_column :admin_orders, :total_value
		remove_column :admin_orders, :delivery_value
		change_column :admin_orders, :delivery_date, :integer
		rename_column :admin_orders, :delivery_date, :delivery_id
		create_table :admin_deliveries do |t|
			t.datetime :date
			t.float :value
			t.references :order
			t.timestamps
		end
		add_index :admin_deliveries, :order_id
	end
end
