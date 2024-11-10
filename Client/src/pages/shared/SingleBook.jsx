import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Card } from "flowbite-react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";

// function SingleBook() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user, loading: authLoading } = useContext(AuthContext); // Access user info and loading state
//   const [book, setBook] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/book/${id}`);
//         setBook(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   const handleAddToCart = async () => {
//     if (!user) {
//       alert("Please log in to add items to your cart.");
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "http://localhost:5000/cartItems",
//         { user_id: user.id, book_id: id },
//         { withCredentials: true }
//       );
//       alert("Book added to cart successfully!");
//     } catch (err) {
//       console.error("Error adding book to cart:", err);
//       alert("Failed to add book to cart.");
//     }
//   };

//   const handleAddToWishlist = async () => {
//     if (!user) {
//       alert("Please log in to add items to your wishlist.");
//       navigate("/login");
//       return;
//     }
//     try {
//       await axios.post(
//         "http://localhost:5000/wishlist",
//         { user_id: user.id, book_id: id },
//         { withCredentials: true }
//       );
//       alert("Added to Wishlist successfully");
//     } catch (err) {
//       console.error("Error adding to Wishlist:", err);
//       alert("Failed to add to Wishlist.");
//     }
//   };

//   const handleBuyNow = () => {
//     if (book) {
//       navigate("/checkout", {
//         state: { selectedBooks: [book], totalPayment: book.price },
//       });
//     }
//   };

//   if (loading || authLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading book: {error.message}</div>;
//   if (!book) return <div>Sorry, we couldn’t find the page you’re looking for.</div>;

//   return (
//     <div className="my-28 px-4 lg:px-24">
//       <h2 className="text-3xl font-bold text-center text-blue-600 hover:underline mb-16 z-40">
//         Book Details: {book.bookTitle}
//       </h2>
//       <Card className="mx-auto max-w-2xl">
//         <img
//           src={book.imageURL}
//           alt={book.bookTitle}
//           className="h-96 w-full object-cover"
//         />
//         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           <span className="text-blue-600 hover:underline">{book.bookTitle}</span>
//         </h5>
//         <p className="font-normal text-gray-700 dark:text-gray-400">
//           {book.bookDescription || "No description available."}
//         </p>
//         <p className="font-normal text-gray-700 dark:text-gray-400">
//           Author: <span className="text-blue-600 hover:underline">{book.authorName || "Unknown"}</span>
//         </p>
//         {book.pdfURL && (
//           <a
//             href={book.bookPDFURL}
//             className="text-blue-600 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read PDF
//           </a>
//         )}
//         <div className="mt-4 flex justify-between">
//           <button
//             onClick={handleAddToCart}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//           >
//             Add to Cart
//           </button>
//           <button
//             onClick={handleAddToWishlist}
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//           >
//             Add to Wishlist
//           </button>
//           <button
//             onClick={handleBuyNow}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
//           >
//             Buy Now
//           </button>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default SingleBook



function SingleBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useContext(AuthContext); // Access user info and loading state
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(""); // State to store success messages

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5000/cartItems",
        { user_id: user.id, book_id: id },
        { withCredentials: true }
      );
      setSuccessMessage("Book added to cart successfully!"); // Set success message for Add to Cart
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
    } catch (err) {
      console.error("Error adding book to cart:", err);
      alert("Failed to add book to cart.");
    }
  };

  const handleAddToWishlist = async () => {
    if (!user) {
      alert("Please log in to add items to your wishlist.");
      navigate("/login");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5000/wishlist",
        { user_id: user.id, book_id: id },
        { withCredentials: true }
      );
      setSuccessMessage("Added to Wishlist successfully!"); // Set success message for Add to Wishlist
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
    } catch (err) {
      console.error("Error adding to Wishlist:", err);
      alert("Failed to add to Wishlist.");
    }
  };

  const handleBuyNow = () => {
    if (book) {
      navigate("/checkout", {
        state: { selectedBooks: [book], totalPayment: book.price },
      });
    }
  };

  if (loading || authLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading book: {error.message}</div>;
  if (!book) return <div>Sorry, we couldn’t find the page you’re looking for.</div>;

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-blue-600 hover:underline mb-16 z-40">
        Book Details: {book.bookTitle}
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
        {successMessage && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            {successMessage}
          </div>
        )}
      </Card>
    </div>
  );
}

export default SingleBook;
