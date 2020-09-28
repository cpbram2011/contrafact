class Api::SongsController < ApplicationController
    def index
        @songs = Song.all.includes(:track, :cover)
        render :index
    end
    

    def show
        @song = Song.find([:id])
    end


end
