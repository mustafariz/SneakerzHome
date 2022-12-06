import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CartIndexPage from '../CartIndexPage';
import './Navbar.css';
import SearchBar from '../SearchBar';


function Navbar() {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();
  const [cartMenu, setCartMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);


  useEffect(() => {
    setCartMenu(false)
  }, [location]);

  const hideNavBar = () => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      return 'hide'
    } else {
      return 'navbar-container'
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <NavLink to={`/users/${sessionUser.id}`}><i className="fa-regular fa-user"></i></NavLink>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className='user-button'><i className="fa-regular fa-user"></i></NavLink>
      </>
    );
  }

  if (toggleSearch) return <SearchBar closeSearch={setToggleSearch}/>

  
  return (
  <>
  <div className={hideNavBar()}>
    <ul>
      <li className='navitems'>
        <div className='nav-name'><NavLink exact to="/" style={{ textDecoration: 'none' }}><h1 className='name'>SneakerzHome</h1></NavLink></div>
          <div className='nav-links'>
            <NavLink exact to="/" style={{ textDecoration: 'none' }}><div className='store'>Store</div></NavLink>
            <NavLink exact to="/shoes" style={{ textDecoration: 'none' }}><div className='catalog'>Brands</div></NavLink>
            <NavLink exact to="/about-me" style={{ textDecoration: 'none' }}><div className='about-me'>About </div></NavLink>
          </div>
      </li>
    </ul>
   
    <div className='icons'>
      {<div className='profile-icon'>{sessionLinks}</div>}
      <div className="search-icon" onClick={(() => setToggleSearch(true))}><i className="fa-solid fa-magnifying-glass"></i></div>

      <div className='cart-collapse'>
        <button className="cart" onClick={() => setCartMenu(true)}>
          <div className='cart-icon'><i className="fa-solid fa-cart-shopping"></i></div>
        </button>
        {cartMenu && <CartIndexPage closeCartMenu={setCartMenu}/>}
      </div>
    </div>
  </div>
  </>
  );
}

export default Navbar;
