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
        debugger;
        if @song.cover == ''
            debugger;
            @song.cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png")
        end
        debugger;
        if @song.save
            render json: {message: "noice"}
        else
            render json: false
        end
    end




    def song_params
        params.require(:song).permit(:title, :artist, :track, :cover)
    end
end
