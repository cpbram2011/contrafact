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
require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
