// src/App.js
// import { LanguageProvider, LanguageSwitcher } from '@prototyp/react-language-switcher';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import OTPPage from './Components/OTPPage';
import './index.css'; // Make sure to import Tailwind CSS
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otpvarification" element={<OTPPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
    
  );
  
};

export default App;
