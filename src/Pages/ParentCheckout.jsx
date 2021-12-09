import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from './Checkout.jsx'
const stripePromise = loadStripe('pk_test_51K49agG1vbBPoQdGCfPdytHc9OyliMvmJbqdH96aEbirAzwgNv8DWbetrre3lTZs5jLvpAli6syBaWV0yx40o7kz004OOJ4siR');

const ParentCheckout= () => (
  
  <Elements stripe={stripePromise}  >
    <Checkout />
  </Elements>
);
export default ParentCheckout;


