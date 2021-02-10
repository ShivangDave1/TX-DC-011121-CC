class GuestsController < ApplicationController
  before_action :f_guest, only: [:show]

  def index
    @guests = Guest.all
  end

  def show
  end

  private
  def f_guest
    @guest = Guest.find(params[:id])
  end

end
