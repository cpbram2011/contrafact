class ChangeSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :upload_id, :integer

  end
end
