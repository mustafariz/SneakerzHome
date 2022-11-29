json.product do
  json.extract! @product, :id, :name, :price, :description, :brand
  if @product.photos.attached?
    json.photo_url @product.photos.map {|product| product.url }
  end
end