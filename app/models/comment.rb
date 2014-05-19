class Comment < ActiveRecord::Base
  # after_create :contact
  belongs_to :post
  belongs_to :user
  validates :title_comment, presence: true
  validates :content_comment, presence: true
end
