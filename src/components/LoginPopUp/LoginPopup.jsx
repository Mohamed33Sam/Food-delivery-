import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowlogin }) => {
  const [currentState, setCurrenState] = useState("login");

  return (
    <div className="LoginPop">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currentState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="Password" placeholder="Password" required />
          <button>
            {currentState === "sign up" ? "create account" : "login"}
          </button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing you agree to our terms and privacy policy</p>
          </div>
        </div>
        {currentState === "login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrenState("sign up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrenState("login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
