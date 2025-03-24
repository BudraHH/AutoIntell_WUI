import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary py-20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-700 mb-6"
          >
            AutoIntell – Drive Smarter with AI-Powered Vehicle Insights!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-xl md:text-2xl mb-12"
          >
            Monitor your vehicle's health in real-time, prevent failures, and optimize performance with cutting-edge AI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-8 py-4 bg-primary text-secondary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
              Watch Demo
              <Play size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};