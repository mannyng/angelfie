require 'rails_helper'
 
       feature "angular test" do

          let(:email) { "bob@example.com" }
          let(:password) { "password123" }

            before do
               User.create!(email: email,
                         password: password,
                        password_confirmation: password)
             end
  
        # tests will go here...
    scenario "Our Angular Test App is Working" do
      visit '/users/sign_in.json'

        # Log In
       fill_in "Email", with: "bob@example.com"
       fill_in "Password", with: "password123"
       click_button "Log in"

        # Check that we go to the right page
       expect(page).to have_content("Burrittoes")

         #Test page
       fill_in "email", with: "bob@example.com"
         within "nav div button" do
           expect(page).to have_content("bob@example.com")
         end
     end
end
