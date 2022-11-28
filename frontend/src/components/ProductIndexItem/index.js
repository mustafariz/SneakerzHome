import {useHistory } from 'react-router-dom';
import { useState } from 'react';
import './ProductIndexItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/session';


const ProductIndexItem = ({product}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const productId = product.id;

  const handleClick = (e) => {
    e.preventDefault();
    let path = `products/${productId}`
    history.push(path);
  }


  return (
    <>
    <div className='index-area'>
      <div className='product-index-item'>
        <h1>{product.name}</h1>
        <h2>{product.brand}</h2>
        <h3>{product.price}</h3>
        <button className='learn-more' onClick={handleClick}>Learn More</button>
      </div>
    </div>
    </>
  )
}

export default ProductIndexItem;