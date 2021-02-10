class AppearancesController < ApplicationController
    
    def index
        @appearances = Appearance.all 
    end 

    def show
        @appearance = Appearance.find_by(id: params[:id])
    end 

    def new
        @appearance = Appearance.new
    end 

    def create
        @appearance = Appearance.new(appearance_params)
        if @appearance.valid?
            @appearance.save 
            redirect_to episode_path(@appearance.episode)
        else 
            flash[:errors] = @appearance.errors.full_messages
            redirect_to new_appearance_path
        end     
    end 


    private 

    def appearance_params
        params.require(:appearance).permit(:episode_id, :guest_id, :rating)
    end

end
