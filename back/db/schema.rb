# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_08_18_130459) do

  create_table "shops", force: :cascade do |t|
    t.integer "post_id"
    t.string "name"
    t.string "address"
    t.string "phone_number"
    t.string "access"
    t.string "parking"
    t.string "open_time"
    t.string "closed_days"
    t.text "remarks"
    t.text "prohibited_matters"
    t.text "when_to_buy_tickets"
    t.text "call_timing"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end