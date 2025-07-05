import { useState } from "react";

function StockDashboard() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">📈 Stock Dashboard</h2>

        {/* Summary (always shown) */}
        <p className="text-lg leading-relaxed mb-6">
          This project showcases my full ownership of a cloud-based analytics system—architected, built, and delivered with a real-world mindset. It reflects not only my technical command of Python, SQL, and BI tools, but also my ability to design scalable architecture, optimize data usability, and bridge cloud infrastructure with business-facing insights.
        </p>

        {/* Expandable Introduction Section */}
        <div className="mb-6">
          <button
            onClick={() => setShowIntro(!showIntro)}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            {showIntro ? "Hide Introduction" : "Show Introduction"}
          </button>

          {showIntro && (
            <div className="mt-4 bg-white rounded-xl shadow p-6 space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p>
                  Built entirely on Azure, the system automatically fetches stock data from the Polygon API, processes it through structured, batch-based ETL pipelines using Airflow, stores it in a multi-layered MySQL database, and delivers insights via both Tableau and a custom Dash dashboard. Every decision—from modeling to visualization—was driven by performance, clarity, and long-term maintainability.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cloud-native architecture:</strong> 
Fully deployed on Azure with Airflow running on Virtual Machines and MySQL Flexible Server serving as the central data store, ensuring scalability and reliability.</li>

                  <li><strong>Structured, traceable ETL pipeline:</strong> 
Built around traditional batch processing with a clearly layered design—separating raw ingestion, transformation logic, and BI-ready modeling. Each stage is modular, logically scoped, and easily traceable, enabling full control, transparency, and fast issue tracking across the workflow.</li>

                  <li><strong>Dual visualization capabilities:</strong> 
Developed two parallel visualization solutions—one using Tableau to demonstrate proficiency in enterprise-grade BI tools and dashboard tuning, and the other using Dash to showcase my ability to build fully custom, code-driven visualizations integrated directly into a front-end application.</li>

                  <li><strong>Security & maintainability by design:</strong> 
Pipeline credentials are securely managed, code modules are cleanly separated, and the system is built for long-term extension, debugging, and operational transparency.</li>

                  <li><strong>Real-world execution mindset:</strong> 
From architecture to delivery, every design decision reflects the practical trade-offs and constraints of real-world data work—balancing performance, usability, scalability, and maintainability. Challenges encountered during development were met with systematic debugging, solution testing, and thoughtful iteration.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2">Tools & Stack</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Python</strong>
Core development language for all ETL and visualization logic. Key packages used:
 pandas / numpy: Data transformation and calculation
 sqlalchemy / pymysql: Read/write operations with MySQL
 requests: API integration with Polygon
 dash, plotly: Custom-built interactive dashboard
 datetime, os, logging, tqdm: Workflow control and monitoring</li>

                  <li><strong>Polygon.io API</strong>
Real-time and historical stock data source, delivering OHLCV data by ticker.</li>

                  <li><strong>Azure Services</strong>
 Virtual Machine (Linux): Hosts Apache Airflow scheduler and ETL scripts
 MySQL Flexible Server: Stores raw, processed, and BI-modeled stock data
 Static Web Apps: Hosts personal portfolio site and Dash dashboard frontend</li>

                  <li><strong>Apache Airflow</strong>
Manages scheduled ETL workflows on the Azure VM, with support for MySQL hooks, HTTP requests, and modular DAGs.</li>

                  <li><strong>Tableau</strong>
Connects to the BI data layer to deliver interactive, enterprise-style dashboards for stock monitoring and comparison.</li>

                  <li><strong>Git & GitHub</strong>
Version control for all scripts, DAGs, and dashboard code. Project is fully modular and source tracked.</li>

                  <li><strong>Shell / Bash / Linux CLI</strong>
Used for environment setup, Airflow deployment, script scheduling, and log management on the Azure VM.</li>
                </ul>
              </section>
            </div>
          )}
        </div>

        {/* Embedded Live Dashboard */}
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
