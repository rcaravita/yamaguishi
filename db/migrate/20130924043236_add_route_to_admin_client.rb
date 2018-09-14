class AddRouteToAdminClient < ActiveRecord::Migration
  def change
    add_column :admin_clients, :route_id, :integer
    add_column :admin_clients, :yamasis_id, :integer
    add_index :admin_clients, :yamasis_id
  end
end
