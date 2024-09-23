import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/image logo copy 2.png";
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
import {auth} from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation handler
  const validate = () => {
    let tempErrors = {};

    // Email validation
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully!");
        onLogin(); // Trigger the login function passed from App
        navigate("/home"); // Navigate to /home after successful login
      } catch (error) {
        console.error("Login error", error.message);
        alert("Login failed: " + error.message);
      }
    } else {
      console.log("Validation failed.");
    }
  };



  return (
    <div>
      <div className="login-container">
        <div className="left-panel">
          <div>
            <div className="logo d-flex justify-content-center align-item-center w-100">
              <img src={logo2} alt="Logo" />
            </div>
            <h1 className="welcome-text text-center">Welcome</h1>
            <p className="welcome-message">To stay connected with us</p>
            <p className="welcome-message">
              Please log in with your personal info.
            </p>
            <div className="signupParent">
              <button className="btn custom-button w-100">Sign in</button>
            </div>
            <div className="vector-1">
              <img src={vector1} alt="vector" />
            </div>
          </div>
        </div>

        <div className="right-panel">
          <h1 className="login-welcome">Welcome</h1>
          <p className="login-message">Login into your account to continue</p>

          <form className="form-fields" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className={`input-frame email-frame input-text email-text ${
                errors.email ? "input-error" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              className={`input-frame email-frame input-text email-text ${
                errors.password ? "input-error" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <p className="forgot-password">Forgot your password?</p>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <p className="new-account">
            Don't have an account?{" "}
            <Link to="/" className="sign-up-link">
              Sign up
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

export default Login;
