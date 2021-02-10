class Guest < ApplicationRecord
    has_many :appearances
    has_many :episodes, through: :appearances

    # def sort_by_rating
    #     # Rating: <%= @guest.appearances.find_by(:guest_id == g.id).rating 
    #     sorted = self.appearances.sort_by(:rating)

    # end
end
