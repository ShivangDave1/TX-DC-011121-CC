# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Appearance.destroy_all
Guest.destroy_all
Episode.destroy_all


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'daily_show_guests.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.first(100).each do |row|
  g = Guest.find_or_initialize_by(name: row['Raw_Guest_List'].split(',').first )
  g.occupation = row['GoogleKnowlege_Occupation']
  g.save
end

date = Date.parse('2015-09-08')

(1..40).each do |num|
  Episode.create(date: date, number: num)
  date = date.next
end

appearance1 = Appearance.create(guest_id: 1, episode_id: 1,rating: 4)
appearance2 = Appearance.create(guest_id: 2, episode_id: 1,rating: 5)
appearance3 = Appearance.create(guest_id: 3, episode_id: 1,rating: 2)
appearance4 = Appearance.create(guest_id: 5, episode_id: 2,rating: 5)
appearance5 = Appearance.create(guest_id: 4, episode_id: 2,rating: 4)
appearance6 = Appearance.create(guest_id: 6, episode_id: 2,rating: 3)
appearance7 = Appearance.create(guest_id: 7, episode_id: 3,rating: 2)
appearance8 = Appearance.create(guest_id: 8, episode_id: 4,rating: 1)
appearance9 = Appearance.create(guest_id: 9, episode_id: 4,rating: 1)
appearance10 = Appearance.create(guest_id: 10, episode_id: 5,rating: 2)
appearance11 = Appearance.create(guest_id: 11, episode_id: 5,rating: 1)
appearance12 = Appearance.create(guest_id: 12, episode_id: 5,rating: 4)
appearance13 = Appearance.create(guest_id: 13, episode_id: 5,rating: 3)
appearance14 = Appearance.create(guest_id: 14, episode_id: 5,rating: 3)
appearance15 = Appearance.create(guest_id: 15, episode_id: 7,rating: 4)
appearance16 = Appearance.create(guest_id: 16, episode_id: 8,rating: 5)
appearance17 = Appearance.create(guest_id: 17, episode_id: 9,rating: 3)
appearance18 = Appearance.create(guest_id: 18, episode_id: 11,rating: 1)
appearance19 = Appearance.create(guest_id: 19, episode_id: 14,rating: 6)


