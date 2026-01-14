import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import FeaturedProducts from '@/components/FeaturedProducts';
// import TestimonialsSection from '@/components/TestimonialsSection';
// import GlobalReachSection from '@/components/GlobalReachSection';
// import ContactSection from '@/components/ContactSection';
// import AboutSection from '@/components/AboutSection';
// import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookMeetingButton from '@/components/BookMeetingButton';
import ClientSuccessSection from '@/components/ClientSuccessSection';
// import Text from '@/components/text';

const Index = () => {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            <HeroSection />
            <StatsSection />
            {/* <Text/> */}
            <ServicesSection />
            <PartnersSection />
            <FeaturedProducts />
            <ClientSuccessSection />
            {/* <TestimonialsSection /> */}
            {/* <GlobalReachSection /> */}
            {/* <ContactSection /> */}
            {/* <AboutSection /> */}
            {/* <FAQSection /> */}
         </main>
         <Footer />
         <BookMeetingButton />
      </div>
   );
};

export default Index;
