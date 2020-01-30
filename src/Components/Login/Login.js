import React, { useState } from "react";
import "./Login.sass";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import google_logo from "../../img/google.png";
import axios from "axios";
const Login = props => {
  // THIS IS HOW TO DO STATE WITH HOOKS //
  const [users_email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FUNCTION THAT MAKES AXIOS REQUEST TO REGISTER NEW USER. CURRENTLY PUSHES TO THE SWIPE PAGE, BUT IT SHOULD PUSH THEM TO THE "INSERT USER INFO" PAGE SO THEY CAN SETUP THEIR PROFILE //
  const login = async () => {
    axios
      .post("/api/login", { users_email, password })
      .then(response => {
        //change to swipe view when done with
        global.user = response.data;
        props.history.push("/swipe");
      })
      .catch(() => console.log("Login Axios request did not work"));
  };

  return (
    <div className="Login">
      <div className="container Login-container">
        <div className="img-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="input-container">
          <i className="far fa-user"></i>
          <input
            type="text"
            placeholder="Email..."
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <i className="fas fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password "
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button className="primary-btn" onClick={login}>
          Login
        </button>
        <div className="button-container">
          <div className="social-btn google-btn">
            <img src={google_logo} alt="google logo" />
          </div>
          <div className="social-btn fb-btn">
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        <div className="login-footer">
          <p>Forgot Password?</p>
          <p>
            Have not an account yet? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
