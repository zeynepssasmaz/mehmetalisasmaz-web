import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
        <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>Dashboard</Link>
        <Link to="/projects" style={{ margin: "0 10px", color: "#fff" }}>Projeler</Link>
        <Link to="/faq" style={{ margin: "0 10px", color: "#fff" }}>SSS</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;

