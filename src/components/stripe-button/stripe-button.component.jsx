import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_uxmBs0aIgkLoSQxfxOmNwZAd';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
