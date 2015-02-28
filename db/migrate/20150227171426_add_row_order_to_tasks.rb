class AddRowOrderToTasks < ActiveRecord::Migration
  def change
    remove_column :tasks, :order
    add_column :tasks, :row_order, :integer
  end
end
