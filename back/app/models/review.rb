class Review < ApplicationRecord
  belongs_to :user, foreign_key: 'sub', primary_key: 'sub'
  belongs_to :shop

  mount_uploader :image, ImageUploader
end
