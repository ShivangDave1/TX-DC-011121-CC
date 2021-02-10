class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode
  validates :rating, inclusion: {in: %w(1..5),
    message: "%{value} is not a valid rating"}
end
