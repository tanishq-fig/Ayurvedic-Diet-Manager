import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Ayurvedic Diet Manager Dashboard</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Total Patients</h3>
          <p>0</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Diet Plans Created</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
