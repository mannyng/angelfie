class CreateCheckIns < ActiveRecord::Migration[5.0]
  def up
    create_table :check_ins do |t|
      t.uuid :package_id, foreign_key: true
      t.datetime :time_checked_in, null: false
      t.string :notice, null: false
      t.string :location, null: false
      t.string :tracking, null: false

      t.timestamps
    end
     add_index "check_ins", ["tracking"], name: "fk_check_in_tracking_idx", using: :btree
  end
  def down
    drop_table :check_ins
  end
end
