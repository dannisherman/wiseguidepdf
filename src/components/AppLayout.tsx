import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PDFLibrary from './PDFLibrary';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PDFLibrary />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;