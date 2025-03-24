import { motion } from 'framer-motion';
import { UserPlus, Car, Smartphone, LineChart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign up on the AutoIntell Website',
    description: 'Create your account in minutes and get started with AutoIntell.',
  },
  {
    icon: Car,
    title: 'SignUp Your Vehicle',
    description: 'Add your vehicle details and connect to our smart monitoring system.',
  },
  {
    icon: Smartphone,
    title: 'Install the AutoIntell Mobile App',
    description: 'Download our app to stay connected with your vehicle anywhere.',
  },
  {
    icon: LineChart,
    title: 'Start Monitoring & Get AI-Based Insights',
    description: 'Receive real-time analytics and predictive maintenance alerts.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-slate-300">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with AutoIntell in four simple steps and transform your vehicle maintenance experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start gap-6 mb-12 group"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-primary/20"></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};