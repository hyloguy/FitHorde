class Event < ActiveRecord::Base
  belongs_to :user
  has_many :users, through: :bookings

end
