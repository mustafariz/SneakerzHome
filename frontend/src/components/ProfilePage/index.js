import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './ProfilePage.css'


function ProfilePage () {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let logoutButton;

    
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    let path = "/login";
    history.push(path);
 }

  if (sessionUser) {
    logoutButton = (
      <button className='logout' onClick={logout}>Log Out</button>
      )
  } else {
    logoutButton = (
      <>
      </>
    )
  }
  return (
    <>
    {/* <h1>Welcome, {sessionUser.username}</h1>
    <div>{logoutButton}</div> */}

<div className="profile-header">
            <h1>My Account</h1>
            <button className="log-out" onClick={logout}>Log Out</button>
        </div>

        <div className="account-page">
            <div className="order-history">
                <h1>Order History</h1>
                <p>You haven't placed any orders yet.</p>
            </div>
            <div className="account-details">
                <h1>Account Details</h1>
                <h5>{sessionUser.username}</h5>
                <h5>{sessionUser.email}</h5>
            </div>
            
            
            <div className="image">
            </div>

            
            <div className="blur">
            </div>

         </div>
    </>
  )
}

export default ProfilePage;