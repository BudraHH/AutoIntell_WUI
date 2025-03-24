import { motion } from 'framer-motion';
import { Car, Bell, Smartphone, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Car,
    title: 'AI-Driven Monitoring',
    description: 'Keep track of your car\'s vital parameters with real-time AI analysis.',
  },
  {
    icon: Bell,
    title: 'Predictive Maintenance',
    description: 'Get alerts before breakdowns happen, saving time and money.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Access',
    description: 'View vehicle data anywhere, anytime from any device.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Encrypted storage & multi-device support for peace of mind.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <section className="py-24 bg-secondary-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            Why AutoIntell is a Game-Changer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AutoIntell revolutionizes vehicle maintenance by combining advanced AI technology with real-time monitoring. 
            Our platform provides predictive insights and actionable recommendations to keep your vehicle in optimal condition, 
            reducing maintenance costs and preventing unexpected breakdowns.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};