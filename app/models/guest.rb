class Guest < ApplicationRecord
    has_many :appearances
    has_many :episodes, through: :appearances

    def appearances_by_rating
        self.appearances.order(rating: :desc)
    end

end
