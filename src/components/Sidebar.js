import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div style={{ 
      width: '250px', 
      background: '#2c3e50', 
      color: 'white', 
      minHeight: '100vh',
      padding: '20px',
      position: 'fixed',
      left: 0,
      top: 0
    }}>
      <h2 style={{ color: 'white' }}>Menu</h2>
      <nav style={{ marginTop: '30px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '15px 0' }}>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/patient-form" style={{ color: 'white', textDecoration: 'none' }}>Add Patient</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/patient-records" style={{ color: 'white', textDecoration: 'none' }}>Patient Records</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/food-database" style={{ color: 'white', textDecoration: 'none' }}>Food Database</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/diet-chart" style={{ color: 'white', textDecoration: 'none' }}>Diet Chart</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/reports" style={{ color: 'white', textDecoration: 'none' }}>Reports</Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/diet-ai" style={{ color: 'white', textDecoration: 'none' }}>Diet AI</Link>
          </li>
        </ul>
      </nav>
      <button 
        onClick={onLogout}
        style={{ 
          marginTop: '50px', 
          padding: '10px 20px', 
          background: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
