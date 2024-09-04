import React from "react";
import "./AvailableDeals.css";

const AvailableDeals = () => {
  return (
    <div className="discount-card-parent">
      <div className="discount-card-container">
        <div className="discount-code">Rs. 300 off (visa300)</div>
        <div className="discount-details">
          Min. order Rs. 1,000. Valid for all items. Use in cart.
        </div>
      </div>
      <div className="discount-card-container">
        <div className="discount-code">Rs. 300 off (visa300)</div>
        <div className="discount-details">
          Min. order Rs. 1,000. Valid for all items. Use in cart.
        </div>
      </div>
    </div>
  );
};

export default AvailableDeals;
