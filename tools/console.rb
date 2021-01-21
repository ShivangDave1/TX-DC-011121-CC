# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


movie1 = Movie.new("Titanic")
movie2 = Movie.new("Back Home")
movie3 = Movie.new("Home alone")
movie4 = Movie.new("Lake City")

viewer1 = Viewer.new("MikeL")
viewer2 = Viewer.new("TimotyR")


movie1.movie_title

Movie.all

viewer2.username

Viewer.all

review1 = Review.new(viewer1, movie1, 4)
review2 = Review.new(viewer2, movie1, 3.8)
review3 = Review.new(viewer2, movie2, 5)
review4 = Review.new(viewer1, movie2, 4.2)
review5 = Review.new(viewer2, movie3, 4.5)

review1.review_rating

review4.review_viewer
review2.review_movie
Review.all

viewer1.reviews
viewer1.reviewed_movies

movie1.reviews
movie1.reviewers

viewer1.rate_movie(movie3, 3.4)

movie1.average_rating

viewer1.reviewed_movie?(movie3)

Movie.highest_rate




# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
