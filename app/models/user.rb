class User < ApplicationRecord
 
  has_one :customer, :dependent => :destroy
  has_many :packages, through: :customer

   accepts_nested_attributes_for :customer, :allow_destroy => true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


end
