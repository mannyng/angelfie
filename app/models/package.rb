class Package < ApplicationRecord

  has_many :check_ins
  has_many :check_outs
  belongs_to :customer
  belongs_to :user
  belongs_to :category

end
