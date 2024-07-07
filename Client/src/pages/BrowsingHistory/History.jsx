import React, { useState, useEffect } from 'react';

const BrowsingHistory = () => {
  const [browsingHistory, setBrowsingHistory] = useState([]);

  // Fetch browsing history from backend on component mount
  useEffect(() => {
    const fetchBrowsingHistory = async () => {
      try {
        const response = await fetch('http://localhost:5000/browsing-history'); // Replace with your backend endpoint
        if (response.ok) {
          const data = await response.json();
          setBrowsingHistory(data);
        } else {
          throw new Error('Failed to fetch browsing history');
        }
      } catch (error) {
        console.error('Error fetching browsing history:', error.message);
      }
    };
    fetchBrowsingHistory();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Your Browsing History</h1>

      {/* Display browsing history */}
      <div className="space-y-6">
        {browsingHistory.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{item.bookTitle}</h2>
            <p className="text-gray-800 mb-2">Author: {item.authorName}</p>
            <p className="text-gray-800 mb-2">Category: {item.category}</p>
            <p className="text-gray-800 mb-2">Viewed on: {new Date(item.viewedAt).toLocaleDateString()}</p>
            {/* Add more details as per your backend response */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsingHistory;
