import React from 'react';
import Header from './Header';
import Hero from './Hero';
import PDFLibrary from './PDFLibrary';
import EmailSignup from './EmailSignup';
import Footer from './Footer';
import { SimpleNav } from "@/components/SeniorUIKit/SimpleNav";
import { AccessibleButton } from "@/components/SeniorUIKit/AccessibleButton";
import { TooltipWrapper } from "@/components/SeniorUIKit/TooltipWrapper";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1 p-6">{children}</main>
        <Hero />
        <PDFLibrary />
        <EmailSignup />
        <Footer /> 
    </div>
  );
};
