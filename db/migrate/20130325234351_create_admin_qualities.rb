class CreateAdminQualities < ActiveRecord::Migration
  def change
    create_table :admin_qualities do |t|
      t.string :name

      t.timestamps
    end
  end
end
