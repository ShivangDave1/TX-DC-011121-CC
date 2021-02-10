class AppearancesController < ApplicationController

    def new
        @appearance = Appearance.new
    end

    def create
        @appearance = Appearance.create(appearance_params)
        redirect_to episode_path(@appearance.episode)
    end 

    



    private 
    def appearance_params
        params.require(:appearance).permit(:guest_id, :episode_id,:rating)
    end 
end 