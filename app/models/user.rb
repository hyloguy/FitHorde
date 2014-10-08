class User < ActiveRecord::Base
	has_many :events
	has_many :events, through: :bookings
	has_secure_password
	validates :username, :firstname, presence: true
end
