import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">📊 My Projects</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>Aging Report - Tableau dashboard for delivery performance</li>
        <li>Volume Report - Daily package volume tracking</li>
        <li>Data Validation Automation - Using Python + Tableau API</li>
        <li>
          <Link to="/projects/stock" className="text-blue-600 underline hover:text-blue-800">
            📈 Personal Stock Insight - End-to-End US stock analysis dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Projects;