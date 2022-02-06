import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KGu6rGxoBJ5ISDmvKDetWN0GZIq1PQVlqkdcBB6D76XoxeafOKO73KzKZF3nmXsMZC7ykbUmaOL8vCjh0rSJeVq00dicQrnF6';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.log('Payment error: ', error);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='SERVOS Clothing.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;