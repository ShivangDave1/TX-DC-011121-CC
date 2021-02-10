class AppearancesController < ApplicationController

    def new
        @appearance = Appearance.new
    end

    def create
        @appearance = Appearance.create(ap_params)
        # byebug
        if @appearance.valid?
            redirect_to "/guests/#{@appearance.guest_id}"
        else 
            flash[:my_errors] = @appearance.errors.full_messages
            redirect_to "/appearances/new"
        end

    end

    private

    def ap_params

        params.require(:appearance).permit(:episode_id, :guest_id, :rating)
    end
end
