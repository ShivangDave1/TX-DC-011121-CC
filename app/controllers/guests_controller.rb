class GuestsController < ApplicationController

  def index
      @guests = Guest.all
    # @guests = Guest.sort_by_rating
  end

  def show 
    @guest = Guest.find(params[:id])
  end

end
