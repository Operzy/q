import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import VSLPage from './pages/VSLPage';
import OptinPage from './pages/OptinPage';
import BookingPage from './pages/BookingPage';
import CreditBookingPage from './pages/CreditBookingPage';
import QuizPage from './pages/QuizPage';

// A simple navigation component for you to easily hop between the two pages currently in development.
// This won't be seen by your customers if you share the specific links directly.
const DevNavigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-black/80 backdrop-blur-md text-white px-6 py-2 flex items-center justify-between border-b border-white/20 text-xs font-mono">
      <div className="font-bold tracking-widest text-[#4ade80]">DEV MODE NAVIGATION</div>
      <div className="flex gap-4">
        <Link to="/vsl" className="hover:text-[#4ade80] transition-colors">1. Main VSL Offer Page</Link>
        <Link to="/mini-course" className="hover:text-[#4ade80] transition-colors">2. Free Mini-Course Opt-In Page</Link>
        <Link to="/quiz" className="text-yellow-400 hover:text-white transition-colors border border-yellow-400/30 px-2 rounded bg-yellow-400/10">NEW: Lead Magnet Quiz</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* We are dropping the dev navigation bar in here so you can easily toggle between your funnels */}
      <DevNavigation />
      <div className="pt-8"> {/* Padding to offset the fixed dev nav */}
        <Routes>
          <Route path="/" element={<Navigate to="/vsl" replace />} />
          <Route path="/vsl" element={<VSLPage />} />
          <Route path="/mini-course" element={<OptinPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/credit-book" element={<CreditBookingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
