import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { getCurrentUser } from "../../store/session";
import EditReviewFormModal from "../EditReviewFormModal";
import './ReviewIndexItem.css'


const ReviewIndexItem = ({review}) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUser);

  let reviewButtons;

  if (review.userId === currentUserId) {
    reviewButtons = (
      <>
      <EditReviewFormModal review={review}><button className="review-buttons">Edit</button></EditReviewFormModal>
        <button className="review-buttons" onClick={() => dispatch(deleteReview(review.id))}><i className="fa-solid fa-trash"></i></button>
      </>
    )
  } else {
    reviewButtons = (
      <></>
    )
  }

  return (
    <>
    <div className="review-item">
      <div className="review-header">
        <h2>{review.title}</h2>
        <div className="review-icons">
          {reviewButtons}
        </div>
      </div>
      <h4>{review.username}</h4>
      <h6>{review.rating}</h6>
      <p>{review.body}</p>
    </div>
    </>
  )
}

export default ReviewIndexItem;