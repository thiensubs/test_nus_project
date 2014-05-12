class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :post, index: true
      t.string :title_comment
      t.text :content_comment
      t.integer :bad_report
      t.timestamps
    end
  end
end
