class AddCnpjToClient < ActiveRecord::Migration
  def change
    add_column :admin_clients, :cnpj, :string
  end
end
