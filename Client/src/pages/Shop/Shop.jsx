import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Shop() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, [loading]);

  // Handle Buy Now Click
  const handleBuyNow = (bookId) => {
    // Navigate to single book page
    // For now, we'll simulate navigation to `/book/{bookId}`
    console.log(`Navigating to /book/${bookId}`);
  };

  // Handle Add to Cart Click
  const handleAddToCart = (bookId) => {
    // Find the selected book
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
      // Add to cart functionality
      setCart(prevCart => [...prevCart, selectedBook]);
      console.log(`Added book with ID ${bookId} to cart`);

      // Show success message
      alert("Book added to cart successfully!");
    }
  };

  // Handle Add to Wishlist Click
  const handleAddToWishlist = () => {
    // Show wishlist confirmation
    alert("Book added to wishlist successfully!");
  };

  // Loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">All Books are Available Here</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {books.map((book) => (
          <Card key={book.id}>
            <img src={book.imageURL} alt={book.bookTitle} className="h-96 w-full object-cover" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription || "No description available."}
            </p>
            <div className="flex justify-between mt-4">
              <Link to={`/book/${book.id}`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleBuyNow(book.id)}>
                  Buy Now
                </button>
              </Link>
              <button className="px-4 py-2 bg-green-600 text-white rounded ml-2" onClick={() => handleAddToCart(book.id)}>
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded ml-2" onClick={handleAddToWishlist}>
                Add to Wishlist
              </button>
            </div>
          </Card>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8 text-center">
          <Link to="/cart">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">View Cart ({cart.length})</button>
          </Link>
        </div>
      )}
    </div>
  );
}
