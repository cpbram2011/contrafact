json.set! song.id do
        
    json.extract! song, :title, :artist, :id
    json.track url_for(song.track)
    json.cover url_for(song.cover)
end

