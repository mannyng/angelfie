require 'rails_helper'

  feature "Check In" do

   def create_package(description: nil, customer_id: nil, category_id: nil, tracking: nil, date_opened: nil, status: "pending", rv_name: nil, rv_email: nil, rv_phone: nil, rv_street: nil, rv_extra_address: nil, rv_city: nil, rv_zip: nil, rv_state: nil, rv_country: nil, weight: nil, height: nil, width: nil, pk_name: nil, pk_street: nil, pk_extra_address: nil, pk_city: nil, pk_zip: nil, pk_state: nil, pk_country: nil)
  
       package = []
       description = "Migrant work stuff"
       customer_id = 996436667
       category_id = 1
       tracking = SecureRandom.random_number(999999999)
       date_opened = rand(10.years).seconds.ago
       status = "pending"
       rv_name = "Aramis Douch"
       rv_email ||= "#{Faker::Internet.user_name}#{rand(1000)}@" +
"#{Faker::Internet.domain_name}"
       rv_phone ||= Faker::PhoneNumber.phone_number
       rv_street ||= Faker::Address.street_address
       rv_extra_address ||= Faker::Address.secondary_address 
       rv_city ||= Faker::Address.city
       rv_state ||= Faker::Address.state
       rv_zip ||= Faker::Address.zip
       rv_country ||= Faker::Address.country
       weight = "1.2kg"
       height = "1ft"
       width = "34cm"
       pk_name = "Tallier Homer"
       pk_street ||= Faker::Address.street_address
       pk_extra_address ||= Faker::Address.street_address
       pk_city ||= Faker::Address.city
       pk_state ||= Faker::Address.state 
       pk_country ||= Faker::Address.country
       pk_zip ||= Faker::Address.zip
   
   package = Package.create!(description: description, customer_id: customer_id, category_id: category_id, tracking: tracking, date_opened: date_opened, status: "pending", rv_name: rv_name, rv_email: rv_email, rv_phone: rv_phone, rv_street: rv_street, rv_extra_address: rv_extra_address, rv_city: rv_city, rv_zip: rv_zip, rv_state: rv_state, rv_country: rv_country, weight: weight, height: height, width: width, pk_name: pk_name, pk_street: pk_street, pk_extra_address: pk_extra_address, pk_city: pk_city, pk_zip: pk_zip, pk_state: pk_state, pk_country: pk_country)
   end

   def create_check_in(package_id: nil, time_checked_in: nil, notice: nil, location: nil, tracking: nil)

        package_id = package[i].id
        time_checked_in = rand(10.years).seconds.ago 
        notice = "Waiting for approval"  
        location  ||= Faker::Address.street_address
        tracking = SecureRandom.random_number(999999999) # 9-digit integer 

     CheckIn.create!(package_id: package_id, time_checked_in: time_checked_in, notice: notice, location: location, tracking: tracking)
   end

    let(:email) { "bob@example.com" }
    let(:password) { "password123" } 

 scenario " Check you can create new checkin" do
   expect(create_package).to be.eq('true')
end
 
 end
