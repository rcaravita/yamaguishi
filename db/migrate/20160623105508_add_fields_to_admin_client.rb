class AddFieldsToAdminClient < ActiveRecord::Migration
  def change
    add_column :admin_clients, :number, :string
    add_column :admin_clients, :mobile, :string
  end
end
