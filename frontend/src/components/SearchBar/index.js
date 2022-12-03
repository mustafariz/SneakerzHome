import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearchedProducts } from "../../store/products";
import './SearchBar.css'

const SearchBar = ({closeSearch}) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  let path = "/search-results";

  const handleSubmit = (e) => {
    e.preventDefault();
    closeSearch(false);
    dispatch(getSearchedProducts(query))
    history.push(path);
  }

  const update = (field) => {
    return e => {
      switch (field) {
        case 'query':
          setQuery(e.target.value)
          break;
        default:
          console.log('Field name error.')
          break;
      }
    }
  }

  return (
    <>
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <button
        type="submit"
        className="search-enter-button">
        magnifying glass icon
        </button>

        <input
        autoFocus='autofocus'
        value={query}
        placeholder="Find your perfect shoes now..."
        onChange={update('query')}
        >
        </input>
      </form>
      <button onClick={() => closeSearch(false)}>x</button>

    </div>
    </>
  )
}

export default SearchBar;