class Review
    attr_accessor :viewer, :movie, :rating

    @@all = []

    def initialize(viewer, movie, rating)
        @viewer = viewer
        @movie = movie
        @rating = rating
        Review.all.push(self)
    end

    def self.all
        @@all
    end


end
