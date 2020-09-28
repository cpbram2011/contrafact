class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end
    

    def show
        @song = Song.find([:id])
    end


end
