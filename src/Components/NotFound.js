// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-9xl font-bold mb-4 animate-bounce">404</div>
      <div className="text-xl mb-4">Oops! Page not found.</div>
      <div className="w-24 h-24 bg-blue-500 rounded-full animate-spin mb-6"></div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;