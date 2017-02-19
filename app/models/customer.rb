class Customer < ApplicationRecord
 belongs_to :user, :dependent => :destroy
 has_many :packages, :dependent => :destroy

end
