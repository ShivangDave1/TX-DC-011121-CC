Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :appearances, only: [:new, :create]
  resources :guests, only: [:index, :show]
  resources :episodes, only: [:index, :show]
end
