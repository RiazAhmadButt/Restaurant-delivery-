import React, { useState } from "react";
import "./DeliveryOptions.css";

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState("standard");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="delivery-options-container">
      <p className="delivery-options-header">Delivery options</p>

      {/* Standard Delivery Option */}
      <div
        className={`delivery-option ${
          selectedOption === "standard" ? "selected" : ""
        }`}
        onClick={() => handleOptionChange("standard")}
      >
        <div className="radio-button"></div>
        <div className="delivery-info">
          <div>
            <span className="delivery-type">Standard 20-30 mins</span>
          </div>
          <div>
            <span className="delivery-cost">Free</span>
          </div>
        </div>
      </div>

      {/* Priority Delivery Option */}
      <div
        className={`delivery-option ${
          selectedOption === "priority" ? "selected" : ""
        }`}
        onClick={() => handleOptionChange("priority")}
      >
        <div className="radio-button"></div>
        <div className="delivery-info">
          <div>
            <span className="delivery-type">Priority 20-30 mins</span>
          </div>
          <div>
            <span className="delivery-cost">Rs. 50.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;
