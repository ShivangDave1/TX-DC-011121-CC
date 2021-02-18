class RestaurantPizza < ApplicationRecord
  belongs_to :restaurant
  belongs_to :pizza
  validates :price,  :numericality=> true, :inclusion => {:in => 1..30, :message => "Value should be between 1 and 30"}
  validates :pizza,  uniqueness: { scope: :restaurant, message: "Restaurant already has this pizza" }
end
