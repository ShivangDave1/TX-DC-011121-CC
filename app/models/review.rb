class Review
    attr_accessor :viewer, :movie, :rating
    
    @@all = []

    def initialize(viewer, movie, rating)
        @viewer = viewer
        @movie = movie
        @rating = rating

        save
    end

    def self.all
        @@all
    end

    def save
        Review.all.push(self)
    end
end
