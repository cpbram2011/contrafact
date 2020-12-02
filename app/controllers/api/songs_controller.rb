require 'open-uri'
class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end

    def indexByUploader 
        @songs = Song.where(uploader_id: params[:id])
        render :index
    end

    def recent
        @songs = Song.order('created_at DESC').limit(10)
        render :index
    end
    

    def show
        @song = Song.find(params[:id])
    end
    
    

    def create
        @song = Song.new(song_params)
        
        if !@song.cover.attached?  #TODO keep?
            
            cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/cover_plaeholder.png")
            @song.cover.attach(io: cover, filename: "cover.jpg")
        end
        
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
