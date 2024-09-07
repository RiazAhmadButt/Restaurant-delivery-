import React from 'react';
import './OrderSummary.css'; // Import the CSS styles

const OrderSummary = () => {
  return (
    <div className="order-summary">
      {/* Frame 35 */}
      <div className="frame-35">
        <div className="your-order-from">Your order from</div>
        <div className="benediction">Benediction</div>
        <div className="item-loaded-fries">
          <span>1 X Loaded fries</span>
          <span className="item-price">Rs. 900</span>
        </div>
        <div className='line w-100'></div>
        <div className="subtotal">
          <span>Subtotal</span>
          <span className="subtotal-price">Rs. 530</span>
        </div>
        <div className="delivery">
          <span>Standard delivery</span>
          <span className="delivery-price">Free</span>
        </div>
        <div className="service-fee">
          <span>Service fee</span>
          <span className="service-price">Rs. 9.99</span>
        </div>
        
        <div className="total">
          <span>Total <br /> <span className='units'>(incl. vat)</span></span> 
          <span className="total-price">Rs. 539.99</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
