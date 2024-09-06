import React from "react";
import "./Payment.css";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <DeliveryAddress />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <PaymentMethods />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
