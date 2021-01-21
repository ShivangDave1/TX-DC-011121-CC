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
    # array of all viewers who have reviewed the movie
    return self.reviews.collect { |review| review.viewer }.uniq
  end

  def average_rating
    # average of all ratings 
    total_rating_points = self.reviews.collect { |review| review.rating }.reduce(:+)
    total_ratings = self.reviews.count

    return total_rating_points / total_ratings
    #return self.reviews.collect { |review| review.rating }.reduce(:+) / self.reviews.count
  end

  def self.all
    @@all
  end

  def self.highest_rated
    # movie with highest average rating
    return self.all.max_by { |movie| movie.average_rating }
    
    # Could also do below if you want to account for ties...
    # highest_score = self.all.max_by { |movie| movie.average_rating}.average_rating
    # return self.all.find_all { |movie| movie.average_rating == highest_score }
  end

end