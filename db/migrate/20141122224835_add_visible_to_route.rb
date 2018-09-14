class AddVisibleToRoute < ActiveRecord::Migration
  def change
    add_column :admin_routes, :visible, :boolean
  end
end
