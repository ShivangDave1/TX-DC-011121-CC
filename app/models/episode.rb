class Episode < ApplicationRecord
    has_many :appearances
    has_many :guest, through: :appearances
end
