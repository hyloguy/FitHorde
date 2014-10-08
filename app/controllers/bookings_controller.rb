class BookingsController < ApplicationController

	def create
		@booking = Booking.new(booking_params)

 		respond_to do |format|
     	if @booking.save
       		format.html { redirect_to events_path, notice: 'Booking was successfully made.' }
       		format.json { render :show, status: :created, location: @event }
     	else
       		format.html { redirect_to events_path, notice: 'Booking failed.' }
       		format.json { render json: @event.errors, status: :unprocessable_entity }
     	end
 		end
	end

	private

	def booking_params
		params.require(:booking).permit(:user_id, :event_id)
		
	end

end
