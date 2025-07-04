import React from 'react';

function StockDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Personal Stock Dashboard</h2>
        <p className="text-lg leading-relaxed mb-8 text-center">
          This project analyzes U.S. stock data using Python and SQL, stores the results in a cloud database,
          and visualizes them through a custom-built Dash app. Explore scores, trends, and technical charts interactively.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="http://172.172.177.103:8050/"
            title="Stock Dashboard"
            width="100%"
            height="800"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;
