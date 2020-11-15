# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all


usernames = ['coolguy57','radchad99','cannedCoffee','Stranger']
emails = ['no@thanks.com','jazzrulez68@gmail.com','starbucks@caribou.com','email@website.com']
passwords = ['asdfjkl','password','abcd1234','stranger']
users = 4.times.map {|i| User.create!({
    username: usernames[i],
    email: emails[i],
    password: passwords[i]
})}

s1 = Song.new(title: 'Afro Blue', artist: 'Robert Glasper')
s1_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/BlackRadio.jpg")
s1_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Robert+Glasper+Experiment+-+Afro+Blue+(Feat.+Erykah+Badu)+(128+kbps)+(1).mp3")
s1.cover.attach(io: s1_cover, filename: "s1-cover.jpg")
s1.track.attach(io: s1_track_url, filename: 's1.mp3')
s1.save!

s2 = Song.new(title: 'Sniff', artist: 'DOMi & JD Beck')
s2_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/domijd.jpg")
s2_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Nord+Live+Sessions+-+DOMi+%26+JD+Beck+-+Sniff.mp3")
s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
s2.track.attach(io: s2_track_url, filename: 's2.mp3')
s2.save!


s3 = Song.new(title: 'Desire (Live \'15)', artist: 'Hiromi Trio Project')
s3_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/voice.jpeg.jpg")
s3_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Hiromi+Uehara+The+Trio+Project+Desire+(128+kbps).mp3")
s3.cover.attach(io: s3_cover, filename: "s3-cover.jpg")
s3.track.attach(io: s3_track_url, filename: 's3.mp3')
s3.save!


s4 = Song.new(title: 'Lingus', artist: 'Snarky Puppy')
s4_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/welikeithere.jpg")
s4_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Snarky+Puppy+-+Lingus+(We+Like+It+Here)+(128+kbps).mp3")
s4.cover.attach(io: s4_cover, filename: "s4-cover.jpg")
s4.track.attach(io: s4_track_url, filename: 's4.mp3')
s4.save!

s5 = Song.new(title: 'In Waves', artist: 'House of Waters')
s5_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/houseofwaters.jpg")
s5_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/House+Of+Waters++-+In+Waves+(128+kbps).mp3")
s5.cover.attach(io: s5_cover, filename: "s5-cover.jpg")
s5.track.attach(io: s5_track_url, filename: 's5.mp3')
s5.save!

s6 = Song.new(title: 'I can\'t Play Piano Pt. 1', artist: 'Jon Benjamin')
s6_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/71nzenHunKL._SS500_.jpg")
s6_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/I+Can't+Play+Piano%2C+Pt.+1.mp3")
s6.cover.attach(io: s6_cover, filename: "s6-cover.jpg")
s6.track.attach(io: s6_track_url, filename: 's6.mp3')
s6.save!


s7 = Song.new(title: 'Turiya and Ramakrishna', artist: 'Alice Coltrane')
s7_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/R-424029-1339396725-5887.jpeg.jpg")
s7_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Alice+Coltrane+-+Turiya+And+Ramakrishna.mp3")
s7.cover.attach(io: s7_cover, filename: "s7-cover.jpg")
s7.track.attach(io: s7_track_url, filename: 's7.mp3')
s7.save!

s8 = Song.new(title: 'Sassyassed Sassafrass', artist: 'Brad Mehldau')
s8_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/71gYzeaPyVL._SL1425_.jpg")
s8_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Sassyassed+Sassafrass.mp3")
s8.cover.attach(io: s8_cover, filename: "s8-cover.jpg")
s8.track.attach(io: s8_track_url, filename: 's8.mp3')
s8.save!




p1 = Playlist.new(title: "Jazz Piano", author_id: users[0].id)
p1.save!
ps1 = PlaylistSong.new(song_id: s3.id, playlist_id: p1.id)
ps2 = PlaylistSong.new(song_id: s6.id, playlist_id: p1.id)
ps3 = PlaylistSong.new(song_id: s7.id, playlist_id: p1.id)
ps1.save!
ps2.save!
ps3.save!

p2 = Playlist.new(title: "My Favorites", author_id: users[3].id)
p2.save!
ps4 = PlaylistSong.new(song_id: s1.id, playlist_id: p2.id)
ps5 = PlaylistSong.new(song_id: s4.id, playlist_id: p2.id)
ps6 = PlaylistSong.new(song_id: s8.id, playlist_id: p2.id)
ps4.save!
ps5.save!
ps6.save!






# s2 = Song.create(title: 'Sniff', artist: 'DOMi & JD Beck')
# s2_cover = open("")
# s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
# track_url = open("")
# s2.track.attach(io: track_url, filename: 's2.mp3')
