import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/image logo copy 2.png";
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
import "../Login/Login.css";

const SignUp = () => {
  return (
    <div>
      <div className="login-container">
        <div className="left-panel">
          <div>
            <div className="logo d-flex justify-content-center align-item-center">
              <img src={logo2} alt="Logo" />
            </div>
            <h1 className="welcome-text text-center">Welcome</h1>
            <p className="welcome-message">To stay connected with us</p>
            <p className="welcome-message">
              please Sign-up with your personal info.
            </p>
            <div className="signupParent">
              <button className="btn custom-button w-100">Sign up</button>
            </div>
            <div class="vector-1">
              <img src={vector1} alt="vector" />
            </div>
          </div>
        </div>

        <div className="right-panel">
          <h1 className="login-welcome">Welcome</h1>
          <p className="login-message">Sign-up into your account to continue</p>
          <input
            type="text"
            placeholder="Name"
            className="input-frame email-frame input-text email-text"
          />
          <input
            type="text"
            placeholder="Email"
            className="input-frame email-frame input-text email-text"
          />
          <input
            type="password"
            placeholder="password"
            className="input-frame email-frame input-text email-text"
          />
          <p className="forgot-password">Forgot your password?</p>
          <button className="login-button">Sign-Up</button>
          <p className="new-account">
            Do you have an account?{" "}
            <Link to="/login" className="sign-up-link">
              LogIn
            </Link>
          </p>
          <div className="vector-2">
            <img src={vector2} alt="vector 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
