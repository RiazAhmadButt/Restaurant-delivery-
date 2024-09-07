import React, { useState } from "react";
import "./TipDetails.css";

const TipDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="tip-details-container">
      <div className="header">Tip your rider</div>
      <div className="info-text mt-2">Your rider receives 100% of the tip</div>
      <div className="tip-options mt-2">
        <div className="tip-option not-now">Not now</div>
        <div className="tip-option amount-50">Rs. 50.00</div>
        <div className="tip-option amount-100">Rs. 100.00</div>
        <div className="tip-option amount-150">Rs. 150.00</div>
        <div className="tip-option amount-200">Rs. 200.00</div>
      </div>

      <div className="common-text">
        <span> Most common</span>
      </div>

      {/* Save it for the next time */}
      <div className="checkbox-parent">
        <input
          type="checkbox"
          className={`checkbox ${isChecked ? "checked" : ""}`}
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <div className="save-text">Save it for the next time</div>
      </div>

      {/* Place Order Button */}
      <div className="place-order-button">Place order</div>
    </div>
  );
};

export default TipDetails;
