json.product do
  json.extract! @product, :id, :name, :price, :description, :brand
end