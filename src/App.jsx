import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Feedback from './pages/Feedback';
import './index.css';

function App() {
  // Лаб 4: Темна тема за часом (21:00 - 06:00)
  useEffect(() => {
    const checkTime = () => {
      const hours = new Date().getHours();
      if (hours >= 21 || hours < 6) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };
    checkTime();
    const interval = setInterval(checkTime, 60000); // Перевірка щохвилини
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;