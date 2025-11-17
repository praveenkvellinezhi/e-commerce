import React from 'react'
import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';

export  function DeliveryOptions({deliveryOptions,cartItem}) {
  return (
    <div>
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
  )
}
