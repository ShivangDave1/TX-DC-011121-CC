# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

jacob = Viewer.new("jacob")
david = Viewer.new("david")
amy = Viewer.new("amy")

braveheart = Movie.new("Braveheart")
love_actually = Movie.new("Love Actually")
avengers = Movie.new("The Avengers")
notebook = Movie.new("The Notebook")

review_one = Review.new(jacob, notebook, 7)
review_two = Review.new(amy, notebook, 7)
review_three = Review.new(amy, braveheart, 8)
review_four = Review.new(david, avengers, 9)
review_five = Review.new(jacob, love_actually, 6)
review_six = Review.new(jacob, avengers, 8)
review_seven = Review.new(david, braveheart, 10)
review_eight = Review.new(jacob, braveheart, 9)


# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
