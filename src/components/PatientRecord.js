import React from 'react';

const PatientRecords = () => {
  const patients = [
    { id: 1, name: 'John Doe', age: 35, lastVisit: '2026-02-01' },
    { id: 2, name: 'Jane Smith', age: 28, lastVisit: '2026-02-05' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Patient Records</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{patient.id}</td>
              <td style={{ padding: '10px' }}>{patient.name}</td>
              <td style={{ padding: '10px' }}>{patient.age}</td>
              <td style={{ padding: '10px' }}>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRecords;
