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
    Review.all.select { |review| review.viewer == self }
  end

  def reviewed_movies
    self.reviews.map { |review| review.movie }
  end

  # def change_review(rating, movie) this was sapposed to allow for you to change the rating
  #   Review.all.select { |review| review.viewer == self && review.include?(movie) }.rating = rating
  # end

  def reviewed_movie?(movie)
    if self.reviewed_movies.include?(movie)
      true
    else
      false
    end
  end

  
  # def rate_movie(movie, rating) this was going to use change_rating only if the viewer and movie were associated. If they werent then it would do a Review.new and take in the two arguments.
  #   if self.reviewed_movie?(movie) == true

  # end









  
end
