class AddNumberOfSeatsToShops < ActiveRecord::Migration[6.1]
  def change
    add_column :shops, :number_of_seats, :text
  end
end
