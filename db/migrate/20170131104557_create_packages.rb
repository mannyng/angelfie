class CreatePackages < ActiveRecord::Migration[5.0]
  def up
    create_table :packages, id: :uuid, id: false, default: "uuid_generate_v4()", force: true do |t|
      t.uuid :id, default: "uuid_generate_v4()", null: false, unique: true
      t.string :description, null: false
      t.references :customer, null: false
      t.references :category, null: false
      t.string :tracking, null: false, unique: true
      t.datetime :date_opened, null: false
      t.string :status, default: 'pending'
      t.string :rv_name, null: false
      t.string :rv_email, null: false
      t.string :rv_phone
      t.string :rv_street, null: false
      t.string :rv_extra_address
      t.string :rv_city, null: false
      t.string :rv_zip, null: false
      t.string :rv_state, null: false
      t.string :rv_country, null: false
      t.decimal :weight
      t.decimal :height
      t.decimal :width
      t.string :pk_name, null: false
      t.string :pk_street, null: false
      t.string :pk_extra_address
      t.string :pk_city, null: false
      t.string :pk_zip, null: false
      t.string :pk_state, null: false
      t.string :pk_country, null: false


      t.timestamps
    end
    execute "ALTER TABLE packages ADD PRIMARY KEY (id);"
    add_index "packages", ["tracking", "id"], name: "BY_TRACKING", using: :btree
  end
   def down
    drop_table :packages
  end
end
