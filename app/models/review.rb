class Review

    @@all = []

    attr_accessor :movie, :viewer, :rating
    # attr_reader :viewer, :

    def initialize(viewer, movie, rating)
        @movie = movie
        @viewer = viewer
        @rating = rating
        save
    end

    def save
        self.class.all.push(self)
    end

    # def viewer
    #     self.viewer
    # end


    def self.all
        @@all
    end


end
