import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './ProductIndexItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/session';


const ProductIndexItem = ({product}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const photo = product.photoUrl[0];

  const [hoverPhoto, setHoverPhoto] = useState(photo);
  let photo2;

  if (product.photoUrl.length !== 1) {
    photo2 = product.photoUrl[1];
  } else {
    photo2 = photo;
  }


  // const handleClick = (e) => {
  //   e.preventDefault();
  //   let path = `products/${product.id}`
  //   history.push(path);
  // }


  return (
    <>
    <div className='index-area'
    onMouseEnter={() => (setHoverPhoto(photo2))}
    onMouseLeave={() => (setHoverPhoto(photo))}
    >
      <div className='product-index-item'>
        <img className='product-image' src={hoverPhoto} />
        <h1>{product.name}</h1>
        <h2>{product.brand}</h2>
        <h3>${product.price}.00</h3>
      </div>
      <Link to={`/products/${product.id}`}>Learn More
      </Link>
    </div>
    </>
  )
}

export default ProductIndexItem;