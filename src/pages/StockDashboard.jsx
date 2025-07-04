import { useEffect } from 'react';

function StockDashboard() {
  useEffect(() => {
    const loadTableau = async () => {
      // 加载 Tableau embedding 脚本
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://10ax.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
      script.async = true;
      document.body.appendChild(script);

      // 等待脚本加载完成
      script.onload = async () => {
        try {
          // 获取 token
          const res = await fetch('https://token.sichengshenpersonal.com/generate-token', {
            credentials: 'include',
          });
          const data = await res.json();

          // 构建 tableau-viz 元素
          const viz = document.createElement('tableau-viz');
          viz.setAttribute('id', 'tableau-viz');
          viz.setAttribute('src', 'https://10ax.online.tableau.com/t/ossof/views/Stock/Scoreboard');
          viz.setAttribute('width', '100%');
          viz.setAttribute('height', '800');
          viz.setAttribute('toolbar', 'bottom');
          viz.setAttribute('hide-tabs', '');
          viz.setAttribute('auth-type', 'custom');         // ✅ 启用自定义 token 模式
          viz.setAttribute('token', data.token);           // ✅ 正确传入 token

          // 插入 DOM
          const container = document.getElementById('tableau-container');
          container.innerHTML = '';
          container.appendChild(viz);
        } catch (err) {
          console.error('加载 Tableau 报表失败：', err);
        }
      };
    };

    loadTableau();
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

        <div
          id="tableau-container"
          className="rounded-lg overflow-hidden shadow-lg border border-gray-300"
        >
          {/* Tableau 报表将动态插入到这里 */}
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;
