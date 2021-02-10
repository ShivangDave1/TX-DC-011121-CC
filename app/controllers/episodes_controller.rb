class EpisodesController < ApplicationController
  before_action :f_episode, only: [:show]

  def index
    @episodes = Episode.all
  end

  def show
  end

  private
  def f_episode
    @episode = Episode.find(params[:id])
  end
  
end
