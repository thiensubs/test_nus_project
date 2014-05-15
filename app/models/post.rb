class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_many :comments, dependent: :destroy
  belongs_to :user

end
