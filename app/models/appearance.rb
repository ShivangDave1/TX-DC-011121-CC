class Appearance < ApplicationRecord
  belongs_to :episode
  belongs_to :guest

  validates :rating, numericality:  {greater_than_or_equal_to: 1, less_than_or_equal_to: 5,
                                     message: "must be from 1 to 5"}
  validates :guest_id, uniqueness: { scope: :episode_id, message: "has already appeared in this episode!"}
end
