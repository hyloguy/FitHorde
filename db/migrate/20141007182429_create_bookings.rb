class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings, :id => false do |t|
      t.references :user
      t.references :event

      t.timestamps
    end
    add_index :bookings, [:user_id, :event_id], :unique => true
  end
end
