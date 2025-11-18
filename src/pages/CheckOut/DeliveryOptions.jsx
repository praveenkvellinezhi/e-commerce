import React from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { BASE_URL } from "../../Services/BaseUrl";

export function DeliveryOptions({ deliveryOptions, cartItem,loadCart }) {
  return (
    <div>
      <div className="delivery-options">
        <div className="delivery-options-title">Choose a delivery option:</div>

        {deliveryOptions.map((deliveryOption) => {
          const optionDate = dayjs()
            .add(deliveryOption.deliveryDays, "day")
            .format("dddd, MMMM D");

          const priceString =
            deliveryOption.priceCents > 0
              ? `${formatMoney(deliveryOption.priceCents)} - Shipping`
              : "FREE Shipping";


              const updateDeliveryOption= async()=>{
               await axios.put(`${BASE_URL}/api/cart-items/${cartItem.productId}`,{
                  deliveryOptionId: deliveryOption.id
                })
                await loadCart();

              }

          return (
            <div key={deliveryOption.id}  className="delivery-option" onClick={updateDeliveryOption}>
              <input
                type="radio"
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                onChange={()=>{}}
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`}
                readOnly
              />
              <div>
                <div className="delivery-option-date">{optionDate}</div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
