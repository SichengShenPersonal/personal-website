function StockDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📈 Personal Stock Insight</h2>
        <p className="text-lg leading-relaxed mb-6">
          This is an end-to-end US stock analysis project. I extracted and processed stock data using Python,
          stored it in a cloud MySQL database, and created this interactive dashboard with Tableau. It features
          technical indicators, candlestick patterns, and allows dynamic filtering for exploration.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="https://10ax.online.tableau.com/t/ossof/views/Stock/Scoreboard?:embed=y&:showVizHome=no"
            width="100%"
            height="800"
            frameBorder="0"
            allowFullScreen
            title="Tableau Stock Dashboard"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;