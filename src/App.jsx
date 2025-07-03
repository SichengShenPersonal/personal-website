import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import StockDashboard from './pages/StockDashboard';

export default function App() {
  return (
    <>
      <nav className="bg-gray-100 p-4 shadow-md">
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li><Link to="/projects" className="text-blue-600 hover:underline">Personal Projects</Link></li>
        </ul>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/stock" element={<StockDashboard />} />
        </Routes>
      </div>
    </>
  );
}