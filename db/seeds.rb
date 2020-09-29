# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Song.destroy_all


usernames = ['coolguy57','radchad99','cannedCoffee','Stranger']
emails = ['no@thanks.com','jazzrulez68@gmail.com','starbucks@caribou.com','strange']
passwords = ['asdfjkl','password','abcd1234','stranger']
users = 4.times.map {|i| User.create!({
    username: usernames[i],
    email: emails[i],
    password: passwords[i]
})}

s1 = Song.create(title: 'Afro Blue', artist: 'Robert Glasper')
s1_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/BlackRadio.jpg")
s1_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Robert+Glasper+Experiment+-+Afro+Blue+(Feat.+Erykah+Badu)+(128+kbps)+(1).mp3")
s1.cover.attach(io: s1_cover, filename: "s1-cover.jpg")
s1.track.attach(io: s1_track_url, filename: 's1.mp3')

s2 = Song.create(title: 'Sniff', artist: 'DOMi & JD Beck')
s2_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/domijd.jpg")
s2_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Nord+Live+Sessions+-+DOMi+%26+JD+Beck+-+Sniff.mp3")
s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
s2.track.attach(io: s2_track_url, filename: 's2.mp3')


s3 = Song.create(title: 'Desire (Live \'15)', artist: 'Hiromi Trio Project')
s3_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/voice.jpeg.jpg")
s3_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Hiromi+Uehara+The+Trio+Project+Desire+(128+kbps).mp3")
s3.cover.attach(io: s3_cover, filename: "s3-cover.jpg")
s3.track.attach(io: s3_track_url, filename: 's3.mp3')


s4 = Song.create(title: 'Lingus', artist: 'Snarky Puppy')
s4_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/welikeithere.jpg")
s4_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Snarky+Puppy+-+Lingus+(We+Like+It+Here)+(128+kbps).mp3")
s4.cover.attach(io: s4_cover, filename: "s4-cover.jpg")
s4.track.attach(io: s4_track_url, filename: 's4.mp3')

s5 = Song.create(title: 'In Waves', artist: 'House of Waters')
s5_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/houseofwaters.jpg")
s5_track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/House+Of+Waters++-+In+Waves+(128+kbps).mp3")
s5.cover.attach(io: s5_cover, filename: "s5-cover.jpg")
s5.track.attach(io: s5_track_url, filename: 's5.mp3')








# s2 = Song.create(title: 'Sniff', artist: 'DOMi & JD Beck')
# s2_cover = open("")
# s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
# track_url = open("")
# s2.track.attach(io: track_url, filename: 's2.mp3')
