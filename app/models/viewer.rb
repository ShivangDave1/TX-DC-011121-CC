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

  def viewer_username
    self.username
  end
  
  def reviews
    Review.all.select{|review| review.viewer == self}.uniq
  end

  def reviewed_movies
      reviews.collect{|review| review.movie}
  end

  def reviewed_movie?(movie)
     reviewed_movies.include?(movie)
  end


  def rate_movie(movie, rating)
       Review.all.collect{|review| review
        if review.viewer !=self && review.movie != movie
            Review.new(self, movie, rating)
        else
          review.rating = rating 
        end}.uniq
      
    end


end
