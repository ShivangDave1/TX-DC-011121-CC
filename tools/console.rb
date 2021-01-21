# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
friday_the_13th = Movie.new("Friday_the_13th")
harry_potter = Movie.new("Harry_Potter")
omeed  = Viewer.new("Omeed")
serena = Viewer.new("Serena")
omeed_hp_review = Review.new(omeed, harry_potter, 5)
omeed_13_review = Review.new(omeed, friday_the_13th, 1)
serena_hp_review = Review.new(serena, harry_potter, 4)

omeed.reviews
omeed.reviewed_movies
harry_potter.reviews
friday_the_13th.reviewers
omeed.reviewed_movie?(harry_potter)
serena.reviewed_movie?(friday_the_13th)
omeed_hp_review.rating
omeed.rate_movie(harry_potter, 4)
omeed_hp_review.rating
serena.rate_movie(friday_the_13th, 5)
Review.all
serena.reviewed_movie?(friday_the_13th)
harry_potter.average_rating
Movie.highest_rated
# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
