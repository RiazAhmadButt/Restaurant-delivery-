import React from 'react';
import logo from '../../images/image logo 1.png';
import insta from '../../images/instagram.png';
import facbook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png';
import linkedin from '../../images/Linkedin@2x.png';
import leftImage from '../../images/footer1.png';  
import rightImage from '../../images/footer2.png';  
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={leftImage} alt="Left Image" className="footer-side-image left-side-image" />

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit.
        </p>
        <div className="footer-social-icons">
          <div className="social-icon">
            <img src={insta} alt="Instagram" />
          </div>
          <div className="social-icon">
            <img src={facbook} alt="Facebook" />
          </div>
          <div className="social-icon">
            <img src={twitter} alt="Twitter" />
          </div>
          <div className="social-icon">
            <img src={linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className="footer-bottom">
          <span className="privacy-policy">Privacy policy</span>
          <span className="copyright">Copyright by Hungry kitchen all right reserved 2024!</span>
          <span className="terms-conditions">Terms and conditions</span>
        </div>
      </div>

      <img src={rightImage} alt="Right Image" className="footer-side-image right-side-image" />
    </footer>
  );
};

export default Footer;
