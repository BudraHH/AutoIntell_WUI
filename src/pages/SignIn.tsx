import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import api from "../api";

export const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
          api.signIn.url, // ✅ Change this to match your backend route
          {
            email: formData.email, // ✅ If your backend expects "username" instead of "email"
            password: formData.password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );

      if (response.status === 200) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        navigate('/dashboard'); // ✅ Redirect to the dashboard on success
      }
    } catch (error) {
      setError('Invalid email or password. Please try again. ')
          console.error(error);
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
                Welcome Back
              </h2>
              <p className="text-gray-300 mb-8">
                Sign in to access your vehicle dashboard and insights
              </p>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary text-secondary font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Sign In
                </button>
              </form>

              <p className="mt-6 text-center text-gray-300">
                Don't have an account?{' '}
                <Link to="/sign-up" className="text-primary hover:text-primary-dark transition-colors">
                  Sign Up
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
