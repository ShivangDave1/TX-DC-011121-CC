class AppearancesController < ApplicationController
    before_action :get_params, only: [:create]

    def new
        @appearance = Appearance.new
    end

    def create
        @appearance = Appearance.new(get_params)
        
        if @appearance.valid?
            @appearance.save
            redirect_to episode_path(@appearance.episode)
        else
            flash[:errors] = @appearance.errors.full_messages
            redirect_to new_appearance_path
        end
    end

    private
    def get_params
        params.require(:appearance).permit(:guest_id, :episode_id, :rating)
    end
end
