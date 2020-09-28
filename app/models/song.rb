class Song < ApplicationRecord

    validates :title, null: false

    has_one_attached :track
    has_one_attached :cover
end
