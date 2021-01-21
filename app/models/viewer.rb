class Viewer
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
    save
  end

  def save
    self.class.all << self
  end

  def reviews
    Review.all.select{
      |review|
      review.viewer == self
    }
  end

  def reviewed_movies
    self.reviews.collect{
      |review|
      review.movie
    }
  end

  def reviewed_movie?(movie)
    return true if self.reviewed_movies.include?(movie)
    false
  end

  def get_review(movie)
    self.reviews.find{
      |review|
      review.movie == movie
    }
  end

  def rate_movie(movie, rating)
    if reviewed_movie?(movie)
      movie = self.get_review(movie)
      movie.rating = rating
      movie
    else
      Review.new(self, movie, rating)
    end
  end

  def self.all
    @@all
  end
  
end
