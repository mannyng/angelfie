class CheckIn < ApplicationRecord
  belongs_to :package

  default_scope -> {order(updated_at: :desc)}
  paginates_per 5


end
