import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import GlobalReachSection from '@/components/GlobalReachSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookMeetingButton from '@/components/BookMeetingButton';

const Index = () => {
   return (
      <div className="min-h-screen bg-background">
         <Header />
         <main>
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <PartnersSection />
            <TestimonialsSection />
            <ProjectsSection />
            <GlobalReachSection />
            <ContactSection />
            <AboutSection />
            <FAQSection />
         </main>
         <Footer />
         <BookMeetingButton />
      </div>
   );
};

export default Index;
