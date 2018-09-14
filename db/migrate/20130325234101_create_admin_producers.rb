class CreateAdminProducers < ActiveRecord::Migration
  def change
    create_table :admin_producers do |t|
      t.string :name
      t.string :link
      t.text :description

      t.timestamps
    end
  end
end
