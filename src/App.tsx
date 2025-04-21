import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GuestPage from './pages/GuestPage';
import HostPage from './pages/HostPage';
import RegionPage from './pages/RegionPage';
import HostProfilePage from './pages/HostProfilePage';
import HostDashboardPage from './pages/HostDashboardPage';
import BookingPage from './pages/BookingPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="/region/:regionId" element={<RegionPage />} />
        <Route path="/host/:hostId" element={<HostProfilePage />} />
        <Route path="/dashboard/:hostId?" element={<HostDashboardPage />} />
        <Route path="/booking/:hostId" element={<BookingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;