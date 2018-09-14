class AddDescriptionToAdminRoute < ActiveRecord::Migration
  def change
    add_column :admin_routes, :description, :string
  end
end
