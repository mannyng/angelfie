class Customer < ApplicationRecord
 belongs_to :user, :dependent => :destroy
 has_many :packages, :dependent => :destroy

 default_scope -> {order(updated_at: :desc)}
 paginates_per 5

end
