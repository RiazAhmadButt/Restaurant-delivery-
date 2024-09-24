import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import plus from "../../images/Vector.png";
import bin from "../../images/Bin.png";
import "./PickupAndDelivery.css";
import ecommercecheckout from "../../images/Ecommerce checkout laptop-amico 1.png";
import { useNavigate } from "react-router-dom";

const PickupAndDelivery = () => {
  const [activeButton, setActiveButton] = useState("Pick-up");
  const navigate = useNavigate();
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleReviewClick = () => {
    navigate("/payment");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  };

  const handleAdd = (item) => {
    addToCart({ ...item, quantity: 1 }); // Add one more of the item
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
                Total{" "}
                <span className="incl">
                  <br />
                  (incl.vat)
                </span>{" "}
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
            <div className="item-txt">
              <p>Your items</p>
            </div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-content">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <span className="item-name">{item.title}</span>
                    <span className="price-txt">
                      {item.name} {item.quantity} x {item.selectedOption}
                    </span>
                    <span className="price-txt">
                      Rs. {item.price * item.quantity}
                    </span>
                    <div className="parent-cart-btns">
                      <div className="cart-btns">
                        <img
                          src={bin}
                          alt="Delete"
                          onClick={() => handleDelete(item.id)}
                        />
                        <span>{item.quantity}</span>
                        <img
                          src={plus}
                          alt="Plus"
                          onClick={() => handleAdd(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-details-parent">
                  <div className="subTotal-text">
                    <span>Subtotal</span>
                    <span>{item.price * item.quantity}</span>
                  </div>
                  <div className="subTotal-text">
                    <span>Standard delivery</span>
                    <span>free</span>
                  </div>
                  <div className="subTotal-text">
                    <span>Service fee</span>
                    <span>9.9</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="totalPrice">
              <p className="total">
                Total{" "}
                <span className="incl">
                  {" "}
                  <br /> (incl.vat)
                </span>{" "}
              </p>
              <p className="total">Rs. {totalPrice}</p>
            </div>
            <div className="review-section review-bg-color">
              <button
                className="review-text review-txt-color"
                onClick={handleReviewClick}
              >
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
