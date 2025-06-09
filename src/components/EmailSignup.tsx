import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const EmailSignup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubscribed(true);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="py-16 px-4 bg-blue-600 min-h-screen">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Create Your Account
        </h2>
        <p className="text-lg text-blue-100 mb-6">
          Stay updated with tech guides for seniors. <br />
          <strong>$50/year or $10/month</strong>
        </p>

        <Card className="p-8 bg-white max-w-md mx-auto">
          {subscribed ? (
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Thank You!
              </h3>
              <p className="text-slate-600">
                You'll receive our latest guides and tips via email.
              </p>
              <Button onClick={() => navigate('/')} className="mt-6">
                Back to Homepage
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter a secure password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
                  Verify Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-800 font-semibold">
                Sign Up for Updates
              </Button>

              <Button 
                type="button"
                variant="outline"
                className="w-full text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/login')}
              >
                Already have an account? Log in
              </Button>

              
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default EmailSignup;
