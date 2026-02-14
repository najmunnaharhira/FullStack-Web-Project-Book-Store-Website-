import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";

const UserDashboard = ({ userId: userIdProp }) => {
  const { user: authUser } = useContext(AuthContext);
  const userId = userIdProp ?? authUser?.uid ?? null;
  const [browsingHistory, setBrowsingHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);

        const [browsingRes, recommendationsRes, wishlistRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/browsing-history`, { params: { userId } }),
          axios.get(`http://localhost:5000/api/recommendations`, { params: { userId } }),
          axios.get(`http://localhost:5000/api/wishlist`, { params: { userId } })
        ]);

        setBrowsingHistory(Array.isArray(browsingRes.data) ? browsingRes.data : []);
        setRecommendations(Array.isArray(recommendationsRes.data) ? recommendationsRes.data : []);
        setWishlist(Array.isArray(wishlistRes.data) ? wishlistRes.data : []);
      } catch (err) {
        setError(err.message);
        setBrowsingHistory([]);
        setRecommendations([]);
        setWishlist([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!userId) {
    return <div className="p-8">Please log in to see your dashboard.</div>;
  }

  if (error) {
    return <div className="p-8">Error loading data: {error}</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      <section>
        <h2>Browsing History</h2>
        {browsingHistory.length > 0 ? (
          <ul>
            {browsingHistory.map((book) => (
              <li key={book.id}>{book.title ?? book.bookTitle ?? "Untitled"}</li>
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
              <li key={book.id}>{book.title ?? book.bookTitle ?? "Untitled"}</li>
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
              <li key={book.id}>{book.title ?? book.bookTitle ?? "Untitled"}</li>
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



