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
    # array of reviews for this viewer
    return Review.all.select { |review| review.viewer == self }
  end

  def reviewed_movies
    # array of movies reviewed
    return self.reviews.collect { |review| review.movie }.uniq
  end

  def reviewed_movie?(movie)
    # return true if viewer has reviewed the movie arg, false if not
    return self.reviewed_movies.include?(movie)
  end

  def rate_movie(movie, rating)
    # either add review or change rating depending on if viewer has already reviewed movie
    if self.reviewed_movie?(movie)
      current_review = self.reviews.find { |review| review.movie == movie }
      current_review.rating = rating
      puts "Thanks for changing your rating of #{current_review.movie.title} to #{current_review.rating}!"
      return current_review
    else
      new_review = Review.new(self, movie, rating)
      puts "Thanks, #{self.username}, for giving #{movie.title} a score of #{rating}!"
      return new_review
    end
  end

  def self.all
    @@all
  end
  
end
