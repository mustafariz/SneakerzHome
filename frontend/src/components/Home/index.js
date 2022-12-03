import './Home.css';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
// import airforce from '../assets/nike_air_force_photo1.webp';
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
     
     <div className= "homepage"></div>
     
     
    <div>{profileButton}</div>
    <div className='home page-container'></div>

    <div className="image">
            </div>

            {/* <div className="airforce">
            <img src={airforce}></img>
        </div> */}

    
    </>
  )
}


export default Home; 