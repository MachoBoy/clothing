import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_uxmBs0aIgkLoSQxfxOmNwZAd';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('payment successful', response);
      })
      .catch((error) => {
        console.log('payment error', JSON.parse(error));
        alert('There was an issue');
      });
  };
  return (
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
  );
};

export default StripeCheckoutButton;
