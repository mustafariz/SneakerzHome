json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id
json.extract! @review.user, :username