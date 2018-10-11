1..10.times do
  Project.create(name: Faker::Name.first_name)
end

Project.all.each do |project|
  1..10.times do
    project.tasks.create(
      title: Faker::Name.name,
      description: Faker::Lorem.paragraph
    )
  end
end
