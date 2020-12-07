# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord

    
    validates :title, length: {minimum: 1}
    validates :author_id, presence: true


    has_many :entries, dependent: :destroy,
        primary_key: :id,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong
    
    has_many :songs,
        through: :entries,
        source: :song

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    
    
end
