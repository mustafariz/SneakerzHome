# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  rating     :integer          not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

  validates :rating, :title, :body, presence: true
  validates :rating, numericality: { in: 1..5 }
  validates :title, length: { in: 5..20 }
  validates :body, length: { in: 10..300 }
  validates :product_id, uniqueness: { scope: :user_id, message: 'You have already reviewed this product!'}

  belongs_to :user
  belongs_to :product
end
