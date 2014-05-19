class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged
  has_many :comments, dependent: :destroy
  belongs_to :user
  validates :title, presence: true
  validates :content, presence: true
end
