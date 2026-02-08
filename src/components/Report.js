import React from 'react';

const Reports = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Reports</h2>
      <div style={{ marginTop: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Monthly Statistics</h3>
          <p>Total Patients: 45</p>
          <p>New Patients: 12</p>
          <p>Diet Plans Generated: 38</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Popular Diet Plans</h3>
          <ul>
            <li>Weight Loss Plan - 15 patients</li>
            <li>Diabetes Management - 12 patients</li>
            <li>General Wellness - 18 patients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
