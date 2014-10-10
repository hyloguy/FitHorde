class CreateEventsCorrectly < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.decimal :lat, precision: 10, scale: 6
      t.decimal :lng, precision: 10, scale: 6
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.datetime :starting
      t.integer :duration
      t.integer :capacity
      t.text :description
      t.references :user, index: true

      t.timestamps
    end
  end
end