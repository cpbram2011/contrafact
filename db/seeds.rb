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


song = Song.create(title: 'Afro Blue', artist: 'Robert Glasper')
track_url = open("https://contrafact-dev.s3.us-east-2.amazonaws.com/tracks/Robert%20Glasper%20Experiment%20-%20Afro%20Blue%20%28Feat.%20Erykah%20Badu%29%20%28128%20kbps%29%20%281%29.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCl%2BIZOP3h8b6icdTC4cmXhy4h9eqwgq5vD9aHeUtbj6QIhAP7VDYszL2vJ0Zzh%2Fx3lE0%2BPNtUiw9tyS6znHbNK%2FwLBKs0CCPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDkwMjY3MjQ2NDUyIgyIKiD0lRS0yuQp8okqoQLAsQAl4dWfKF3YvirKXJn1943KpGsSGM6JaxCkt93%2FQnr3jHMr3ja4qyhVeia2hSrvnhWL1SEKjbwi8y5EHkiEwGE8WpiUTU%2B8FUOyXc3srMlGZ8ljQWRtLteYCC5IazPKcMWTUz5K6aNvZ4Qx36o4%2FAY4cZNPCLDnFgRnNWLJXFcjGUYwX3YzEYi2p8XTmf5SHXT053EP1gQyJzpf1UJe0S3T%2BMpyjHpChSNiVuizyIfliRBaguoh0%2FHvm9rQ%2FZ15GiZz5i%2FkjHJYFdx4gyWT7Mt5wJjPZVV8V3wkmigVG7JSC%2FwP6a6CEB5oYYRp8n8LBv%2Fs%2FCEuMpXWEyHNPCmFv3FUw%2BGhAyuxhm7Hj6jcM1J2an%2B8AUbPA27URYhLktXyMNu9vvsFOq8CvrwC3fGSWyNiZe6vSjc5h3xmpuCqRwZlrUkwjjbM8vQmk5PTw2GoqNsrTotna7o%2BU7EAnMHhx8XQmnMH650%2Br%2F4FRFkDufAig8lFFtHA6G2fWZzCzi%2FrBrDZlfKUqddP%2FWBB4STXIf5wCaxg%2BYdoNPkT2Yt1EWqdithcK67LyhaKXSfoakTADzyg3r3OiJmt8zMpApEP9SiRU%2BtKs06s2nk%2BOgrRYBrSpwZdXcoyYqyyfFf8NVTPjKB40MuaZbSJHMJp0QfEABKjAkKwrOX28XbQpNRDjbjMOVaXU3uW80%2FEH3T3ir5NZdKNmR3nLI0gCKGeY6H1YPoRQ6A0mHLNgOeDGJMS1Bdbb3jmxFcz%2Bx2AoCXC3q66KcZIM6SxVXH5Nq%2FhVdsU7j05QpFfhMnF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200927T000553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXEJRUP52GJDITJ5B%2F20200927%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=0638d3735e83a5308fafdd79d0bd2f54987cef027febd228b565cd56ec64ef7f")

song.track.attach(io: track_url, filename: 'song.mp3')




