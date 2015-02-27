# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Task.create( description: "Do all the things!", row_order: 1, due_on: "04-02-2015", complete: false)
Task.create( description: "Discover transcendent truths", row_order: 2, due_on: "02-01-2015", complete: true)
Task.create( description: "Dance frenetically", row_order: 3, due_on: "02-04-2015", complete: false)
