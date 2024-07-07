import "../styles/Reciept.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Reciept = ({ recieptData }) => {
  const {
    email,
    phone,
    shippingAddress,
    paymentMethod,
    totalPayment,
    selectedBooks,
  } = recieptData;

  const [booksWithTitles, setBooksWithTitles] = useState([]);

  useEffect(() => {
    const fetchBookTitles = async () => {
      try {
        const bookIds = selectedBooks.map((book) => book.id);
        const responses = await Promise.all(
          bookIds.map((id) =>
            axios.get(`http://localhost:5000/book/${id}`)
          )
        );
        const booksWithTitles = responses.map((response) => response.data);
        setBooksWithTitles(booksWithTitles);
      } catch (error) {
        console.error("Error fetching book titles:", error);
      }
    };

    fetchBookTitles();
  }, [selectedBooks]);

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <div className="receipt-details">
        <h3>Order Details:</h3>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Mobile Number:</strong> {phone}
        </p>
        <p>
          <strong>Shipping Address:</strong> {shippingAddress}
        </p>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
        <h3>Selected Books:</h3>
        <ul>
          {booksWithTitles.map((book, index) => (
            <li key={index}>
              <div>
                <strong>Title:</strong> {book.book_title}
              </div>
              <div>
                <strong>Price:</strong> TK{" "}
                {selectedBooks[index].price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        <div className="total-payment">
          <h3>Total Payment: TK {totalPayment.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Reciept;