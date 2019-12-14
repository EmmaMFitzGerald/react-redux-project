# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Emma")

post1 = Post.create(user_id: 1, title: 'My first post', category: "Comedy", content: "Lorem ipsum dolor sit amet, sea ad mucius elaboraret adversarium, te lobortis signiferumque eum, quot nobis et usu. Ea dicant evertitur gloriatur eam, ex vim esse vero aliquando, elit cotidieque in duo. Soluta detraxit splendide per ad, reque dicat platonem vel cu. Ubique debitis quo id.")
post2 = Post.create(user_id: 1, title: 'My second post', category: "Comedy", content: "Lorem ipsum dolor sit amet, sea ad mucius elaboraret adversarium, te lobortis signiferumque eum, quot nobis et usu. Ea dicant evertitur gloriatur eam, ex vim esse vero aliquando, elit cotidieque in duo. Soluta detraxit splendide per ad, reque dicat platonem vel cu. Ubique debitis quo id.")