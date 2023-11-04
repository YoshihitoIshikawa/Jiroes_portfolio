class Review < ApplicationRecord
  belongs_to :user, foreign_key: 'sub', primary_key: 'sub', inverse_of: :reviews
  belongs_to :shop

  mount_uploader :image, ImageUploader
end
