import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.signup({ username, email, password }))
        .catch(async (res) => {
          let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      })
  }

  return (

    <>
    <div className="form">

      <h1 className="form-title">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <ul className="errorbox">
          {errors.map((error) => <li className="errors" key={error}>{error}</li>)}
        </ul>
        <div className="userName">
          <label>
            Username
            <br/>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              />
          </label>
        </div>
  <div className="email">

          <label>
            EMAIL
            <br/>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </label>
        </div>

      <div className="password">

        <label>
          PASSWORD
          <br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
      </div>
        <button className="login" type="submit">Sign Up</button>
      </form>
    </div>
    </>
  );
}

export default SignupFormPage;

