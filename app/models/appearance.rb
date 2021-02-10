class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode

  validates :guest_id, presence: true
  validates :episode_id, presence: true
  validates_uniqueness_of :guest_id, scope: :episode_id, message: " is already appearing on this episode"
  validates_inclusion_of :rating, in: 1..5, message: " must be a number between 1 and 5"
end
