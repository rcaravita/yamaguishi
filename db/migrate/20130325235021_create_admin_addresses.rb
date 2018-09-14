class CreateAdminAddresses < ActiveRecord::Migration
  def change
    create_table :admin_addresses do |t|
      t.string :address
      t.string :number
      t.string :complement
      t.string :quarter
      t.string :city
      t.string :state
      t.string :postcode
      t.string :kind
      t.string :addressable_type
      t.integer :addressable_id

      t.timestamps
    end
  end
end
