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
    Review.all.select {|review| review.viewer == self}.map {|review| review.movie}
  end
  
  def reviewed_movie?(movie)
    Review.all.any? {|review| review.viewer == self && review.movie == movie}
  end

  def rate_movie(movie, rating)
      Review.all.select do |review|
        if review.viewer == self && review.movie == movie
          review.rating = rating
        else
          Review.new(self, movie, rating)
        end
      end
  end

end
