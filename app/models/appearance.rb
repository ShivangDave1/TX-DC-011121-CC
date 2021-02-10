class Appearance < ApplicationRecord
  belongs_to :guest
  belongs_to :episode
  validates :rating, :inclusion => 1..5
  validates_uniqueness_of :guest, if: :guest
end
