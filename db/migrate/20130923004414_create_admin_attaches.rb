class CreateAdminAttaches < ActiveRecord::Migration
  def change
    create_table :admin_attaches do |t|
      t.string :description
			t.boolean :slideshow, default: 0
			t.attachment :attach
      t.timestamps
    end
  end
end
