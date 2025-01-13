import React, { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';

const PersonalWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ParticleBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>

      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>© 2024 Michelle Weon • CS 50 Homepage</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
