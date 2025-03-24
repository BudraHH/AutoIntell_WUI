import { Hero } from '../sections/Hero.tsx';
import { About } from '../sections/About.tsx';
import { HowItWorks } from '../sections/HowItWorks.tsx';
import { CTASection } from '../sections/CTASection.tsx';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};