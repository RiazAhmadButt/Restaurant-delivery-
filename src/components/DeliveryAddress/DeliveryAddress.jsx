import React, { useState } from "react";
import home from "../../images/Home.png";
import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  const [isContactless, setIsContactless] = useState(false);

  const toggleContactlessDelivery = () => {
    setIsContactless(!isContactless);
  };

  return (
    <div className="delivery-address-container">
      <div className="delivery-address-header">
        <p className="delivery-address"> Delivery address</p>
        <p className="change-text">Change</p>
      </div>

      <div className="homeAddress">
        <img src={home} alt="Home" />
        <p className="address-info">
          House no, street no, phase no, city state.
        </p>
      </div>

      <div className="option-frame">
        <div className="leave-at-door">Leave it at the door</div>
      </div>

      <div className="note-frame">
        <textarea
          rows="2"
          placeholder="Note to rider - e.g. building, landmark"
          className="note"
        ></textarea>
      </div>
      <div className="line w-100"></div>
      <div className="contactless-delivery-parent">
        <p className="contactless-delivery">Contactless delivery</p>
        <div
          className={`frame-gray ${isContactless ? "active" : ""}`}
          onClick={toggleContactlessDelivery}
        >
          <div className="frame-white"></div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
