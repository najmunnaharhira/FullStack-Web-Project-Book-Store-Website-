import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch personalized recommendations based on wishlist, cart items, search history, and browsing history
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/recommendations'); // Replace with your API endpoint
        setRecommendations(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <p>Loading recommendations...</p>;
  }

  return (
    <div className="recommendations-container my-16">
      <h2 className="title text-4xl font-bold text-green-700 hover:text-green-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">
        Personalized Recommendations
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {recommendations.length > 0 ? (
          recommendations.map((book) => (
            <div
              key={book.id}
              className="book-card shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Link to={`/book/${book.id}`}>
                <img src={book.imageURL} alt={book.title} className="mx-auto" />
                <h5 className="pt-3 font-semibold text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  {book.bookTitle}
                </h5>
                <p className="text-black text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  {book.authorName}
                </p>
                <p className="text-black text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  {book.category}
                </p>
                <p className="text-black text-secondary transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  {book.price} tk
                </p>
              </Link>
              <button className="bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-green-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No recommendations available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
