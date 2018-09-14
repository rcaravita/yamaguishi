class CreateAdminClients < ActiveRecord::Migration
  def change
    create_table :admin_clients do |t|
      t.string :name
      t.string :kind
      t.string :document
      t.string :phone
      t.references :address

      t.timestamps
    end
    add_index :admin_clients, :address_id
  end
end
