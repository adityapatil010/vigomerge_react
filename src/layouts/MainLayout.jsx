import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with padding to avoid overlap with navbar */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer sticks to the bottom when content is short */}
      <Footer />
    </div>
  );
};

export default MainLayout;
