# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    
    validates :body, length: {minimum: 1}
    validates :author, presence: true
    validates :song_id, presence: true

    belongs_to :songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

end
