import React from 'react'
import { formatMoney } from '../../utils/money'

export   function PaymmentSummary({paymentSummary,}) {
  return (
    <div>
           {/* Payment Summary */}
                <div className="payment-summary">
                  <div className="payment-summary-title">Payment Summary</div>
      
           <div className="payment-summary-row">
        <div>Items ({paymentSummary?.totalItems || 0}):</div>
        <div className="payment-summary-money">
          {formatMoney(paymentSummary?.productCostCents || 0)}
        </div>
      </div>
      
      
      {paymentSummary && (<> <div className="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div className="payment-summary-money">{formatMoney(paymentSummary?.shippingCostCents)}</div>
                  </div>
      
                  <div className="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div className="payment-summary-money"> {formatMoney(paymentSummary?.totalCostBeforeTaxCents || 0)}</div>
                  </div>
      
                  <div className="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div className="payment-summary-money">{formatMoney(paymentSummary?.taxCents)}</div>
                  </div>
      
                  <div className="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div className="payment-summary-money">{formatMoney(paymentSummary?.totalCostCents)}</div>
                  </div>
      
                  <button className="place-order-button button-primary">
                    Place your order
                  </button> </>)}
      
      
                 
                </div>
    </div>
  )
}
