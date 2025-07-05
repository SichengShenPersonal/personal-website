import { useState } from "react";

function Stock() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-8 sm:px-12 lg:px-32 py-14 text-gray-800">
      {/* ✅ 导航栏 */}
      <nav className="flex gap-8 mb-12 text-blue-700 text-lg font-medium">
        <a href="/" className="hover:underline">Home</a>
        <a href="/projects" className="hover:underline">Personal Projects</a>
      </nav>

      {/* ✅ 内容区域 */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">📈 Stock</h2>
        <p className="text-lg leading-relaxed mb-8">
          This project showcases my full ownership of a cloud-based analytics system—architected, built, and delivered with a real-world mindset. It reflects not only my technical command of Python, SQL, and BI tools, but also my ability to design scalable architecture, optimize data usability, and bridge cloud infrastructure with business-facing insights.
        </p>

        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
          {/* Introduction Toggle */}
          <div>
            <button
              onClick={() => setShowIntro(!showIntro)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mb-4"
            >
              {showIntro ? "Hide Introduction" : "Show Introduction"}
            </button>

            {showIntro && (
              <div className="space-y-6">
                {/* 📘 Introduction */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2 border-b pb-1">📘 Introduction</h3>
                  <p className="leading-relaxed">
                    Built entirely on Azure, the system automatically fetches stock data from the Polygon API, processes it through structured, batch-based ETL pipelines using Airflow, stores it in a multi-layered MySQL database, and delivers insights via both Tableau and a custom Dash dashboard. Every decision—from modeling to visualization—was driven by performance, clarity, and long-term maintainability.
                  </p>
                </section>

                {/* ✨ Highlights */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2 border-b pb-1">✨ Key Highlights</h3>
                  <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                    <li><strong>Cloud-native architecture:</strong> Fully deployed on Azure with Airflow running on Virtual Machines and MySQL Flexible Server serving as the central data store, ensuring scalability and reliability.</li>
                    <li><strong>Structured, traceable ETL pipeline:</strong> Built around traditional batch processing with a clearly layered design—separating raw ingestion, transformation logic, and BI-ready modeling.</li>
                    <li><strong>Dual visualization capabilities:</strong> Tableau for enterprise-grade BI, Dash for custom code-driven insights.</li>
                    <li><strong>Security & maintainability by design:</strong> Clean code separation, secure credentials, scalable setup.</li>
                    <li><strong>Real-world execution mindset:</strong> Practical design trade-offs, systematic debugging, and thoughtful iteration.</li>
                  </ul>
                </section>

                {/* 🛠 Tools & Stack */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2 border-b pb-1">🛠️ Tools & Stack</h3>
                  <div className="text-base leading-relaxed space-y-4">
                    <div>
                      <p><strong>Python</strong></p>
                      <ul className="list-disc ml-8">
                        <li>pandas / numpy: Data transformation and calculation</li>
                        <li>sqlalchemy / pymysql: Read/write operations with MySQL</li>
                        <li>requests: API integration with Polygon</li>
                        <li>dash, plotly: Custom-built interactive dashboard</li>
                        <li>datetime, os, logging, tqdm: Workflow control and monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Polygon.io API</strong></p>
                      <p className="ml-4">Real-time and historical stock data source, delivering OHLCV data by ticker.</p>
                    </div>
                    <div>
                      <p><strong>Azure Services</strong></p>
                      <ul className="list-disc ml-8">
                        <li>VM (Linux): Hosts Apache Airflow scheduler and ETL scripts</li>
                        <li>MySQL Flexible Server: Stores raw, processed, and BI-modeled stock data</li>
                        <li>Static Web Apps: Hosts personal portfolio site and Dash dashboard frontend</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Apache Airflow</strong></p>
                      <p className="ml-4">Handles scheduled ETL workflows with MySQL hooks, HTTP requests, and modular DAGs.</p>
                    </div>
                    <div>
                      <p><strong>Tableau</strong></p>
                      <p className="ml-4">Connects to the BI data layer to deliver interactive dashboards.</p>
                    </div>
                    <div>
                      <p><strong>Git & GitHub</strong></p>
                      <p className="ml-4">Full version control for all scripts, DAGs, and dashboards.</p>
                    </div>
                    <div>
                      <p><strong>Shell / Bash / Linux CLI</strong></p>
                      <p className="ml-4">Used for environment setup, deployment, and log management.</p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;
