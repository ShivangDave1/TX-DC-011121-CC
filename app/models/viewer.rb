class Viewer
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username

    save
  end

  def self.all
    @@all
  end

  def save
    Viewer.all.push(self)
  end

  def reviews
    Review.all.select {|reviews| reviews.viewer == self}
  end

  def reviewed_movies
    self.reviews.map {|reviews| reviews.movie}
  end

  def reviewed_movie?(movie)
    self.reviewed_movies.include?(movie)
  end

  def rate_movie(movie, rating)
    self.reviewed_movie?(movie) ? 
    self.reviews.find {|reviews| reviews.movie == movie}.rating = rating : 
    Review.new(self, movie, rating)
  end
  
end
