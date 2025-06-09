import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Digital Literacy Made Easy for <span className="text-blue-600">Seniors</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Free PDF guides to help you navigate technology safely and confidently. 
          Learn email, avoid scams, and master your smartphone step-by-step.
        </p>

        {/* 🔽 Add this section to include the signup button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Get PDF Guides
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Browse Library
          </Button>

          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-8 py-3 text-lg font-semibold"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Email Safety</h3>
            <p className="text-slate-600">Learn to use email securely and avoid common scams</p>
          </Card>
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="text-yellow-500 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Scam Protection</h3>
            <p className="text-slate-600">Identify and avoid online scams targeting seniors</p>
          </Card>
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Smartphone Basics</h3>
            <p className="text-slate-600">Master your smartphone with easy step-by-step guides</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
