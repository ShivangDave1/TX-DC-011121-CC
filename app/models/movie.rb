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
    return self.reviews.collect { |review| review.viewers }.uniq
  end

  def self.all
    @@all
  end

end