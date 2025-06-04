import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBooks = [] } = location.state || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("Cumilla");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [showReceipt, setShowReceipt] = useState(false); // State to control showing the receipt

  // Calculate total payment by summing up the book prices
  const totalPayment = selectedBooks.reduce((total, book) => total + book.discountedPrice , 0);
  const shippingCost = 57; // Example shipping cost
  const payableTotal = totalPayment + shippingCost;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookIds = selectedBooks.map((book) => book.id);
      await axios.post(
        (`${API_BASE_URL}//checkout`),
        {
          name,
          email,
          phone,
          shippingAddress,
          paymentMethod,
          payableTotal,
          bookIds,
        },
        { withCredentials: true }
      );
      setShowReceipt(true); // Show receipt after successful checkout
    } catch (err) {
      console.error("Error during checkout:", err);
      alert("Checkout failed. Please try again.");
    }
  };

  const styles = {
    checkoutContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh', // Full viewport height
      backgroundColor: '#f9f9f9',
      padding: '20px',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginRight: '20px',
      flex: 1,
    },
    summaryContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    formGroup: {
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '8px 0',
      boxSizing: 'border-box',
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    radioInput: {
      marginRight: '10px',
    },
    totalPayment: {
      marginTop: '20px',
    },
    checkoutActions: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      padding: '12px 20px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      outline: 'none',
    },
    confirmButton: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    backButton: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
  };

  if (showReceipt) {
    return (
      <div style={styles.checkoutContainer}>
        <div style={styles.formContainer}>
          <h2>Receipt</h2>
          <div>
            <h3>Payment Details:</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Shipping Address:</strong> {shippingAddress}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
            <p><strong>Total Payment:</strong> TK {payableTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.checkoutContainer}>
      <div style={styles.formContainer}>
        <h2>Checkout</h2>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="shippingAddress">Shipping Address</label>
            <select
              id="shippingAddress"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
              style={styles.input}
            >
              <option value="Cumilla">Cumilla</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Dhaka">Dhaka</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="paymentMethod">Payment Method</label>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radioInput}
              />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radioInput}
              />
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="bkash"
                name="paymentMethod"
                value="bKash"
                checked={paymentMethod === "bKash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radioInput}
              />
              <label htmlFor="bkash">bKash</label>
            </div>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="nagad"
                name="paymentMethod"
                value="Nagad"
                checked={paymentMethod === "Nagad"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radioInput}
              />
              <label htmlFor="nagad">Nagad</label>
            </div>
            <div style={styles.radioGroup}>
              <input
                type="radio"
                id="rocket"
                name="paymentMethod"
                value="Rocket"
                checked={paymentMethod === "Rocket"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                style={styles.radioInput}
              />
              <label htmlFor="rocket">Rocket</label>
            </div>
          </div>
          <div className="amount">
          <h3>Total Payment: TK {(Number(totalPayment) || 0).toFixed(2)}</h3>
        </div>
          <div style={styles.checkoutActions}>
            <button type="submit" style={{ ...styles.button, ...styles.confirmButton }}>Confirm Order</button>
            <button type="button" onClick={() => navigate("/cart")} style={{ ...styles.button, ...styles.backButton }}>
              Back to Cart
            </button>
          </div>
        </form>
      </div>
      <div style={styles.summaryContainer}>
        <h2>Checkout Summary</h2>
        <p>Subtotal: {totalPayment.toFixed(2)} TK</p>
        <p>Shipping: {shippingCost} TK</p>
        <p>Total: {payableTotal.toFixed(2)} TK</p>
        <hr />
        <p>You are saving 6%</p>
      </div>
    </div>
  );
};

export default CheckOutPage;
