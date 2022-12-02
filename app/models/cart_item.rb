# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  user_id    :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, presence: true

  has_many_attached :photos

  belongs_to :user
  belongs_to :product
  
end
