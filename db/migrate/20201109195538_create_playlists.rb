class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.timestamps

    end

    add_index :playlists, :title
    add_index :playlists, :author_id
    
    create_table :playlist_songs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    
    add_index :playlist_songs, :playlist_id
    add_index :playlist_songs, :song_id

  end
end
