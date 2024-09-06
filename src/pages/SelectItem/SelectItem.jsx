import React, { useState } from "react";
import image from "../../images/image 31.png";
import closebtn from "../../images/Group 10.png";
import plus from "../../images/Group 11.png";
import minus from "../../images/Group 12.png";

import "./SelectItem.css";

const SelectItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("7 Inches");

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="select-container container">
        <div className="header-frame">
          <div className="background-image">
            <img
              src={image}
              alt="Selected product Image"
              className="responsive-image"
            />
          </div>

          <div className="icon-container">
            <img src={closebtn} alt="Close button" />
          </div>
        </div>

        <div className="top-heading-price-parent">
          <div className="top-heading-price">
            <p className="Loaded-fries-text">Loaded fries</p>
            <p className="select-item-price">Rs. 900</p>
          </div>
          <div>
            <p className="descraption-select-item">
              Our top running spicy yet so saucy loaded fries that are just too
              hard to resist!
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="variation-frame">
          <div className="variationheaderParent">
            <p className="variation-header">Select variation</p>
            <p className="required-text">1 required</p>
          </div>

          <div
            className="option"
            onClick={() => handleOptionChange("7 Inches")}
          >
            <div
              className={`option-circle ${
                selectedOption === "7 Inches" ? "selected" : ""
              }`}
            ></div>
            <p className="option-label">7 Inches</p>
            <p className="option-price">Rs. 585</p>
          </div>

          <div
            className="option"
            onClick={() => handleOptionChange("11 Inches")}
          >
            <div
              className={`option-circle ${
                selectedOption === "11 Inches" ? "selected" : ""
              }`}
            ></div>
            <p className="option-label">11 Inches</p>
            <p className="option-price">Rs. 1,053</p>
          </div>

          <div
            className="option"
            onClick={() => handleOptionChange("13 Inches")}
          >
            <div
              className={`option-circle ${
                selectedOption === "13 Inches" ? "selected" : ""
              }`}
            ></div>
            <p className="option-label">13 Inches</p>
            <p className="option-price">Rs. 1,521</p>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <p className="Loaded-fries-text text-left">Special instructions</p>
          <div className="preferences-container">
            <p className="preferences-heading">
              Any specific preferences? Let the restaurant know.
            </p>

            <input
              type="text"
              className="preferences-input preferences-border"
              placeholder="e.g. no mayo"
            />
          </div>
          <div className="preferences-container-input">
            <p className="preferences-heading">
              If this product is not available
            </p>

            <select className="product-option-select">
              <option value="remove">Remove it from my order</option>
              <option value="replace">Replace it with a similar product</option>
              <option value="notify">Notify me for further instructions</option>
            </select>
          </div>
          <div className="line"></div>

          <div className="cart-container">
            <div className="checkbox-group">
              <div className="checkbox-icon" onClick={handleDecrement}>
                <img src={minus} alt="Decrease quantity" />
              </div>
              <span className="circle-number">{quantity}</span>
              <div className="checkbox-tick" onClick={handleIncrement}>
                <img src={plus} alt="Increase quantity" />
              </div>
            </div>
            <button className="cart-button border-0">
              <span className="cart-button-text">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectItem;
