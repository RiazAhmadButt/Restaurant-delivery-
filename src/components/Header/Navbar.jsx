import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/image 8.png";
import location from "../../images/Location.png";
import downArrow from "../../images/downArrow.png";
import world from "../../images/world.png";
import cart from "../../images/Cart.png";
import like from "../../images/Like.png";
import menuIcon from "../../images/Group 9932.png";
import closeIcon from "../../images/close-icon-13577.png";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const { getItemCount } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleSignUp = () => {
    navigate("./");
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  const handleLogin = () => {
    setIsLoggedIn(true);  
  };

  return (
    <nav className="custom-navbar">
      <div className="container d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="d-lg-none">
          <img
            src={menuIcon}
            alt="Menu"
            className="menu-icon"
            onClick={toggleDrawer}
          />
        </div>

        {/* Right Side Icons and Button (Hidden on Mobile) */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="location-frame d-flex align-items-center">
            <div>
              <img src={location} alt="Location" className="location-icon" />
              <input
                type="text"
                className="location-text ms-2"
                value={locationInput}
                onChange={handleLocationChange}
                placeholder="New York, USA"
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "black",
                  fontSize: "14px",
                }}
              />
            </div>
            <img src={downArrow} alt="Down Arrow" className="ms-2" />
          </div>

          <div className="d-flex align-items-center me-4">
            <div className="icon-frame">
              <img src={world} alt="World" className="icon" />
            </div>
            <span className="language">English</span>
            <img src={downArrow} alt="Down Arrow" className="ms-2" />
          </div>

          <div className="vertical-divider"></div>

          <div className="d-flex align-items-center ms-4">
            <div className="icon-frame">
              <img src={like} alt="Like" className="icon" />
            </div>
            <div className="icon-frame position-relative">
              <img src={cart} alt="Cart" className="icon" />
              {getItemCount() > 0 && (
                <span className="cart-item-count">{getItemCount()}</span>
              )}
            </div>
             {/* Conditionally render the Sign Up or Logout button */}
             {!isLoggedIn ? (
              <button className="btn signup-btn" onClick={handleSignUp}>
                Sign Up
              </button>
            ) : (
              <button className="btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Side Drawer for Mobile */}
        <div className={`side-drawer ${isOpen ? "open" : ""}`}>
          <div className="d-flex justify-content-between align-items-center px-3 py-2">
            <img src={logo} alt="Logo" className="logo" />
            <img
              src={closeIcon}
              alt="Close"
              className="close-icon"
              onClick={toggleDrawer}
            />
          </div>
          <div className="side-drawer-content">
            <div className="location-frame d-flex align-items-center">
              <img src={location} alt="Location" className="location-icon" />
              <span className="location-text">New York, USA</span>
              <img src={downArrow} alt="Down Arrow" className="ms-2" />
            </div>
            <div className="language-selection d-flex align-items-center mt-3">
              <img src={world} alt="World" className="icon" />
              <span className="language ms-2">English</span>
              <img src={downArrow} alt="Down Arrow" className="ms-2" />
            </div>
            <div className="mt-4">
              <div className="icon-frame">
                <img src={like} alt="Like" className="icon" />
              </div>
              <div className="icon-frame">
                <img src={cart} alt="Cart" className="icon" />
                {getItemCount() > 0 && (
                  <span className="cart-item-count">{getItemCount()}</span>
                )}
              </div>
            </div>
            <button className="btn signup-btn mt-4">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
