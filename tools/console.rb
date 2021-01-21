# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
movie1 = Movie.new("Black Panther")
movie2 = Movie.new("Juice")
movie3 = Movie.new("Intersteller")
movie4 = Movie.new("Cars")
movie5 = Movie.new("Her")

viewer1 = Viewer.new("Khalin")
viewer2 = Viewer.new("Kamron")
viewer3 = Viewer.new("Kris")
viewer4 = Viewer.new("Rudi")
viewer5 = Viewer.new("Donna")

review1 = Review.new(viewer1, movie1, 10)
review2 = Review.new(viewer1, movie3, 10)
review3 = Review.new(viewer2, movie2, 9)
review4 = Review.new(viewer2, movie5, 7)
review5 = Review.new(viewer3, movie3, 8)
review6 = Review.new(viewer3, movie1, 6)
review7 = Review.new(viewer4, movie4, 3)
review8 = Review.new(viewer4, movie5, 10)
review9 = Review.new(viewer5, movie5, 9)
review10 = Review.new(viewer5, movie2, 7)




# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
