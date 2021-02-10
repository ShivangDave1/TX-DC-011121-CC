require 'byebug'

class EpisodesController < ApplicationController
  before_action :find_episode, only: :show
  # before_action :get_average_rating, only: :show

  def index
    @episodes = Episode.all
  end

  def show
   @average_rating = get_average_rating
  end

  
  private

  def get_average_rating
    # check if number of appearances is 0 to prevent divide by zero error
    if @episode.appearances != []
      sum_rating/@episode.appearances.count
    else
      "This show doesn't have any ratings"
    end 
  end
  
  def find_episode
    @episode = Episode.find_by(id: params[:id])
  end 

  def sum_rating
    total_rating = 0
    @episode.appearances.each do |appearance|
      total_rating += appearance.rating
    end
    total_rating
  end
end

