class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end

    def recent
        debugger
        @songs = Song.order('created_at DESC').limit(10)
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
    
    def destroy
        @song = Song.find(params[:id])
        if @song.destroy
            render :show
        else
            render json: false
        end
    end




    def song_params
        params.require(:song).permit(:title, :artist, :track, :cover, :uploader_id)
    end
end
