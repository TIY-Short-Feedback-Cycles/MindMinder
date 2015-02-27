class Task < ActiveRecord::Base
  include RankedModel
  ranks :order
end
