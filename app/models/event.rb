class Event < ActiveRecord::Base
  belongs_to :user
  has_many :users, through: :bookings
  validate :check_location
  validates :title, :starting, :duration, :capacity, presence: true

  def check_location
  	if lat.blank? || lng.blank?
  		if street.blank? || city.blank? || state.blank? || zip.blank?
  			errors.add :base, "You need to provide either map coordinates or an address."
  			return false
  		end
  	else
  		return true
  	end
  end
  		
  			

end
