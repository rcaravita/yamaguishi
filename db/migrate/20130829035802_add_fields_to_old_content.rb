class AddFieldsToOldContent < ActiveRecord::Migration
  def change
    add_column :old_contents, :code, :string
    add_column :old_contents, :old_value, :string
    add_column :old_contents, :weight, :string
    add_column :old_contents, :comment, :string
    add_column :old_contents, :best, :boolean
    add_column :old_contents, :promo, :boolean
    add_column :old_contents, :quited, :boolean
    add_column :old_contents, :highlight, :boolean
    add_column :old_contents, :visible, :boolean
  end
end
