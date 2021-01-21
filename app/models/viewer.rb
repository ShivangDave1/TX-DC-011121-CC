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

  def self.all
    @@all
  end
  
end
