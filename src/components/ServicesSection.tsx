import {
   Settings,
   Smartphone,
   Palette,
   Server,
   Zap,
   ShoppingBag,
   Globe,
} from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const services = [
   {
      title: 'Customization Service',
      description:
         "Customized solutions to boost your eCommerce store's performance",
      icon: Settings,
      color: 'cyan',
   },
   {
      title: 'Mobile App Development',
      description:
         'End-to-end mobile app development services for both Android and iOS',
      icon: Smartphone,
      color: 'cyan',
   },
   {
      title: 'Theme Design & Plugin Development',
      description:
         'Enhance your storefront with custom nopCommerce Themes & Plugins',
      icon: Palette,
      color: 'cyan',
   },
   {
      title: 'ERP Solutions with Odoo',
      description:
         'Streamline your business operations with Odoo ERP solutions',
      icon: Server,
      color: 'cyan',
   },
   {
      title: 'Optimizely Development',
      description: 'Professional Optimizely development for your website',
      icon: Zap,
      color: 'cyan',
   },
   {
      title: 'Shopify Development',
      description:
         'Transform your eCommerce store with custom Shopify development',
      icon: ShoppingBag,
      color: 'cyan',
   },
   {
      title: 'Umbraco Development',
      description:
         'Build dynamic, seamless websites with expert Umbraco development services',
      icon: Globe,
      color: 'cyan',
   },
];

const ServicesSection = () => {
   const [startIndex, setStartIndex] = useState(0);
   const visibleCount = 4;

   const nextSlide = () => {
      setStartIndex(
         (prev) => (prev + 1) % (services.length - visibleCount + 1)
      );
   };

   const prevSlide = () => {
      setStartIndex(
         (prev) =>
            (prev - 1 + services.length - visibleCount + 1) %
            (services.length - visibleCount + 1)
      );
   };

   return (
      <section className="py-20 relative overflow-hidden">
         {/* Background continuation */}
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
               <h2 className="section-title text-center flex-1">
                  OUR SERVICES
               </h2>
               <div className="hidden md:flex gap-2">
                  <button
                     onClick={prevSlide}
                     className="p-2 rounded-full border border-muted-foreground/30 hover:border-primary transition-colors"
                  >
                     <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button
                     onClick={nextSlide}
                     className="p-2 rounded-full border border-muted-foreground/30 hover:border-primary hover:text-primary transition-colors"
                  >
                     <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {services
                  .slice(startIndex, startIndex + visibleCount)
                  .map((service, index) => (
                     <div
                        key={service.title}
                        className="service-card bg-card hover:bg-card/80"
                        style={{ animationDelay: `${index * 0.1}s` }}
                     >
                        <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                           <service.icon className="w-8 h-8 text-cyan" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                           {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                           {service.description}
                        </p>
                        <a
                           href="#"
                           className="text-primary text-sm font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                        >
                           Read More
                           <ChevronRight className="w-4 h-4" />
                        </a>
                     </div>
                  ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
               {Array.from({ length: services.length - visibleCount + 1 }).map(
                  (_, i) => (
                     <button
                        key={i}
                        onClick={() => setStartIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                           i === startIndex
                              ? 'bg-primary w-6'
                              : 'bg-muted-foreground/30'
                        }`}
                     />
                  )
               )}
            </div>
         </div>
      </section>
   );
};

export default ServicesSection;
