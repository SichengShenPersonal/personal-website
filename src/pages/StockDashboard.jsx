function StockDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📈 Stock Dashboard</h2>
        <p className="text-lg leading-relaxed mb-6">
          This is a live US stock dashboard built with Python, Dash, and Plotly.
          It allows interactive exploration of technical indicators and score trends.
        </p>

        <div className="w-full h-[80vh] rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="https://stockvis.sichengshenpersonal.com"
            className="w-full h-full"
            frameBorder="0"
            title="Stock Visualization Dashboard"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;