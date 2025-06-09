import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && password) {
      setSubscribed(true);
      setEmail('');
      setName('');
      setPassword('');
    }
  };

  return (
    <div className="py-16 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join WiseGuidePDF – Only $50/year or $10/month
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Unlock full access to premium step-by-step PDF guides and digital tips tailored for seniors.
        </p>

        <Card className="p-8 bg-white max-w-md mx-auto">
          {subscribed ? (
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Thank You for Joining!
              </h3>
              <p className="text-slate-600">
                You're now subscribed and will receive new guides and digital tips directly via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  Create a Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-800 font-semibold"
              >
                Sign Up Now – $50/yr or $10/month
              </Button>
              <p className="text-xs text-slate-500">
                We respect your privacy. Cancel anytime.
              </p>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default EmailSignup;
