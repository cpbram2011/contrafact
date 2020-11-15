

class Api::PlaylistsController < ApplicationController

    def show
        playlist = Playlist.find(params[:id])
        @songs = playlist.songs
        render template: 'api/songs/index'
    end

    def index
        @playlists = Playlist.where(author_id: params[:id])
        render :index
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render :show
        else
            render json: false
        end

    end
    private

    def playlist_params
        params.require(:playlist).permit(:title, :author_id)
    end
end