import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './components/Login';
import SignIn from './components/signin';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import FoodDatabase from './components/FoodDatabase';
import DietChartGenerator from './components/DietChartGenerator';
import PatientRecords from './components/PatientRecord';
import Reports from './components/Report';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import DietAI from './components/dietai';
import { ChatbotProvider } from './contexts/ChatbotContext';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showSignIn, setShowSignIn] = useState(true); // true: show SignIn, false: show Login

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <ChatbotProvider>
        <div>
        {showSignIn ? (
          <>
            <SignIn onLogin={handleLogin} />
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button
                onClick={() => setShowSignIn(false)}
                style={{
                  background: 'linear-gradient(135deg, #43ea7a, #00897b)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 28px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 4px 15px rgba(76,175,80,0.10)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(135deg, #00897b, #43ea7a)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(135deg, #43ea7a, #00897b)'}
              >
                Already have an account? Login
              </button>
            </div>
          </>
        ) : (
          <>
            <Login onLogin={handleLogin} />
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button
                onClick={() => setShowSignIn(true)}
                style={{
                  background: 'linear-gradient(135deg, #43ea7a, #00897b)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 28px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 4px 15px rgba(76,175,80,0.10)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(135deg, #00897b, #43ea7a)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(135deg, #43ea7a, #00897b)'}
              >
                New dietician? Sign Up
              </button>
            </div>
          </>
        )}
        </div>
      </ChatbotProvider>
    );
  }

  return (
    <ChatbotProvider>
      <Router>
      <div className="app">
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onLogout={handleLogout}
          user={user}
        />
        
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route 
                path="/dashboard" 
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Dashboard />
                  </motion.div>
                } 
              />
              <Route 
                path="/add-patient" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PatientForm />
                  </motion.div>
                } 
              />
              <Route 
                path="/patient-records" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PatientRecords />
                  </motion.div>
                } 
              />
              <Route 
                path="/food-database" 
                element={
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FoodDatabase />
                  </motion.div>
                } 
              />
                <Route
                  path="/diet-chart"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DietChartGenerator />
                    </motion.div>
                  }
                />
                <Route
                  path="/dietai"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DietAI />
                    </motion.div>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Reports />
                    </motion.div>
                  }
                />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Global Chatbot Component */}
        <Chatbot />
      </div>
    </Router>
    </ChatbotProvider>
  );
}

export default App;
