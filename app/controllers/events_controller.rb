class EventsController < ApplicationController
	
	before_action :set_event, only: [:show, :update, :destroy, :edit]
	
	def index
		@events = Event.all
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @events }
		end
	end

	def new
		@event = Event.new
	end

	def create
      @event = Event.new(event_params)

   		respond_to do |format|
	     	if @event.save
	       		format.html { redirect_to @event, notice: 'Event was successfully created.' }
	       		format.json { render :show, status: :created, location: @event }
	     	else
	       		format.html { render :new }
	       		format.json { render json: @event.errors, status: :unprocessable_entity }
	     	end
   		end
	end

	def show
		 @booking = Booking.new
	end

	def edit
		
	end

	def update
 		respond_to do |format|
     	if @event.update(event_params)
       		format.html { redirect_to @event, notice: 'Event was successfully updated.' }
       		format.json { render :show, status: :ok, location: @event }
     	else
       		format.html { render :edit }
       		format.json { render json: @event.errors, status: :unprocessable_entity }
     	end
 		end
	end

	def destroy
		@event.destroy
 		respond_to do |format|
   		format.html { redirect_to events_url, notice: 'Event was successfully deleted.' }
   		format.json { head :no_content }
 		end
	end

	private
	def event_params
		params.require(:event)
			.permit(:title, :lat, :lng, :street, :city, :state, :zip, :starting, :duration, :capacity, :description, :user_id)
	end

	def set_event
		@event = Event.find(params[:id])
	end
end
