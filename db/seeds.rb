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
s1.cover.attach(io: s1_cover, filename: "s1-cover.jpg")
track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Robert+Glasper+Experiment+-+Afro+Blue+(Feat.+Erykah+Badu)+(128+kbps)+(1).mp3")
s1.track.attach(io: track_url, filename: 's1.mp3')

s2 = Song.create(title: 'Sniff', artist: 'DOMi & JD Beck')
s2_cover = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/domijd.jpg")
s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
track_url = open("https://contrafact-seeds.s3.us-east-2.amazonaws.com/Nord+Live+Sessions+-+DOMi+%26+JD+Beck+-+Sniff.mp3")
s2.track.attach(io: track_url, filename: 's2.mp3')




# s2 = Song.create(title: 'Sniff', artist: 'DOMi & JD Beck')
# s2_cover = open("")
# s2.cover.attach(io: s2_cover, filename: "s2-cover.jpg")
# track_url = open("")
# s2.track.attach(io: track_url, filename: 's2.mp3')


# song2 = Song.create(title: 'Afro Red', artist: 'Robert Glasper')
# song3 = Song.create(title: 'Nardis', artist: 'Bill Evans')
# song4 = Song.create(title: 'Afro Green', artist: 'Robert Glasper')
# song5 = Song.create(title: 'Afro Yellow', artist: 'Robert Glasper')
# song6 = Song.create(title: 'Afro Black', artist: 'Robert Glasper')




