class Appearance < ApplicationRecord
    belongs_to :guest
    belongs_to :episode

    validates :rating, numericality: {
        greater_than: 0,
        less_than_or_equal_to: 5 
    }
    validates_uniqueness_of :episode_id, scope: :guest_id

end