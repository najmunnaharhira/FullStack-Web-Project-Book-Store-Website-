import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDashboard = ({ userId }) => {
  const [browsingHistory, setBrowsingHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [browsingRes, recommendationsRes, wishlistRes] = await Promise.all([
          axios.get(`/api/browsing-history`, { params: { userId } }),
          axios.get(`/api/recommendations`, { params: { userId } }),
          axios.get(`/api/wishlist`, { params: { userId } })
        ]);

        setBrowsingHistory(browsingRes.data);
        setRecommendations(recommendationsRes.data);
        setWishlist(wishlistRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>

      <section>
        <h2>Browsing History</h2>
        {browsingHistory.length > 0 ? (
          <ul>
            {browsingHistory.map((book) => (
              <li key={book.id}>{book.bookTitle}</li>
            ))}
          </ul>
        ) : (
          <p>No browsing history found.</p>
        )}
      </section>

      <section>
        <h2>Recommendations</h2>
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((book) => (
              <li key={book.id}>{book.bookTitle}</li>
            ))}
          </ul>
        ) : (
          <p>No recommendations found.</p>
        )}
      </section>

      <section>
        <h2>Wishlist</h2>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((book) => (
              <li key={book.id}>{book.bookTitle}</li>
            ))}
          </ul>
        ) : (
          <p>No wishlist found.</p>
        )}
      </section>
    </div>
  );
};

export default UserDashboard;



