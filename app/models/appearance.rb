class Appearance < ApplicationRecord
    belongs_to :guest
    belongs_to :episode

    validates :guest_id, uniqueness: { scope: :episode_id, message: ": It appears there's already a rating for this guest's appearance on the this episode."}
    validates :rating, { inclusion: { in: [1, 2, 3, 4, 5], message: "must be an integer with a min of 1 and max of 5." } }
end
