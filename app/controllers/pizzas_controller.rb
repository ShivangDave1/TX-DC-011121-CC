class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
  end

  
  def show 
    @pizza = Pizza.find_by(id: params[:id])
  end 
end
