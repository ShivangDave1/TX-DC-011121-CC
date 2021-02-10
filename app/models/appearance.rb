class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode

  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5,
    message: "must be a number between 1-5" }
  validates_uniqueness_of :guest_id, scope: :episode_id, message: "can only appear once on an episode"
end
