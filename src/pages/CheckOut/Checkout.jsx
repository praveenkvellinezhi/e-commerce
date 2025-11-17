import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkout.css";
import "./checkout-header.css";
import { BASE_URL } from "../../Services/BaseUrl";
import  {Ordersummary} from "./Ordersummary";
import { PaymmentSummary } from "./PaymmentSummary";

const Checkout = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary,setPaymentSummary]=useState(null)

  // Fetch delivery options
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/delivery-options`)
      .then((response) => {
        setDeliveryOptions(response.data);
        
      })
      .catch((error) =>
        console.error("Error fetching delivery options:", error)
      );
      
       axios
    .get(`${BASE_URL}/api/payment-summary`)
    .then((response) => {
      setPaymentSummary(response.data);
              console.log(response.data);

    })
    .catch((error) =>
      console.error("Error fetching payment summary:", error)
    );
  }, []);

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
            <img
              src="images/icons/checkout-lock-icon.png"
              alt="Lock Icon"
            />
          </div>
        </div>
      </div>

      {/* Checkout Page */}
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          {/* Order Summary */}
       <Ordersummary cart={cart} deliveryOptions={deliveryOptions}/>

          {/* Payment Summary */}
          <PaymmentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
