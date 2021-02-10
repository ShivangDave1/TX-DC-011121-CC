class Appearance < ApplicationRecord
  belongs_to :episode
  belongs_to :guest
  validates :rating, inclusion: { in: 1..5, message: "%{value} is not a valid rating" }
  validates_uniqueness_of :guest_id, scope: :episode_id
end
