import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App