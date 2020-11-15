@playlists.each do |playlist|
    json.set! playlist.id do
        
        json.extract! playlist, :title, :id, :author_id, :songs
        
    end
end