import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h3 className="text-xl font-bold">WiseGuidePDF</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Digital literacy made easy for seniors. Free PDF guides to help you navigate technology safely and confidently.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">PDF Library</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Free Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Email Safety</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Avoid Scams</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Smartphone Basics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 WiseGuidePDF. All rights reserved. Powered by Wise Guide PDF.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;