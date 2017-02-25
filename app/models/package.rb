class Package < ApplicationRecord

  has_many :check_ins
  has_many :check_outs
  belongs_to :customer
#  belongs_to :user
  belongs_to :category

  default_scope -> {order(updated_at: :desc)}
  paginates_per 5


end
