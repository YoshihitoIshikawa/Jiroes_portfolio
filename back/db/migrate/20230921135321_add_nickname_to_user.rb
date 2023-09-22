class AddNicknameToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :nickname, :string
    add_column :users, :name, :string
    add_column :users, :email, :string
    add_column :users, :picture, :string
  end
end
