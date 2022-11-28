class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: true, unique: true
      t.string :brand, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
