class CreateCustomers < ActiveRecord::Migration[5.0]
  def up
    create_table :customers, id: false, force: true do |t|
      t.integer :id, limit: 8,  null: false
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :email, null: false
      t.integer :user_id, null: false
      t.string  "phone1",    limit: 20 

      t.timestamps
    end
    execute "ALTER TABLE customers ADD PRIMARY KEY (id);"
          add_index "customers", ["lastname", "firstname"], name: "NAME_LAST_FIRST", using: :btree
          add_index "customers", ["user_id"], name: "fk_customers_users1_idx", using: :btree

  end
    def down
      drop_table :customers
    end
end
