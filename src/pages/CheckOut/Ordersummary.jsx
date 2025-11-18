import React from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import { PaymmentSummary } from './PaymmentSummary';
import { DeliveryOptions } from './DeliveryOptions';
import { BASE_URL } from '../../Services/BaseUrl';
export function Ordersummary({cart,deliveryOptions,loadCart}) {
  return (
    <div>
        <div className="order-summary">
                  {deliveryOptions.length > 0 &&
                    cart.map((cartItem) => {
                      const selectedDeliveryOption = deliveryOptions.find(
                        (deliveryOption) => {
                           return deliveryOption.id === cartItem.deliveryOptionId
      
                      });

                      const deleteCartItem = async() =>{
                       await  axios.delete(`${BASE_URL}/api/cart-items/${cartItem.productId}`);
                       await loadCart();


                      }
      
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
                              src={cartItem.product.image}
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
                                <span className="delete-quantity-link link-primary" 
                                onClick={deleteCartItem}>
                                  Delete
                                </span>
                              </div>
                            </div>
      
                            {/* Delivery Options */}
                           <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                          </div>
                        </div>
                      );
                    })}
                </div>
    </div>
  )
}
