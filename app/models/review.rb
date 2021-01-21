class Review

    attr_accessor :viewer, :movie, :rating
    @@all = []

    def initialize(viewer, movie, rating)
        @viewer = viewer
        @movie = movie
        @rating = rating
        @@all << self
    end

    def self.all
        @@all
    end

    def review_rating
        self.rating
    end

    def review_viewer
        self.viewer
    end

    def review_movie
        self.movie
    end

end
