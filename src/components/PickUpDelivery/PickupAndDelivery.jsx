import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PickupAndDelivery.css";
import ecommercecheckout from '../../images/Ecommerce checkout laptop-amico 1.png'

const PickupAndDelivery = () => {
  const [activeButton, setActiveButton] = useState("Pick-up");
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleReviewClick = () => {
    
    navigate("/payment");
  };
  return (
    <div>
      <div className="top-layout">
        <div className="button-container">
          <div className="pickup-button">
            <span
              className={`single-button ${
                activeButton === "Pick-up" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Pick-up")}
            >
              Pick-up
            </span>
          </div>
          <div className="delivery-button">
            <span
              className={`single-button ${
                activeButton === "Delivery" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Delivery")}
            >
              Delivery
            </span>
          </div>
        </div>
        <div className="ecommerceChekoutImg">
            <img src={ecommercecheckout} alt="ecommerce checkout" />
            <h1 className="hungry">Hungry?</h1>
            <p className="text-center hungryDisc">You haven't added anything <br /> to your cart!</p>
        </div>
        <div className="totalPrice">
            <p className="total">Total <span className="incl">(incl.vat)</span> </p>
            <p className="total">Rs. 0</p>
        </div>
        <div className="review-section">
        <button className="review-text" onClick={handleReviewClick}>
            Review payment and address
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickupAndDelivery;
