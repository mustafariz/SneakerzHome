import './Home.css';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
import airforce from '../assets/nike_air_force_photo1.webp';
import airjordan from '../assets/underarmor_uahovr_photo1.webp';
import converse  from  '../assets/converse_photo1.jpeg';
// import nikedunk  from  '../assets/nike dunk.jpeg';
import nike  from  '../assets/image11.jpg';
import React from "react";
import { Link } from 'react-router-dom';




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

     <div className="nike">
     <img src={nike}></img>
     <Link to="/shoes"><button>BUY</button></Link>
     </div>
     
     
    {/* <div>{profileButton} </div> */}
    <div className='home page-container'></div>

     {/* <div className="image">
     <img src={nikedunk}></img>
     </div> */}

            {/* <div className="airforce">
            <img src={airforce}></img>
        </div>
          */}

        <div className='air-jordan'>
            <div className='air-jordan-2'>
                <h1>UNDER ARMOR</h1>
                <Link to="/shoes"><button>BUY</button></Link>
            </div>
            <img src={airjordan}></img>
        </div>

        
        <div className="grid-keycaps">
            <div className='Converse'>
                <h1>Converse</h1>
                {/* <h2>MX CHICLETS / KEYCAPS</h2> */}
                <Link to="/shoes/"><button>BUY</button></Link>
            </div>
            <img src={converse}></img>
        </div>




    </>
  )
}


export default Home; 