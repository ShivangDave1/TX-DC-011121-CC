# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Guest.destroy_all
Episode.destroy_all
Appearance.destroy_all
# require 'csv'

# csv_text = File.read(Rails.root.join('lib', 'seeds', 'daily_show_guests.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.first(100).each do |row|
#   g = Guest.find_or_initialize_by(name: row['Raw_Guest_List'].split(',').first )
#   g.occupation = row['GoogleKnowlege_Occupation']
#   g.save
# end

# date = Date.parse('2015-09-08')

# (1..40).each do |num|
#   Episode.create(date: date, number: num)
#   date = date.next
# end


g1 = Guest.create(name:"Michael J. Fox", occupation: "Musician")
g2 = Guest.create(name:"Sandra Bernhard", occupation: "Engineer")
g3 = Guest.create(name:"Tracey Ullman", occupation: "Post Woman")
g4 = Guest.create(name:"Gillian Anderson", occupation: "Electrician")
g5 = Guest.create(name:"David Alan Grier", occupation: "Actor")
g6 = Guest.create(name:"William Baldwin", occupation: "Singer")
g7 = Guest.create(name:"Michael Stipe", occupation: "Scientist")
g8 = Guest.create(name:"Matthew Lillard", occupation: "Analyst")
g9 = Guest.create(name:"Carmen Electra", occupation: "Teacher")
g10 = Guest.create(name:"David Cross", occupation: "Developer")


e1 = Episode.create(date: "September 08, 2015", number: 1)
e2 = Episode.create(date: "September 09, 2015", number: 2)
e3 = Episode.create(date: "September 10, 2015", number: 3)
e4 = Episode.create(date: "September 11, 2015", number: 4)
e5 = Episode.create(date: "September 12, 2015", number: 5)
e6 = Episode.create(date: "September 13, 2015", number: 6)
e7 = Episode.create(date: "September 14, 2015", number: 7)
e8 = Episode.create(date: "September 15, 2015", number: 8)
e9 = Episode.create(date: "September 16, 2015", number: 9)
e10 = Episode.create(date: "September 17, 2015", number:10)


a1 = Appearance.create(rating: 3, guest_id: g1.id, episode_id: e1.id)
a2 = Appearance.create(rating: 4, guest_id: g1.id, episode_id: e3.id)
a3 = Appearance.create(rating: 5, guest_id: g2.id, episode_id: e4.id)
a4 = Appearance.create(rating: 3, guest_id: g3.id, episode_id: e4.id)
a5 = Appearance.create(rating: 4, guest_id: g4.id, episode_id: e5.id)
a6 = Appearance.create(rating: 4, guest_id: g5.id, episode_id: e6.id)
a7 = Appearance.create(rating: 3, guest_id: g6.id, episode_id: e7.id)
a8 = Appearance.create(rating: 5, guest_id: g7.id, episode_id: e8.id)
a9 = Appearance.create(rating: 2, guest_id: g9.id, episode_id: e10.id)
a10 = Appearance.create(rating: 4, guest_id: g10.id, episode_id: e9.id)