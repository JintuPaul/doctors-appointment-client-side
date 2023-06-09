import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing,  setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess('')
    setProcessing(true)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      })
      if(confirmError){
        setCardError(confirmError.message)
        return;
      }
      if(paymentIntent.status === 'succeeded'){
        const payment = {
          price, 
          transactionId: paymentIntent.id,
          email,
          bookingId: _id
        }
        fetch('http://localhost:5000/payments', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization : `bearer ${localStorage.getItem('accessToken')}` 
          },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setSuccess('congrats ! your payment completed')
            setTransactionId(paymentIntent.id)

          }
        })
      }

      if (paymentIntent.status === "succeeded") {
        // store payment info in the database
        const payment = {
            price,
            transactionId: paymentIntent.id,
            email,
            bookingId: _id
        }
        fetch('https://doctors-portal-server-rust.vercel.app/payments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Congrats! your payment completed');
                    setTransactionId(paymentIntent.id);
                }
            })
    }
      setProcessing(true)
      
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500 mt-4">{cardError}</p>
      <button
        className="btn btn-primary btn-sm my-6"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
    {
      success && <div>
        <p className=" font-bold text-sky-500">{success}</p>
        <p className="font-bold text-sky-500">your transaction Id: <span className=" font bold text-green-500">{transactionId}</span></p>
      </div>
    }
    </>
  );
};

export default CheckoutForm;
