import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
// import StatsSection from './StatsSection';

const HeroSection = () => {
   const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

   const slides = [
      {
         title: 'NEW YEAR',
         highlight: 'SALE',
         subtitle: 'UP TO 80% OFF',
         cta: 'SHOP NOW',
         image: '/1.webp',
      },
      {
         title: 'CRAFTING',
         highlight: 'SOLUTIONS',
         subtitle: 'For Your Business Growth',
         cta: 'LEARN MORE',
         image: '/2.webp',
      },
      {
         title: 'TRANSFORM',
         highlight: 'OPERATIONS',
         subtitle: 'With Odoo ERP',
         cta: 'GET STARTED',
         image: '/3.webp',
      },
      {
         title: 'ELEVATE',
         highlight: 'YOUR BRAND',
         subtitle: 'With Our Design Services',
         cta: 'DISCOVER MORE',
         image: '/4.webp',
      },
      {
         title: 'BOOST',
         highlight: 'SALES',
         subtitle: 'With Effective Marketing',
         cta: 'CONTACT US',
         image: '/5.webp',
      },
      {
         title: 'CUSTOMIZE',
         highlight: 'YOUR STORE',
         subtitle: 'With NopCommerce Experts',
         cta: 'EXPLORE SERVICES',
         image: '/6.webp',
      },
   ];

   return (
      <section className="relative top-15 w-full overflow-hidden">
         {/* Carousel */}
         <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
               loop: true,
            }}
         >
            <CarouselContent className="ml-0">
               {slides.map((slide, index) => (
                  <CarouselItem key={index} className="pl-0 pr-0">
                     <div className="relative w-full overflow-hidden">
                        <img
                           src={slide.image}
                           alt={`${slide.title} ${slide.highlight}`}
                           className="block w-full h-auto lg:max-h-[90vh] object-cover object-center"
                           loading={index === 0 ? 'eager' : 'lazy'}
                        />

                        {/* Overlay / text block (optional, kept for future use) */}
                        {/* <div className="absolute inset-0 flex items-center justify-center">
                           <div className="animate-fade-in-up relative z-10 text-center px-4">
                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                                 <span className="text-foreground">
                                    {slide.title}{' '}
                                 </span>
                                 <span className="text-accent">{slide.highlight}</span>
                              </h1>

                              <Badge
                                 variant="secondary"
                                 className="gradient-accent text-accent-foreground px-6 py-2 text-xl md:text-2xl font-semibold tracking-wide mb-8"
                              >
                                 {slide.subtitle}
                              </Badge>

                              <div className="mt-8">
                                 <Button size="lg" className="btn-hero">
                                    {slide.cta}
                                 </Button>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-muted/50 hover:bg-muted hover:scale-110 border-none transition-all duration-300 z-20" />
            <CarouselNext className="right-4 bg-muted/50 hover:bg-muted hover:scale-110 border-none transition-all duration-300 z-20" />
         </Carousel>

      </section>
   );
};

export default HeroSection;
