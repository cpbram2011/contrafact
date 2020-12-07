json.set! @song.id do
        
    json.extract! @song, :title, :artist, :id, :uploader_id, :created_at
    json.track url_for(@song.track)
    json.cover url_for(@song.cover)
    json.set! :comments do 
        
        @comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :body, :author, :created_at
            end
        end

    end
end

