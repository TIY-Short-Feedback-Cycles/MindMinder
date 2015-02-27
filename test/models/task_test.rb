require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end



  test "tasks exist" do
    assert tasks(:one)
    assert_equal "Tasks!", tasks(:three).description
  end
  
end
