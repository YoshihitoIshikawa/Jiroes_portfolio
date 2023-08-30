class AddMenuToShops < ActiveRecord::Migration[6.1]
  def change
    add_column :shops, :menu, :text
  end
end
