json.array! @songs do |song|
    json.extract! song, :title, :artist, :id
    json.track rails_blob_url(song.track)
    json.cover rails_blob_url(song.cover)

end