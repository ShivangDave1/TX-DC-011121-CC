class Review
    
    attr_accessor :rating
    attr_reader :viewer, :movie
    @@all = []

    def initialize (viewer, movie, rating)
        @@all << self
        @viewer = viewer
        @movie = movie
        @rating = rating
    end

    def self.all
        @@all
    end

end
