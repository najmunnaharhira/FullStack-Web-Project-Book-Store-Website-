import React, { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */

const Dashboard = () => {
  const [browsingHistory, setBrowsingHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [historyRes, recsRes, wishlistRes, cartRes, reviewsRes, tasksRes] = await Promise.all([
          fetch("http://localhost:5000/api/browsing-history"),
          fetch("http://localhost:5000/api/recommendations"),
          fetch("http://localhost:5000/api/wishlist"),
          fetch("http://localhost:5000/api/cart"),
          fetch("http://localhost:5000/api/reviews"),
          fetch("http://localhost:5000/api/daily-tasks"),
        ]);
        setBrowsingHistory(historyRes.ok ? await historyRes.json() : []);
        setRecommendations(recsRes.ok ? await recsRes.json() : []);
        setWishlist(wishlistRes.ok ? await wishlistRes.json() : []);
        setCartItems(cartRes.ok ? await cartRes.json() : []);
        setReviews(reviewsRes.ok ? await reviewsRes.json() : []);
        setDailyTasks(tasksRes.ok ? await tasksRes.json() : []);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setBrowsingHistory([]);
        setRecommendations([]);
        setWishlist([]);
        setCartItems([]);
        setReviews([]);
        setDailyTasks([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* User Profile Section */}
      <div className="bg-white rounded-3xl p-8 mb-5 shadow-lg">
        <h1 className="text-3xl font-bold mb-10">Your Profile</h1>
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://ui-avatars.com/api/?background=random&name=User+Name"
            alt="Profile"
          />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Browsing History Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Browsing History</h2>
          <ul className="space-y-4">
            {browsingHistory.map((book) => (
              <li key={book.id} className="border-b pb-2">{book.title}</li>
            ))}
          </ul>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
          <ul className="space-y-4">
            {recommendations.map((book) => (
              <li key={book.id} className="border-b pb-2">{book.title}</li>
            ))}
          </ul>
        </div>

        {/* Wishlist Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
          <ul className="space-y-4">
            {wishlist.map((book) => (
              <li key={book.id} className="border-b pb-2">{book.title}</li>
            ))}
          </ul>
        </div>

        {/* Cart Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border-b pb-2">{item.title}</li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <ul className="space-y-4">
            {reviews.map((review) => (
              <li key={review.id} className="border-b pb-2">{review.content}</li>
            ))}
          </ul>
        </div>

        {/* Daily Tasks Section */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
          <ul className="space-y-4">
            {dailyTasks.map((task) => (
              <li key={task.id} className="border-b pb-2">{task.description}</li>
            ))}
          </ul>
        </div>

        {/* Blog Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <p>Here you can chat and share posts or blogs with others.</p>
          {/* Add chat and blog post components here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
