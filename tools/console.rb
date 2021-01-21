# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
movie1 = Movie.new("Shaun of the Dead")
movie2 = Movie.new("Sharknado")
movie3 = Movie.new("Tropic Thunder")

viewer1 = Viewer.new("netflix4eva")
viewer2 = Viewer.new("yesimstillwatching")
viewer3 = Viewer.new("popcornlyfe")

review1 = Review.new(viewer1, movie2, 4)
review2 = Review.new(viewer2, movie3, 8)
review3 = Review.new(viewer3, movie2, 1)
review4 = Review.new(viewer1, movie1, 5)
review5 = Review.new(viewer2, movie3, 6)




# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
