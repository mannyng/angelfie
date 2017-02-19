# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = [] # Empty array to store users
299.times do
        user_password = SecureRandom.base64(12)
        u = User.new
        u.password = user_password
        u.password_confirmation = user_password
        u.email = "#{Faker::Internet.free_email}"
        u.sign_in_count = 0
                  #u.role_id = 2
    u.save
   users << u # Put newly created user in the array
end

# Generate a regular ("Test") user - will be the 300th seeded user
 testUser = User.create(password: 'password', password_confirmation: 'password', email: 'foo@bar.com', sign_in_count: 0)
 users << testUser # Store "test" user in the users array

# Generate admin ("Administrator") user
User.create(password: 'Pa55w0rd', password_confirmation: 'Pa55w0rd', email: 'phill@emaircourier.com', sign_in_count: 0, role: 'admin')


customers = [] # Empty array to store customers
300.times do |i|
   c = Customer.new
     user_id = User.select(:id).distinct

    firstname = Faker::Name.first_name,
    lastname = Faker::Name.last_name,
    username = "#{Faker::Internet.user_name}#{i}",
    email = Faker::Internet.user_name + i.to_s +
    "@#{Faker::Internet.domain_name}"

    c.user_id = user_id
    c.id = SecureRandom.random_number(999999999) # 9-digit integer
    c.phone1 = "#{Faker::PhoneNumber.phone_number}"
    c.firstname = firstname
    c.email = email
    c.lastname = lastname
        c.save
        customers << c

end


