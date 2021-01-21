#One viewer has many movies and One movie has many viewers
#One viewer has many reviews BUT One review has one viewer
### Review looks like SSOT

class Viewer
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
    self.class.all << self
  end

  def reviews
    #array of reviews for this viewer
    return Review.all.select { |review| review.viewer == self }
  end

  def reviewed_movies
    #array of movies reviewed
    ##use self.reviews?
    return self.reviews.collect { |review| review.movie }.uniq
  end

  def reviewed_movie?(movie)
    # return true if viewer has reviewed the movie arg
    ## use self.reviewed_movies ?
  end

  def rate_movie(movie, rating)
    # either add review or change rating depending on if viewer has already reviewed movie
    ## will use self.reviewed_movie?(movie)... could use Review.new(self, movie, rating)
    ## could use self.reviews.find to isolate review and change rating.
  end

  def self.all
    @@all
  end
  
end
