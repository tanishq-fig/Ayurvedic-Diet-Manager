import React, { useState } from 'react';

const DietAI = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    if (query.trim()) {
      setResponse(`AI Response: Based on Ayurvedic principles, here's a recommendation for "${query}". Consider eating fresh, seasonal foods and maintaining regular meal times.`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Diet AI Assistant</h2>
      <p>Ask our AI for personalized Ayurvedic diet recommendations</p>
      
      <div style={{ marginTop: '20px' }}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about diet recommendations, food combinations, or health concerns..."
          style={{ 
            width: '100%', 
            height: '100px', 
            padding: '10px', 
            borderRadius: '5px',
            border: '1px solid #ddd',
            fontSize: '14px'
          }}
        />
        <button 
          onClick={handleAsk}
          style={{ 
            marginTop: '10px', 
            padding: '10px 30px',
            background: '#43ea7a',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Get AI Recommendation
        </button>
      </div>

      {response && (
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          background: '#f5f5f5',
          borderRadius: '8px',
          borderLeft: '4px solid #43ea7a'
        }}>
          <h3>AI Recommendation:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default DietAI;
