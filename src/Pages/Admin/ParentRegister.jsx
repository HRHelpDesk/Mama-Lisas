import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import RegisterMenu from "./RegisterMenu";
const stripePromise = loadStripe('pk_test_51K49agG1vbBPoQdGCfPdytHc9OyliMvmJbqdH96aEbirAzwgNv8DWbetrre3lTZs5jLvpAli6syBaWV0yx40o7kz004OOJ4siR');

const ParentRegister= () => (
  
  <Elements stripe={stripePromise}  >
    <RegisterMenu />
  </Elements>
);
export default ParentRegister;


