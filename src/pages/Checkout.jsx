import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkout.css";
import "./checkout-header.css";
import { formatMoney } from "../utils/money";
import { BASE_URL } from "../Services/BaseUrl";
import dayjs from "dayjs";

const Checkout = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

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
          <div className="order-summary">
            {deliveryOptions.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find(
                  (deliveryOption) => {
                     return deliveryOption.id === cartItem.deliveryOptionId

                });

                const deliveryDate = dayjs()
                  .add(selectedDeliveryOption?.deliveryDays || 0, "day")
                  .format("dddd MMMM D");

                return (
                  <div
                    key={cartItem.productId}
                    className="cart-item-container"
                  >
                    <div className="delivery-date">Deliver Date: {deliveryDate}</div>

                    <div className="cart-item-details-grid">
                      <img
                        className="product-image"
                        src="images/products/athletic-cotton-socks-6-pairs.jpg"
                        alt={cartItem.product.name}
                      />

                      <div className="cart-item-details">
                        <div className="product-name">
                          {cartItem.product.name}
                        </div>
                        <div className="product-price">
                          {formatMoney(cartItem.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity:{" "}
                            <span className="quantity-label">
                              {cartItem.quantity || 1}
                            </span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>

                      {/* Delivery Options */}
                      <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>

                        {deliveryOptions.map((deliveryOption) => {
                          const optionDate = dayjs()
                            .add(deliveryOption.deliveryDays, "day")
                            .format("dddd, MMMM D");

                          const priceString =
                            deliveryOption.priceCents > 0
                              ? `${formatMoney(
                                  deliveryOption.priceCents
                                )} - Shipping`
                              : "FREE Shipping";

                          return (
                            <div
                              key={deliveryOption.id}
                              className="delivery-option"
                            >
                              <input
                                type="radio"
                                checked={
                                  deliveryOption.id ===
                                  cartItem.deliveryOptionId
                                }
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.productId}`}
                                readOnly
                              />
                              <div>
                                <div className="delivery-option-date">
                                  {optionDate}
                                </div>
                                <div className="delivery-option-price">
                                  {priceString}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Payment Summary */}
          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items ({cart.length}):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping & handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
