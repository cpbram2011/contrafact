class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end
    

    def show
        @song = Song.first
        debugger;
    end


end
