# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


usernames = ['coolguy57','radchad99','cannedCoffee','Stranger']
emails = ['no@thanks.com','jazzrulez68@gmail.com','starbucks@caribou.com','strange']
passwords = ['asdfjkl','password','abcd1234','stranger']

users = 4.times.map {|i| User.create!({
    username: usernames[i],
    email: emails[i],
    password: passwords[i]
})}

