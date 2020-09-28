class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.integer :uploader_id

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :artist
    add_index :songs, :uploader_id

  end
end
