require './app/models/review.rb'
require './app/models/viewer.rb'
require './app/models/movie.rb'
require 'pry'



isabella = Movie.new('Isabella - The Lost')
francesa = Movie.new("Princess Francesa - The Lonely")
gertrund = Movie.new("The Adventiures of Gertrund The Brave")

francis = Viewer.new('Pope Francis')
felix = Viewer.new('Governor Felix')
august = Viewer.new('August')

nice = Review.new(francis, francesa, 4.5)
average = Review.new(felix, francesa, 3)
poor = Review.new(francis, gertrund, 2)
binding.pry