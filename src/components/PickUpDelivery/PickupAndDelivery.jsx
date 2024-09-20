import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./PickupAndDelivery.css";
import ecommercecheckout from "../../images/Ecommerce checkout laptop-amico 1.png";
import { useNavigate } from "react-router-dom";

const PickupAndDelivery = () => {
  const [activeButton, setActiveButton] = useState("Pick-up");
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleReviewClick = () => {
    navigate("/payment");
  };


  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity; // Assuming item.price is the price per unit
  }, 0);



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
        {cartItems.length === 0 ? (
          <>
            <div className="ecommerceChekoutImg">
              <img src={ecommercecheckout} alt="ecommerce checkout" />
              <h1 className="hungry">Hungry?</h1>
              <p className="text-center hungryDisc">
                You haven't added anything <br /> to your cart!
              </p>
            </div>
            <div className="totalPrice">
              <p className="total">
                Total <span className="incl">(incl.vat)</span>{" "}
              </p>
              <p className="total">Rs. 0</p>
            </div>
            <div className="review-section">
              <button className="review-text" onClick={handleReviewClick}>
                Review payment and address
              </button>
            </div>
          </>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
  <div key={index} className="cart-item">
    <div className="cart-item-content">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <p>
          {item.name} - {item.quantity} x {item.selectedOption}
        </p>
        <p>Price: Rs. {item.price * item.quantity}</p>
      </div>
    </div>
  </div>
))}

            <div className="totalPrice">
                  <p className="total">
                    Total <span className="incl">(incl.vat)</span>{" "}
                  </p>
                  <p className="total">Rs. {totalPrice}</p>
                </div>
            <div className="review-section">
              <button className="review-text" onClick={handleReviewClick}>
                Review payment and address
              </button>
            </div>
          </div>
        )}

        {/* <div className="ecommerceChekoutImg">
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
        </div> */}
      </div>
    </div>
  );
};

export default PickupAndDelivery;
