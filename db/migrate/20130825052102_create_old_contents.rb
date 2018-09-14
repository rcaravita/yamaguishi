class CreateOldContents < ActiveRecord::Migration
  def change
    create_table :old_contents do |t|
      t.string :name
      t.text :description
      t.string :value
      t.string :image
      t.string :category

      t.timestamps
    end
  end
end
