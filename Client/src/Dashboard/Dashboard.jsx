import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Now use API_BASE_URL in your fetch calls


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [browsingHistory, setBrowsingHistory] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [dailyTasks, setDailyTasks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const historyResponse = await fetch("http://localhost:5000/BrowsingHistory");
//       const historyData = await historyResponse.json();
//       setBrowsingHistory(historyData);

//       const recommendationsResponse = await fetch("http://localhost:5000/Recommendations");
//       const recommendationsData = await recommendationsResponse.json();
//       setRecommendations(recommendationsData);

//       const wishlistResponse = await fetch("http://localhost:5000/Wishlist");
//       const wishlistData = await wishlistResponse.json();
//       setWishlist(wishlistData);

//       const cartResponse = await fetch("http://localhost:5000/CartItems");
//       const cartData = await cartResponse.json();
//       setCartItems(cartData);

//       const reviewsResponse = await fetch("http://localhost:5000/api/reviews");
//       const reviewsData = await reviewsResponse.json();
//       setReviews(reviewsData);

//       const tasksResponse = await fetch("http://localhost:5000/api/daily-tasks");
//       const tasksData = await tasksResponse.json();
//       setDailyTasks(tasksData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       {/* User Profile Section */}
//       <div className="bg-white rounded-3xl p-8 mb-5 shadow-lg">
//         <h1 className="text-3xl font-bold mb-10">Your Profile</h1>
//         <div className="flex items-center gap-4">
//           <img
//             className="w-16 h-16 rounded-full"
//             src="https://ui-avatars.com/api/?background=random&name=User+Name"
//             alt="Profile"
//           />
//         </div>
//       </div>

//       {/* Dashboard Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Browsing History Section */}
//         <Link to="/history">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Browsing History</h2>
//             <ul className="space-y-4">
//               {browsingHistory.map((book) => (
//                 <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Recommendations Section */}
//         <Link to="/recommendations">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
//             <ul className="space-y-4">
//               {recommendations.map((book) => (
//                 <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Wishlist Section */}
//         <Link to="/wishlist">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
//             <ul className="space-y-4">
//               {wishlist.map((book) => (
//                 <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Cart Section */}
//         <Link to="/cart">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
//             <ul className="space-y-4">
//               {cartItems.map((item) => (
//                 <li key={item.id} className="border-b pb-2">{item.title}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Reviews Section */}
//         <Link to="/reviews">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//             <ul className="space-y-4">
//               {reviews.map((review) => (
//                 <li key={review.id} className="border-b pb-2">{review.content}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Daily Tasks Section */}
//         <Link to="/daily-tasks">
//           <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
//             <ul className="space-y-4">
//               {dailyTasks.map((task) => (
//                 <li key={task.id} className="border-b pb-2">{task.description}</li>
//               ))}
//             </ul>
//           </div>
//         </Link>

//         {/* Blog Section */}
//         <Link to="/blog">
//           <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
//             <h2 className="text-2xl font-bold mb-4">Blog</h2>
//             <p>Here you can chat and share posts or blogs with others.</p>
//             {/* Add chat and blog post components here */}
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



const Dashboard = () => {
  const [browsingHistory, setBrowsingHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [activityLog, setActivityLog] = useState([]); // Activity Log state

  useEffect(() => {
    const fetchData = async () => {
      const historyResponse = await fetch(`${API_BASE_URL}/BrowsingHistory`);
      const historyData = await historyResponse.json();
      setBrowsingHistory(historyData);
      const recommendationsResponse = await fetch(`${API_BASE_URL}/Recommendations`);

      const recommendationsData = await recommendationsResponse.json();
      setRecommendations(recommendationsData);

      const wishlistResponse = await fetch(`${API_BASE_URL}/Wishlist`);
      const wishlistData = await wishlistResponse.json();
      setWishlist(wishlistData);

      const cartResponse = await fetch(`${API_BASE_URL}/CartItems`);
      const cartData = await cartResponse.json();
      setCartItems(cartData);

      const reviewsResponse = await fetch(`${API_BASE_URL}/api/reviews`);
      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData);

      const tasksResponse = await fetch(`${API_BASE_URL}/api/daily-tasks`);
      const tasksData = await tasksResponse.json();
      setDailyTasks(tasksData);

      const activityLogResponse = await fetch(`${API_BASE_URL}/api/activity-log`); // Fetch activity log
      const activityLogData = await activityLogResponse.json();
      setActivityLog(activityLogData);
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
        {/* Activity Log Section */}
        <Link to="/activity-log">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
            <ul className="space-y-4">
              {activityLog.map((activity) => (
                <li key={activity.id} className="border-b pb-2">
                  {activity.description} - <span className="text-gray-500">{activity.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Browsing History Section */}
        <Link to="/history">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Browsing History</h2>
            <ul className="space-y-4">
              {browsingHistory.map((book) => (
                <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Recommendations Section */}
        <Link to="/recommendations">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            <ul className="space-y-4">
              {recommendations.map((book) => (
                <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Wishlist Section */}
        <Link to="/wishlist">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
            <ul className="space-y-4">
              {wishlist.map((book) => (
                <li key={book.id} className="border-b pb-2">{book.bookTitle}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Cart Section */}
        <Link to="/cart">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="border-b pb-2">{item.title}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Reviews Section */}
        <Link to="/reviews">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li key={review.id} className="border-b pb-2">{review.content}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Daily Tasks Section */}
        <Link to="/daily-tasks">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
            <ul className="space-y-4">
              {dailyTasks.map((task) => (
                <li key={task.id} className="border-b pb-2">{task.description}</li>
              ))}
            </ul>
          </div>
        </Link>

        {/* Blog Section */}
        <Link to="/blog">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-3xl shadow-lg hover:bg-gray-100 transition cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">Blog</h2>
            <p>Here you can chat and share posts or blogs with others.</p>
            {/* Add chat and blog post components here */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
