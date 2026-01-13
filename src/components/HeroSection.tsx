import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
      {
         title: 'NEW YEAR',
         highlight: 'SALE',
         subtitle: 'UP TO 80% OFF',
         cta: 'SHOP NOW',
      },
      {
         title: 'CRAFTING',
         highlight: 'SOLUTIONS',
         subtitle: 'For Your Business Growth',
         cta: 'LEARN MORE',
      },
      {
         title: 'TRANSFORM',
         highlight: 'OPERATIONS',
         subtitle: 'With Odoo ERP',
         cta: 'GET STARTED',
      },
   ];

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
   }, []);

   const nextSlide = () =>
      setCurrentSlide((prev) => (prev + 1) % slides.length);
   const prevSlide = () =>
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

   return (
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
         {/* Background Effects */}
         <div className="absolute inset-0 gradient-hero" />

         {/* Animated Particles/Fireworks */}
         <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
               <div
                  key={i}
                  className="particle"
                  style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDelay: `${Math.random() * 3}s`,
                     animationDuration: `${2 + Math.random() * 2}s`,
                  }}
               />
            ))}
            {[...Array(5)].map((_, i) => (
               <div
                  key={`fw-${i}`}
                  className="firework"
                  style={{
                     left: `${10 + Math.random() * 80}%`,
                     top: `${10 + Math.random() * 60}%`,
                     animationDelay: `${Math.random() * 2}s`,
                  }}
               />
            ))}
         </div>

         {/* Content */}
         <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                  <span className="text-foreground">
                     {slides[currentSlide].title}{' '}
                  </span>
                  <span className="text-accent">
                     {slides[currentSlide].highlight}
                  </span>
               </h1>

               <div className="gradient-accent text-accent-foreground px-6 py-2 rounded-full inline-block mb-8">
                  <p className="text-xl md:text-2xl font-semibold tracking-wide">
                     {slides[currentSlide].subtitle}
                  </p>
               </div>

               <div>
                  <button className="btn-hero">
                     {slides[currentSlide].cta}
                  </button>
               </div>
            </div>
         </div>

         {/* Navigation Arrows */}
         <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
         >
            <ChevronLeft className="w-6 h-6 text-foreground" />
         </button>
         <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
         >
            <ChevronRight className="w-6 h-6 text-foreground" />
         </button>

         {/* Slide Indicators */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
               <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                     i === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/50'
                  }`}
               />
            ))}
         </div>
      </section>
   );
};

export default HeroSection;
