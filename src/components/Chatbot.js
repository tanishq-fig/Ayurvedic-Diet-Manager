import React, { useState, useContext } from 'react';
import { ChatbotContext } from '../contexts/ChatbotContext';

const Chatbot = () => {
  const { chatbotState, sendMessage } = useContext(ChatbotContext);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      width: '300px', 
      height: '400px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ padding: '15px', background: '#43ea7a', color: 'white', borderRadius: '10px 10px 0 0' }}>
        <h3 style={{ margin: 0 }}>Diet Assistant</h3>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        {chatbotState.messages.map((msg) => (
          <div 
            key={msg.id} 
            style={{ 
              margin: '10px 0', 
              padding: '8px', 
              background: msg.type === 'user' ? '#e3f2fd' : '#f5f5f5',
              borderRadius: '5px',
              textAlign: msg.type === 'user' ? 'right' : 'left'
            }}
          >
            {msg.content}
          </div>
        ))}
        {chatbotState.isTyping && (
          <div style={{ padding: '8px', color: '#999', fontStyle: 'italic' }}>
            Typing...
          </div>
        )}
      </div>
      <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          style={{ width: 'calc(100% - 60px)', padding: '8px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <button onClick={handleSend} style={{ width: '50px', padding: '8px', marginLeft: '5px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
