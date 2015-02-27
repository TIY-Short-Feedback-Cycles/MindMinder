class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :description
      t.integer :row_order
      t.date :due_on
      t.boolean :complete

      t.timestamps null: false
    end
  end
end
