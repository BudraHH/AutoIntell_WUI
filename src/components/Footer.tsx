import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Youtube, Send } from 'lucide-react';

const quickLinks = [
  { title: 'About Us', href: '#' },
  { title: 'Features', href: '#' },
  { title: 'FAQs', href: '#' },
  { title: 'Contact', href: '#' },
  { title: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">AutoIntell</h3>
            <p className="text-gray-300 mb-4">
              Revolutionizing vehicle maintenance with AI-powered insights and real-time monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest updates & AI-driven insights for vehicle maintenance!
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-secondary-light border border-primary/20 text-white focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-secondary rounded-r-full hover:bg-primary-dark transition-colors flex items-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-gray-300">
          <p>© {new Date().getFullYear()} AutoIntell. All rights reserved.</p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-3xl rounded-full"></div>
    </footer>
  );
};