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


  def movie_title
    self.title
  end

  def reviews
    Review.all.select{|review| review.movie == self}
  end

  def reviewers
    reviews.collect{|review| review.viewer}
  end

  def average_rating
    avg_rating = Review.all.map{|review| review.rating}
    avg_rating = avg_rating.sum(0.0)/ avg_rating.size
  end

  def self.highest_rate
    Review.all.collect{|review| review}.select{|review| review.rating > review.movie.average_rating}
  end


end
