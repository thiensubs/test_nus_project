class AddUserRefToComments < ActiveRecord::Migration
  def change
    add_column :comments, :user_id, :string, references: :users
  end
end
