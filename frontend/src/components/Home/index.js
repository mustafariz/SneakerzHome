import './Home.css';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
import React from "react";




function Home () {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let profileButton;


  const handleClick = (e) => {
    e.preventDefault();
    let path = `/users/${sessionUser.id}`
    history.push(path);
  }
  
  if (sessionUser) {
    profileButton = (
      <button onClick={handleClick}>Profile Page</button>
    )
  } else {
    profileButton = (
      <>
      </>
    )
  }

  return (
    <>
     
     
     
    <div>{profileButton}</div>
    <div className='home page-container'></div>
    
    </>
  )
}


export default Home; 