import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewFormModal({review}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='review-modal-button' onClick={() => setShowModal(true)}>Edit</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditReviewForm review={review} showModal={setShowModal} />
      </Modal>
    )}
    </>
  )

}

export default EditReviewFormModal;