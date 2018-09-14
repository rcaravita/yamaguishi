class CreateAdminShops < ActiveRecord::Migration
  def change
    create_table :admin_shops do |t|
      t.string :name
      t.text :description
      t.string :address
      t.string :number
      t.string :complement
      t.string :quarter
      t.string :city
      t.string :state
      t.string :postcode
      t.string :phone
      t.float :latitude
      t.float :longitude
      t.boolean :gmaps
      t.string :kind

      t.timestamps
    end
  end
end
