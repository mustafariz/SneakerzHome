import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchProduct, getProduct } from '../../store/products';
import { getCurrentUser } from '../../store/session';
import ReviewIndex from "../ReviewIndexPage";
import './ProductShowPage.css';

const ProductShowPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const currentUserId = useSelector(getCurrentUser);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, []);

  if (!product) return null;

  const photo = product.photoUrl[0];

  return (
     <>
       <div  className='showpage'>
         
         
         <div className="left-column">
          <img src ={photo}></img>
          </div>
        

        <div className="right-column">
          <div className="product-info">
          <h1>{product.name}</h1>
          <h2>${product.price}.00</h2>
          <p>Tax included. Shipping calculated at checkout.</p>
          <p>{product.discription}</p>
          </div>
        
           


         
        

           </div>
         
         </div>
         <div className="review-div">
           <ReviewIndex />
         </div>
       </>
    )
  }


   
export default ProductShowPage;