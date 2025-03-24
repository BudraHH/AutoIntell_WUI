import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import api from '../api';

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
          api.signUp.url,
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );

      if (response.status === 201) {
        // localStorage.setItem('access_token', response.data.access);
        // localStorage.setItem('refresh_token', response.data.refresh);
        navigate('/sign-in'); // ✅ Redirect to dashboard after successful signup
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
      <div className="min-h-screen bg-secondary flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-lg">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-3xl border border-primary-dark/50 p-10 rounded-2xl"
            >
              <button
                  onClick={() => navigate('/')}
                  className="text-primary hover:text-primary-dark mb-8 flex items-center gap-2 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Home
              </button>

              <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Create Your Account
              </h2>
              <p className="text-gray-300 mb-8">
                Join AutoIntell and start monitoring your vehicle with AI-powered insights
              </p>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary transition-colors"
                      required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2 pr-10 rounded-lg bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full px-4 py-2 pr-10 rounded-lg bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary transition-colors"
                        required
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition-colors"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-gray-300">
                Already have an account?{' '}
                <Link to="/sign-in" className="text-primary hover:text-primary-dark transition-colors">
                  Sign In
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image/Design */}
        <div className="hidden lg:flex flex-1 bg-secondary-light/10 relative backdrop-blur-3xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
  );
};
