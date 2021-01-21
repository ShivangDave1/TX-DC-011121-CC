#One movie has many viewers and One Viewer has many movies
#One movie has many reviews BUT One Review has one movie
### Looks like Review could be SSOT

class Movie
  attr_accessor :title

  @@all = []

  def initialize(title)
    @title = title
    self.class.all << self
  end

  def reviews
    # array of all reviews for movie
    return Review.all.select { |review| review.movie == self }
  end

  def reviewers
    #array of all viewers who have reviewed the movie
    return self.reviews.collect { |review| review.viewer }.uniq
  end

  def average_rating
    # average of all ratings 
    ## self.reviews.reduce and self.reviews.count
  end

  def self.all
    @@all
  end

  def self.highest_rated
    #movie with highest average rating
    ## self.all.max_by ??
  end

end