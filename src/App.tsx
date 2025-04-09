import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { AboutUPSC } from './pages/AboutUPSC';
import { LearningHub } from './pages/LearningHub';
import { NewsAndEvents } from './pages/NewsAndEvents';
import { Contact } from './pages/Contact';
import { ScholarshipLanding } from './pages/ScholarshipLanding';
export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about-upsc" element={<AboutUPSC />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/news-events" element={<NewsAndEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scholarship" element={<ScholarshipLanding />} />
        </Routes>
        <Footer />
      </div>
    </Router>;
}