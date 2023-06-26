import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import "./payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation()
  const { appointmentDate, slot, price, treatment } = booking;
  if(navigation.state === 'loading'){
    return <Loading/>
  }
  return (
    <div>
      <div className="payment-bg">
        <h2 className="text-3xl font-semibold text-white">
          payment for {treatment}
        </h2>
      </div>
      <p className="text-lg font-normal my-8">
        please pay <strong>${price} </strong>for your appointment <br /> on {slot} at{" "}
        {appointmentDate}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            booking={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
