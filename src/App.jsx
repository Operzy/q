import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import VSLPage from './pages/VSLPage';
import OptinPage from './pages/OptinPage';
import BookingPage from './pages/BookingPage';
import CreditBookingPage from './pages/CreditBookingPage';
import QuizPage from './pages/QuizPage';
import ThankYouPage from './pages/ThankYouPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/vsl" replace />} />
        <Route path="/vsl" element={<VSLPage />} />
        <Route path="/mini-course" element={<OptinPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/credit-book" element={<CreditBookingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
