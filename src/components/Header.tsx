import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <h1 className="text-xl font-bold text-slate-800">
              WiseGuidePDF
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
  <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">
    Home
  </Link>
  <Link to="/library" className="text-slate-600 hover:text-blue-600 transition-colors">
    PDF Library
  </Link>
  <Link to="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">
    Blog
  </Link>
  <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
    About
  </Link>
  <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
    Contact
  </Link>
</nav>
          
          <a href="#signup">
  <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 font-semibold">
    Get Started
  </Button>
</a>
        </div>
      </div>
    </header>
  );
};

export default Header;