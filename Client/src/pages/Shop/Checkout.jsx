import PaymentForm from "./PaymentForm";
import React, { useState } from "react";

const Checkout = () => {
  const [checkoutToken, setCheckoutToken] = useState(null); // State for holding checkout token
  const [shippingData, setShippingData] = useState({}); // State for holding shipping data
  const [activeStep, setActiveStep] = useState(0); // State for managing active step in checkout

  // Function to fetch checkout token from backend API
  const fetchCheckoutToken = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkout/token');
      if (!response.ok) {
        throw new Error('Failed to fetch checkout token');
      }
      const data = await response.json();
      setCheckoutToken(data.token); // Assuming your API returns a 'token' field
      nextStep(); // Proceed to the next step after fetching token
    } catch (error) {
      console.error('Error fetching checkout token:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  // Function to handle capture checkout logic (e.g., API call to backend)
  const handleCaptureCheckout = async (tokenId, newOrder) => {
    try {
      const response = await fetch('http://localhost:5000/api/checkout/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId,
          order: newOrder,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to capture checkout');
      }
      const data = await response.json();
      console.log('Capture Checkout:', data);
      // Handle success response (e.g., update UI, show confirmation)
    } catch (error) {
      console.error('Error capturing checkout:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  // Function to proceed to the next step
  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);

  // Function to go back to the previous step
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">Checkout</h2>
      {activeStep === 0 && (
        <div>
          {/* Replace with your shipping form component */}
          <button onClick={fetchCheckoutToken} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Proceed to Payment
          </button>
        </div>
      )}
      {activeStep === 1 && checkoutToken && (
        <PaymentForm
          checkoutToken={checkoutToken} // Pass checkout token to PaymentForm
          nextStep={nextStep} // Pass nextStep function to PaymentForm
          backStep={backStep} // Pass backStep function to PaymentForm
          shippingData={shippingData} // Pass shipping data to PaymentForm
          onCaptureCheckout={handleCaptureCheckout} // Pass capture checkout handler to PaymentForm
        />
      )}
    </div>
  );
};

export default Checkout;
