class AddFieldsToAdminOrder < ActiveRecord::Migration
  def change
    add_column :admin_orders, :confirmed_at, :datetime
    add_column :admin_orders, :delivery, :boolean
  end
end
