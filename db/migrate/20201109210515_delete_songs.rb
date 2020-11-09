class DeleteSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :upload_id
  end
end
