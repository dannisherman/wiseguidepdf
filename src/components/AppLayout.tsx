import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PDFLibrary from './PDFLibrary';
import EmailSignup from './EmailSignup';
import Footer from './Footer';
import { SimpleNav } from "@/components/SeniorUIKit/SimpleNav";
import { AccessibleButton } from "@/components/SeniorUIKit/AccessibleButton";
import { TooltipWrapper } from "@/components/SeniorUIKit/TooltipWrapper";


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
