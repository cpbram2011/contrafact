

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

end