class RemoveNicknameFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :nickname, :string
    remove_column :users, :name, :string
    remove_column :users, :picture, :string
    remove_column :users, :email, :string
  end
end