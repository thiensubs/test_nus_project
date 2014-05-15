class Comment < ActiveRecord::Base
  # after_create :contact
  belongs_to :post
  belongs_to :user
end
