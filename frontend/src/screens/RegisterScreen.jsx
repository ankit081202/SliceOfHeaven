import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const dispatch = useDispatch();
  function register(){
    if(password!=cpassword){
        alert("Passwords not matched");
    }else{
        const user = {
            name,email,password
        }
        dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <h2>Register</h2>
          <div>
            <input
              type="text"
              placeholder="name"
              required
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            />
            <input
              type="password"
              required
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcPassword(e.target.value);
              }}
              style={{marginBottom:'10px'}}
              />
              <a href="/login" >Click here to Log In</a>
              <br />
            <button className="btn mt-3" onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
