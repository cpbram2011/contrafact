class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end
    

    def show
        @song = Song.find(params[:id])
    end

    def create
        @song = Song.new(song_params)
        
        if @song.save
            render :show
        else
            render json: false
        end
    end




    def song_params
        params.require(:song).permit(:title, :artist, :track, :cover)
    end
end
