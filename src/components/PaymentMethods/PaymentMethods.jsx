import React, { useState } from "react";
import paypal from "../../images/paypal (2) 1.png";
import googlePay from "../../images/google (5) 1.png";
import apple from "../../images/apple (2) 1.png";
import creditandDebit from "../../images/image 9.png";
import "./PaymentMethods.css";

const PaymentMethods = () => {
  const [selectedOption, setSelectedOption] = useState("paypal");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div>
      <div className="payment-options-container">
        <div className="payment-options-header">
          <p className="payment-options">Payment options</p>
        </div>

        {/* PayPal Option */}
        <div
          className="payment-option-frame"
          onClick={() => handleOptionChange("paypal")}
        >
          <div className="icon-parent">
            <img src={paypal} alt="PayPal" className="option-icon" />
            <span className="payment-option-label">PayPal</span>
          </div>

          <div
            className={`radio ${selectedOption === "paypal" ? "selected" : ""}`}
          ></div>
        </div>

        {/* Google Pay Option */}
        <div
          className="payment-option-frame"
          onClick={() => handleOptionChange("google")}
        >
          <div className="icon-parent">
            <img src={googlePay} alt="Google Pay" className="option-icon" />
            <span className="payment-option-label">Google Pay</span>
          </div>
          <div
            className={`radio ${selectedOption === "google" ? "selected" : ""}`}
          ></div>
        </div>

        {/* Apple Pay Option */}
        <div
          className="payment-option-frame"
          onClick={() => handleOptionChange("apple")}
        >
          <div className="icon-parent">
            <img src={apple} alt="Apple Pay" className="option-icon" />
            <span className="payment-option-label">Apple Pay</span>
          </div>
          <div
            className={`radio ${selectedOption === "apple" ? "selected" : ""}`}
          ></div>
        </div>

        <p className="pay-with-card">Pay with Debit/Credit Card</p>
        <div
          className="payment-option-frame"
          onClick={() => handleOptionChange("card")}
        >
          <div className="icon-parent">
            <img src={creditandDebit} alt="Card" className="option-icon" />
            <span className="payment-option-label">
              .... ..... .... ... 5678
            </span>
          </div>
          <div
            className={`radio ${selectedOption === "card" ? "selected" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
