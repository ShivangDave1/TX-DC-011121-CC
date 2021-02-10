class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode
  validates :rating, inclusion: {in: (1..5), message: "%{value} must be a number between 1 to 5"}
  validates_uniqueness_of :guest, scope: :episode
end
