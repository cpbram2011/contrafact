# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string
#  artist      :string
#  uploader_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord

    
    validates :title, length: {minimum: 1}
    validates :artist, length: {minimum: 1}

    validate :ensure_track
    has_one_attached :track
    has_one_attached :cover


    def ensure_track
        unless self.track.attached?
            errors[:song] << "Must attach audio file"
        end
    end

    
end
