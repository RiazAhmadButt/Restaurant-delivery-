import React from "react";
import image from "../../images/image 31.png";
import closebtn from "../../images/Group 10.png";
import "./SelectItem.css";

const SelectItem = () => {
  return (
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

      <div>
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
          <div className="variation-header">Select variation</div>
          <div className="required-frame">
            <div className="required-text">1 required</div>
          </div>
        </div>

        <div className="option">
          <div className="option-circle selected"></div>
          <div className="option-label">7 Inches</div>
          <div className="option-price">Rs. 585</div>
        </div>

        <div className="option">
          <div className="option-circle"></div>
          <div className="option-label">11 Inches</div>
          <div className="option-price">Rs. 10,53</div>
        </div>

        <div className="option">
          <div className="option-circle"></div>
          <div className="option-label">13 Inches</div>
          <div className="option-price">Rs. 15,21</div>
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
      {/* Group 12 */}
      <div className="circle-group">
        <div className="circle-icon"></div>
        <div className="circle-border"></div>
        <span className="circle-number">1</span>
      </div>

      {/* Group 11 */}
      <div className="checkbox-group">
        <div className="checkbox-icon"></div>
        <div className="checkbox-tick"></div>
      </div>

      {/* Add to Cart Button */}
      <div className="cart-button">
        <span className="cart-button-text">Add to cart</span>
      </div>
    </div>
      </div>
    </div>
  );
};

export default SelectItem;
