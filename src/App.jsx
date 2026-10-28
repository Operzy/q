import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { loadMetaPixel, isPixelExcluded } from './lib/metaPixel';
import VSLPage from './pages/VSLPage';
import OptinPage from './pages/OptinPage';
import BookingPage from './pages/BookingPage';
import CreditBookingPage from './pages/CreditBookingPage';
import QuizPage from './pages/QuizPage';
import ThankYouPage from './pages/ThankYouPage';
import BookedPage from './pages/BookedPage';
import CreditBookedPage from './pages/CreditBookedPage';

// Loads the Meta Pixel once, unless the first page viewed is an excluded route.
const MetaPixel = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isPixelExcluded(pathname)) loadMetaPixel();
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <MetaPixel />
      <Routes>
        <Route path="/" element={<Navigate to="/vsl" replace />} />
        <Route path="/vsl" element={<VSLPage />} />
        <Route path="/mini-course" element={<OptinPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/credit-book" element={<CreditBookingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/booked" element={<BookedPage />} />
        <Route path="/credit-booked" element={<CreditBookedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
