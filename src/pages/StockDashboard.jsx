import { useEffect } from 'react';

function StockDashboard() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://10ax.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📈 Personal Stock Insight</h2>
        <p className="text-lg leading-relaxed mb-6">
          This is an end-to-end US stock analysis project. I extracted and processed stock data using Python,
          stored it in a cloud MySQL database, and created this interactive dashboard with Tableau.
          It features technical indicators, candlestick patterns, and dynamic filters for exploration.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <tableau-viz
            id="tableau-viz"
            src="https://10ax.online.tableau.com/t/ossof/views/Stock/Scoreboard"
            width="100%"
            height="800"
            hide-tabs
            toolbar="bottom"
          ></tableau-viz>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;