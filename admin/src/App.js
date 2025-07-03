import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import BuildingUpload from './pages/BuildingUpload';
import FaqAdmin from './pages/FaqAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projeler" element={<BuildingUpload />} />
        <Route path="/admin/sss" element={<FaqAdmin />} />
       
      </Routes>
    </Router>
  );
}

export default App;

