import React, { useState } from 'react';

const FoodDatabase = () => {
  const [foods] = useState([
    { name: 'Rice', calories: 130, protein: 2.7, category: 'Grains' },
    { name: 'Lentils', calories: 116, protein: 9, category: 'Legumes' },
    { name: 'Spinach', calories: 23, protein: 2.9, category: 'Vegetables' }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Food Database</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Food</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Calories</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Protein (g)</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{food.name}</td>
              <td style={{ padding: '10px' }}>{food.calories}</td>
              <td style={{ padding: '10px' }}>{food.protein}</td>
              <td style={{ padding: '10px' }}>{food.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodDatabase;
