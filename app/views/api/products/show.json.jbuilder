json.product do
  json.extract! @product, :id, :name, :price, :description, :brand
  if @product.photos.attached?
    json.photo_url @product.photos.map {|product| product.url }
  end
end
json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :title, :body, :rating, :user_id, :product_id
      json.extract! review.user, :username
    end
  end
end