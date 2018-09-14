class AddFieldToAdminClient < ActiveRecord::Migration
  def change
    add_column :admin_clients, :rg, :string
    add_column :admin_clients, :cpf, :string
    add_column :admin_clients, :aniversary, :date
    add_column :admin_clients, :gender, :boolean
    add_column :admin_clients, :optin, :boolean
  end
end
