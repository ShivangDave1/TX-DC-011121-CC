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
    Review.all.select {|review| review.movie == self}.map {|review| review.viewer}
  end

  def average_rating
    total_rating = 0
    Review.all.select do |review|
      if review.movie == self
        total_rating += review.rating
      end
    end
    total_rating / self.reviews.count
  end

  def self.highest_rated
    best_movie = 0
    best_movie_rating = 0
    @@all.each do |movie|
      if movie.average_rating > best_movie_rating
        best_movie_rating == movie.average_rating
        best_movie = movie
      end
    end
    best_movie
  end

end