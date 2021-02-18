class RestaurantPizzasController < ApplicationController

    def new 
        @restaurant_pizza = RestaurantPizza.new
    end 

    def create 
        @restaurant_pizza = RestaurantPizza.new(strong_params)
        if @restaurant_pizza.valid?
            @restaurant_pizza.save
            redirect_to restaurant_path(@restaurant_pizza.restaurant)
        else 
            flash[:errors] = @restaurant_pizza.errors.full_messages
            redirect_to new_restaurant_pizza_path
        end 
    end 


    private
    def strong_params 
        params.require(:restaurant_pizza).permit(:price, :restaurant_id, :pizza_id)
    end 

end 
