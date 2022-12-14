# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  brand       :string           not null
#  price       :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord

  has_many_attached :photos

  has_many :reviews,
    dependent: :destroy

  has_one :cart_item

end
