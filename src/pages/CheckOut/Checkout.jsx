import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkout.css";
import "./checkout-header.css";
import { BASE_URL } from "../../Services/BaseUrl";
import { Ordersummary } from "./Ordersummary";
import { PaymmentSummary } from "./PaymmentSummary";

const Checkout = ({ cart, loadCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  // Fetch delivery options
  useEffect(() => {
    const fetchcheckoutData = async () => {
      let response = await axios.get(`${BASE_URL}/api/delivery-options`);

      setDeliveryOptions(response.data);

      response = await axios.get(`${BASE_URL}/api/payment-summary`);

      setPaymentSummary(response.data);
    };

    fetchcheckoutData();
  }, [cart]);

  return (
    <div>
      <title>Checkout</title>

      {/* Checkout Header */}
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" alt="Logo" />
              <img
                className="mobile-logo"
                src="images/mobile-logo.png"
                alt="Mobile Logo"
              />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              {cart.length} items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" alt="Lock Icon" />
          </div>
        </div>
      </div>

      {/* Checkout Page */}
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          {/* Order Summary */}
          <Ordersummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

          {/* Payment Summary */}
          <PaymmentSummary paymentSummary={paymentSummary}  loadCart={loadCart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
