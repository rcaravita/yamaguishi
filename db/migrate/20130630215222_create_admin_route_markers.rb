class CreateAdminRouteMarkers < ActiveRecord::Migration
  def change
    create_table :admin_route_markers do |t|
      t.string :quarter
      t.string :city
      t.string :state
      t.string :name
      t.text :description
      t.float :latitude
      t.float :longitude
			t.boolean :gmaps
      t.references :route

      t.timestamps
    end
    add_index :admin_route_markers, :route_id
  end
end
