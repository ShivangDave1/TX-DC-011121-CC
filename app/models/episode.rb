class Episode < ApplicationRecord
    has_many :appearances
    has_many :guests, through: :appearances

    def average_rating
        count = self.appearances.all.count
        total_rating = 0
        self.appearances.all.each{ |a| total_rating += a.rating }
        average = (total_rating * 1.0) / count
    end

end
