import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";


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
    <h1>Welcome, {sessionUser.username}</h1>
    <div>{logoutButton}</div>
    </>
  )
}

export default ProfilePage