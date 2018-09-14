class AddFieldsToAdminProducer < ActiveRecord::Migration
  def change
    add_column :admin_producers, :website, :string
    add_column :admin_producers, :place, :string
  end
end
