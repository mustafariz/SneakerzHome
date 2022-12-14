@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item, :id, :user_id, :product_id, :quantity
    json.extract! cart_item.product, :name, :price, :brand
    if cart_item.product.photos.attached?
      json.photo_url cart_item.product.photos.map { |product| product.url }
    end
  end
end