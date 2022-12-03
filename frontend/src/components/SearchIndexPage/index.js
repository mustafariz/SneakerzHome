import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductIndexItem";
import './SearchIndexPage.css';

const SearchIndexPage = () => {
  let products = useSelector(state => Object.values(state.products))
  let component;
  if (products.length <= 0) {
    component = (
      <>
      <h1 className="no-searchs-found">No Shoes Found in our Store :(</h1>
      </>
    )
  } else {
    component = (
      <>
        <div className="products">
          <ul>
            {
              products.map(product => <li key={product.id}><ProductIndexItem
              product = {product}
              />
              </li>)}
          </ul>
        </div>
      </>
    
  )}

  return (
    <>
    {component}
    </>
  )

}

export default SearchIndexPage;