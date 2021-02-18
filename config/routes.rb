Rails.application.routes.draw do
  resources :pizzas
  resources :restaurants
  resources :restaurant_pizzas
end
