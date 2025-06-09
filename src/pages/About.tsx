import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">About WiseGuidePDF</h1>
        <p className="text-lg text-slate-600 mb-8">
          WiseGuidePDF is a passion project dedicated to helping seniors confidently navigate technology. We provide simple, step-by-step PDF guides covering topics like email safety, smartphone basics, scam awareness, and more.
        </p>

        <p className="text-lg text-slate-600 mb-6">
          Our mission is to empower older adults with digital literacy skills so they can stay connected, informed, and safe online. Whether you're helping a loved one or looking to learn yourself, WiseGuidePDF is here to guide you every step of the way.
        </p>

        <p className="text-lg text-slate-600">
          Our platform is built with accessibility and clarity in mind—big buttons, visual tips, and clear instructions. Join our community today and take the first step toward mastering the digital world.
        </p>
      </div>
    </div>
  );
};

export default About;
