import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/image logo copy 2.png";
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
import "../Login/Login.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // To store validation errors

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation handler
  const validate = () => {
    let tempErrors = {};

    // Name validation
    if (!name) {
      tempErrors.name = "Name is required";
    }

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
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);

    // If no errors, return true
    return Object.keys(tempErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!");
      // Perform form submission (e.g., send data to server)
    } else {
      console.log("Form validation failed.");
    }
  };

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
          <form className="form-fields" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className={`input-frame email-frame input-text email-text ${
                errors.name ? "input-error" : ""
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

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
              Sign-Up
            </button>
          </form>
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
