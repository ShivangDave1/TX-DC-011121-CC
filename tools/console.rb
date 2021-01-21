# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

david = Viewer.new("David")
emily = Viewer.new("Emily")
jeff = Viewer.new("Jeff")
chelsea = Viewer.new("Chelsea")

hp = Movie.new("Harry Potter")
dh = Movie.new("Die Hard")
ha = Movie.new("Home Alone")

review1 = Review.new(david, hp, 8)
review2 = Review.new(emily, dh, 10)
review3 = Review.new(jeff, ha, 5)
review4 = Review.new(chelsea, hp, 10)
review5 = Review.new(david, dh, 9)
review6 = Review.new(emily, hp, 1)
review7 = Review.new(jeff, dh, 6)

dh.title

dh.title = "Die Hard 2"

Movie.all

david.username

david.username = "Davy_P"

Viewer.all

review7.rating

Review.all

review6.viewer

review5.movie

david.reviews

emily.reviewed_movies

hp.reviews

dh.reviewers

david.reviewed_movie?(ha)

chelsea.rate_movie(ha, 6)

hp.average_rating

Movie.highest_rated

# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
