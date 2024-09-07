import React from "react";
import "./Payment.css";
import DeliveryAddress from "../../components/DeliveryAddress/DeliveryAddress";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import DeliveryOptions from "../../components/DeliveryOptions/DeliveryOptions";
import OrderSummary from "../../components/YourOrderFrom/OrderSummary";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails";
import TipDetails from "../../components/TipDetails/TipDetails";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <DeliveryAddress />
            <DeliveryOptions />
            <PersonalDetails />
            <TipDetails/>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <PaymentMethods />
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
