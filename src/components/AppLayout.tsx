import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PDFLibrary from './PDFLibrary';
import EmailSignup from './EmailSignup';
import Footer from './Footer';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <p>Hello from AppLayout</p>
        <Hero />
        <PDFLibrary />
        <EmailSignup />
        <Footer />
      </main>
    </div>
  );
};
