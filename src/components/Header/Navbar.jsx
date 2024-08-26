import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/image 8.png";
import location from "../../images/Location.png";
import downArrow from "../../images/Vector.png";
import world from "../../images/world.png";
import cart from "../../images/Cart.png";
import like from "../../images/Like.png";
// import menuIcon from '../../images/menu-icon.png';
// import closeIcon from '../../images/close-icon.png';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
            src={like}
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
              <span className="location-text">New York, USA</span>
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
            <div className="icon-frame">
              <img src={cart} alt="Cart" className="icon" />
            </div>
            <button className="btn signup-btn">Sign Up</button>
          </div>
        </div>

        {/* Side Drawer for Mobile */}
        <div className={`side-drawer ${isOpen ? "open" : ""}`}>
          <div className="d-flex justify-content-between align-items-center px-3 py-2">
            <img src={logo} alt="Logo" className="logo" />
            <img
              src={like}
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
