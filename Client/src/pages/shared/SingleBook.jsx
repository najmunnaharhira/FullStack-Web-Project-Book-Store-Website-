import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";

function SingleBook() {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/cartItems",
        { book_id: id },
        { withCredentials: true } // Include this option if you are using cookies for authentication
      );
      alert("Book added to cart successfully!");
      // You can update the UI to reflect the change in cart count
    } catch (err) {
      console.error("Error adding book to cart:", err);
      alert("Failed to add book to cart.");
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/wishlist",
        { book_id: id },
        { withCredentials: true } // Include this option if you are using cookies for authentication
      );
      alert("Added to Wishlist successfully");
      // You can update the UI to reflect the change in wishlist items
    } catch (error) {
      console.error("Error adding to Wishlist:", error);
      alert("Failed to add to Wishlist.");
    }
  };

  const handleBuyNow = () => {
    // Navigate to checkout with selectedBooks and totalPayment state
    navigate("/checkout", {
      state: { selectedBooks: [book], totalPayment: book.price },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading book: {error.message}</div>;

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-blue-600 hover:underline mb-16 z-40">Book Details:{book.bookTitle}
      <p className="font-normal text-gray-700 dark:text-gray-400">
          Author: <span className="text-blue-600 hover:underline">{book.authorName || "Unknown"}</span>
        </p>
      </h2>
      <Card className="mx-auto max-w-2xl">
        <img
          src={book.imageURL}
          alt={book.bookTitle}
          className="h-96 w-full object-cover"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-600 hover:underline">{book.bookTitle}</span>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {book.bookDescription || "No description available."}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Author: <span className="text-blue-600 hover:underline">{book.authorName || "Unknown"}</span>
        </p>
        {book.pdfURL && (
          <a
            href={book.bookPDFURL}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read PDF
          </a>
        )}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Add to Wishlist
          </button>
          <button
            onClick={handleBuyNow}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Buy Now
          </button>
        </div>
      </Card>
    </div>
  );
}

export default SingleBook;
