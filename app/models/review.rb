#One Review has one movie but one movie has many reviews
#One Review has one user but one user has many reviews
### Review looks like SSOT

class Review

    attr_reader :viewer, :movie
    attr_accessor :rating

    @@all = []

    def initialize(viewer, movie, rating)
        @viewer = viewer
        @movie = movie
        @rating = rating
        
        self.class.all.push(self)
    end

    def self.all
        @@all
    end

end
