class Movie
  attr_accessor :title

  @@all = []

  def initialize(title)
    @title = title

    save
  end

  def self.all
    @@all
  end

  def self.highest_rated
    self.all.max_by {|movies| movies.average_rating}
  end

  def save
    Movie.all.push(self)
  end

  def reviews
    Review.all.select {|reviews| reviews.movie == self}
  end

  def reviewers
    self.reviews.map {|reviews| reviews.viewer}
  end

  def average_rating
    self.reviews.sum(0.0) {|reviews| reviews.rating} / self.reviews.count
  end

end
