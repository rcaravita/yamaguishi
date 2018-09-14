class ChangeFieldsOnClient < ActiveRecord::Migration
	
  def up
		remove_column :admin_clients, :document
		add_column :admin_clients, :shopping_id, :integer
		add_column :admin_clients, :ddd, :string
		add_column :admin_addresses, :complete_address, :string
  end

  def down
		add_column :admin_clients, :document, :string
		remove_column :admin_clients, :shopping_id
		remove_column :admin_clients, :ddd
		remove_column :admin_addresses, :complete_address
  end

end
