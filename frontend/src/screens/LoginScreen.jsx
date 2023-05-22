import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginUser} from "../actions/userAction";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  })

  function login(){
    const user = {
      email,password
    }
    dispatch(loginUser(user))    
  }
  return (
    <div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5">
        <h2>Login</h2>
        <div>
          <input
            type="text"
            required
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{marginBottom:'10px'}}
          />
          <a href="/register" >Click here to Sign Up</a>
          <br />
          <button className="btn mt-3" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginScreen;
