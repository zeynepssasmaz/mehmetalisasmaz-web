import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Paneli</h2>
      <div className="admin-links">
        <Link to="/admin/projeler">📁 Proje Yönetimi</Link>
        <Link to="/admin/sss">❓ SSS Yönetimi</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

