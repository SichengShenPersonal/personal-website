import { useState } from "react";

function Stock() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold">📈 Stock</h2>

        {/* Summary (always visible) */}
        <p className="text-lg leading-relaxed">
          This project showcases my full ownership of a cloud-based analytics system—architected, built, and delivered with a real-world mindset. It reflects not only my technical command of Python, SQL, and BI tools, but also my ability to design scalable architecture, optimize data usability, and bridge cloud infrastructure with business-facing insights.
        </p>

        {/* Expandable Introduction Section */}
        <div>
          <button
            onClick={() => setShowIntro(!showIntro)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mb-4"
          >
            {showIntro ? "Hide Introduction" : "Show Introduction"}
          </button>

          {showIntro && (
            <div className="space-y-8 bg-white rounded-2xl p-6 shadow-md">
              {/* Introduction */}
              <section>
                <h3 className="text-2xl font-semibold mb-2">📘 Introduction</h3>
                <p className="leading-relaxed">
                  Built entirely on Azure, the system automatically fetches stock data from the Polygon API, processes it through structured, batch-based ETL pipelines using Airflow, stores it in a multi-layered MySQL database, and delivers insights via both Tableau and a custom Dash dashboard. Every decision—from modeling to visualization—was driven by performance, clarity, and long-term maintainability.
                </p>
              </section>

              {/* Key Highlights */}
              <section>
                <h3 className="text-2xl font-semibold mb-2">✨ Key Highlights</h3>
                <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                  <li><strong>Cloud-native architecture:</strong> Fully deployed on Azure with Airflow running on Virtual Machines and MySQL Flexible Server serving as the central data store, ensuring scalability and reliability.</li>
                  <li><strong>Structured, traceable ETL pipeline:</strong> Built around traditional batch processing with a clearly layered design—separating raw ingestion, transformation logic, and BI-ready modeling. Each stage is modular, logically scoped, and easily traceable, enabling full control, transparency, and fast issue tracking across the workflow.</li>
                  <li><strong>Dual visualization capabilities:</strong> Developed two parallel visualization solutions—one using Tableau to demonstrate proficiency in enterprise-grade BI tools and dashboard tuning, and the other using Dash to showcase my ability to build fully custom, code-driven visualizations integrated directly into a front-end application.</li>
                  <li><strong>Security & maintainability by design:</strong> Pipeline credentials are securely managed, code modules are cleanly separated, and the system is built for long-term extension, debugging, and operational transparency.</li>
                  <li><strong>Real-world execution mindset:</strong> From architecture to delivery, every design decision reflects the practical trade-offs and constraints of real-world data work—balancing performance, usability, scalability, and maintainability. Challenges encountered during development were met with systematic debugging, solution testing, and thoughtful iteration.</li>
                </ul>
              </section>

              {/* Tools & Stack */}
              <section>
                <h3 className="text-2xl font-semibold mb-2">🛠️ Tools & Stack</h3>
                <div className="text-base leading-relaxed space-y-4">
                  <div>
                    <p><strong>Python</strong></p>
                    <p className="ml-4">Core development language for all ETL and visualization logic. Key packages used:</p>
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
                      <li>Virtual Machine (Linux): Hosts Apache Airflow scheduler and ETL scripts</li>
                      <li>MySQL Flexible Server: Stores raw, processed, and BI-modeled stock data</li>
                      <li>Static Web Apps: Hosts personal portfolio site and Dash dashboard frontend</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Apache Airflow</strong></p>
                    <p className="ml-4">Manages scheduled ETL workflows on the Azure VM, with support for MySQL hooks, HTTP requests, and modular DAGs.</p>
                  </div>
                  <div>
                    <p><strong>Tableau</strong></p>
                    <p className="ml-4">Connects to the BI data layer to deliver interactive, enterprise-style dashboards for stock monitoring and comparison.</p>
                  </div>
                  <div>
                    <p><strong>Git & GitHub</strong></p>
                    <p className="ml-4">Version control for all scripts, DAGs, and dashboard code. Project is fully modular and source tracked.</p>
                  </div>
                  <div>
                    <p><strong>Shell / Bash / Linux CLI</strong></p>
                    <p className="ml-4">Used for environment setup, Airflow deployment, script scheduling, and log management on the Azure VM.</p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stock;
