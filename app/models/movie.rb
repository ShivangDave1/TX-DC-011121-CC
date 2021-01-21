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
    Review.all.select {|review| review.movie == self}
  end

  def reviewers
    self.reviews.map {|review| review.viewer}
  end

  def average_rating
    reviews.reduce(0) {|total, review| total += review.rating.to_f / reviews.count}.round(1)
  end

  def self.highest_rated
    self.all.max_by {|movie| movie.average_rating}
  end 

end

