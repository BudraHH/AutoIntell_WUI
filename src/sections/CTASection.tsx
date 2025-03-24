import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import {Link} from "react-router-dom";

// const partnerLogos = [
//   'BMW', 'Mercedes-Benz', 'Toyota', 'Tesla', 'Ford'
// ];

export const CTASection = () => {
  return (
    <section className="py-24 bg-secondary-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Ready to Revolutionize Your Driving Experience?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to={'/register'}><button className="px-8 py-4 bg-primary text-secondary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors group">
              Sign Up & Register Your Vehicle
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button></Link>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors group">
              Download AutoIntell App
              <Download className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/*<div className="mt-16">*/}
          {/*  <p className="text-gray-300 mb-8">Trusted by Leading Automotive Brands</p>*/}
          {/*  <div className="flex flex-wrap justify-center gap-8 items-center">*/}
          {/*    {partnerLogos.map((logo, index) => (*/}
          {/*      <motion.div*/}
          {/*        key={index}*/}
          {/*        initial={{ opacity: 0, y: 20 }}*/}
          {/*        whileInView={{ opacity: 1, y: 0 }}*/}
          {/*        viewport={{ once: true }}*/}
          {/*        transition={{ delay: index * 0.1 }}*/}
          {/*        className="text-xl font-bold text-primary/80 hover:text-primary transition-colors"*/}
          {/*      >*/}
          {/*        {logo}*/}
          {/*      </motion.div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};