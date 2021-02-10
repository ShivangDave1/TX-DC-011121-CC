class Guest < ApplicationRecord
    has_many :appearances, dependent: :destroy
    has_many :episodes, through: :appearances

    def sort_by_rating
        self.appearances.sort_by {|appearance| appearance.rating}.reverse
    end
end
