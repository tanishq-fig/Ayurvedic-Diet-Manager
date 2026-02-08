import React, { useState } from 'react';

const DietChartGenerator = () => {
  const [patientId, setPatientId] = useState('');
  const [dietChart, setDietChart] = useState(null);

  const generateDiet = () => {
    setDietChart({
      breakfast: 'Oatmeal with fruits',
      lunch: 'Dal and Rice with vegetables',
      dinner: 'Khichdi with yogurt',
      snacks: 'Nuts and herbal tea'
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Diet Chart Generator</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        style={{ padding: '10px', margin: '10px 0', width: '300px' }}
      />
      <button onClick={generateDiet} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Generate Diet Chart
      </button>
      
      {dietChart && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Recommended Diet Plan</h3>
          <p><strong>Breakfast:</strong> {dietChart.breakfast}</p>
          <p><strong>Lunch:</strong> {dietChart.lunch}</p>
          <p><strong>Dinner:</strong> {dietChart.dinner}</p>
          <p><strong>Snacks:</strong> {dietChart.snacks}</p>
        </div>
      )}
    </div>
  );
};

export default DietChartGenerator;
