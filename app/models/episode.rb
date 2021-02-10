class Episode < ApplicationRecord
    has_many :appearances
    has_many :guest, through: :appearances

    def average_rating
        temp = 0.0
        self.appearances.each do |a|
            temp += a.rating
        end
        ans = temp/self.appearances.size
        return ans
    end
    
end
