class AppearancesController < ApplicationController
    #before_action :get_appearance, only: [:show]

    def index
        @appearances = Appearance.all 
    end

    def new
        @appearance = Appearance.new
    end

    def create
        @appearance = Appearance.new(params.require(:appearance).permit(:guest_id, :episode_id, :rating))
        if @appearance.valid?
            @appearance.save
            redirect_to @appearance.episode
        else
            redirect_to new_appearance_path, alert: @appearance.errors.full_messages
        end
    end

    private
    def get_appearance
        @appearance = Appearance.find_by(id: params[:id])
    end
end
