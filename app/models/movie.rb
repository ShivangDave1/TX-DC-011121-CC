class Movie
  attr_accessor :title

  @@all = []

  def initialize(title)
    @title = title
    self.class.all << self
  end

  def self.all
    @@all
  end

  def reviews 
    Review.all.select { |review| review.movie == self }
  end

  def reviewers
    self.reviews.map { |review| review.viewer}
  end

  def rating
    self.reviews.map { |review| review.rating }
  end

  def average_rating
    self.rating.sum / self.rating.count
  end

  def self.highest_rating #This is sapposed to itterated over the array of movie ratings and return the movie name with the highest avrage rating
    Movie.all.select { |movie| movie.average_rating}#.(some method to get the highest number).(some method to return the name)
  end





end
