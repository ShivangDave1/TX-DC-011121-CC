class GuestsController < ApplicationController

  def index
    @guests = Guest.all
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    @appearances = @guest.appearances_by_rating
  end
  
end
