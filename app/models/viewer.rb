class Viewer
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
    self.class.all << self
  end

  def self.all
    @@all
  end

  def reviews
    Review.all.select {|review| review.viewer == self}
  end

  def reviewed_movies
    self.reviews.map {|review| review.movie}
  end

  def reviewed_movies?(movie)
    if self.reviews.find {|review| review.movie == movie && review.viewer == self}
      true
    else
      false
    end
  end 

  def rate_movie(movie, rating)
    if self.reviewed_movies?(movie)
      self.reviews.find {|review| review.movie == movie}.rating = rating
    else
      review = Review.new(self, movie, rating)
      review.viewer = self
    end
  end

end
