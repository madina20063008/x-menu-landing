import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { ProblemSection } from '@/app/components/ProblemSection';
import { SolutionSection } from '@/app/components/SolutionSection';
import { HowItWorksSection } from '@/app/components/HowItWorksSection';
import { AdminShowcaseSection } from '@/app/components/AdminShowcaseSection';
import { AnalyticsSection } from '@/app/components/AnalyticsSection';
import { PricingSection } from '@/app/components/PricingSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { FAQSection } from '@/app/components/FAQSection';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <AdminShowcaseSection />
          <AnalyticsSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
