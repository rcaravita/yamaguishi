class CreateAdminRoutes < ActiveRecord::Migration
  def change
    create_table :admin_routes do |t|
      t.string :name
      t.integer :day
      t.float :value

      t.timestamps
    end
  end
end
