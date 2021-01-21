class Movie
  attr_accessor :title

  @@all = []

  def initialize(title)
    @title = title
    save
  end

  def save
    self.class.all << self
  end

  def reviews
    Review.all.select{
      |review|
      review.movie == self
    }
  end

  def reviewers
    self.reviews.collect{
      |review|
      review.viewer
    }
  end

  def average_rating
    self.reviews.inject(0){
      |total, review|
      total + review.rating.to_f
    }/self.reviews.count
  end

  def self.reviewed_movies
    Movie.all.select{
      |movie|
      !movie.reviews.empty?
    }
  end

  def self.highest_rated
    self.reviewed_movies.max_by{
      |movie|
      movie.average_rating
    }
  end

  def self.all
    @@all
  end

end
