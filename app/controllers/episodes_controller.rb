class EpisodesController < ApplicationController

  def index
    @episodes = Episode.all
  end

  def show 
    @episode = Episode.find(params[:id])
  end

  def self.sort_by_rating
    self.all.sort_by {|ep| ep.appearances.rating}.reverse
  end

end
