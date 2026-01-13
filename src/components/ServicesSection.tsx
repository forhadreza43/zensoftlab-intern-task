import {
   Settings,
   Smartphone,
   Palette,
   Server,
   Zap,
   ShoppingBag,
   Globe,
   ArrowRight,
   ArrowLeft,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const services = [
   {
      title: 'Customization Service',
      description:
         "Customized solutions to boost your eCommerce store's performance",
      icon: Settings,
   },
   {
      title: 'Mobile App Development',
      description:
         'End-to-end mobile app development services for both Android and iOS',
      icon: Smartphone,
   },
   {
      title: 'Theme Design & Plugin Development',
      description:
         'Enhance your storefront with custom nopCommerce Themes & Plugins',
      icon: Palette,
   },
   {
      title: 'ERP Solutions with Odoo',
      description:
         'Streamline your business operations with Odoo ERP solutions',
      icon: Server,
   },
   {
      title: 'Optimizely Development',
      description: 'Professional Optimizely development for your website',
      icon: Zap,
   },
   {
      title: 'Shopify Development',
      description:
         'Transform your eCommerce store with custom Shopify development',
      icon: ShoppingBag,
   },
   {
      title: 'Umbraco Development',
      description:
         'Build dynamic, seamless websites with expert Umbraco development services',
      icon: Globe,
   },
];

const ServicesSection = () => {
   const [startIndex, setStartIndex] = useState(0);
   const visibleCount = 4;

   const scrollRef = useRef<HTMLDivElement>(null);
   const isDragging = useRef(false);
   const startX = useRef(0);
   const scrollStart = useRef(0);

   const [isScrollable, setIsScrollable] = useState(false);

   useEffect(() => {
      const el = scrollRef.current;
      if (!el) return;

      const checkScrollable = () => {
         setIsScrollable(el.scrollWidth > el.clientWidth);
      };

      checkScrollable();
      window.addEventListener('resize', checkScrollable);
      return () => window.removeEventListener('resize', checkScrollable);
   }, []);

   const handleMouseDown = (e: React.MouseEvent) => {
      if (!scrollRef.current || !isScrollable) return;
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollStart.current = scrollRef.current.scrollLeft;
   };

   const handleMouseUp = () => (isDragging.current = false);
   const handleMouseLeave = () => (isDragging.current = false);

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.4;
      scrollRef.current.scrollLeft = scrollStart.current - walk;
   };

   return (
      <section className="py-5 md:py-30 lg:py-10 relative overflow-hidden">
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
               <h2 className="text-primary lg:text-primary-foreground text-2xl text-center flex-1">
                  OUR SERVICES
               </h2>

               <div className="hidden lg:flex gap-2 absolute right-4 top-6">
                  <button
                     onClick={() =>
                        setStartIndex(
                           (prev) =>
                              (prev - 1 + services.length - visibleCount + 1) %
                              (services.length - visibleCount + 1)
                        )
                     }
                     className="p-2 rounded-full text-primary-foreground hover:scale-110 transition-transform hover:-translate-x-1"
                  >
                     <ArrowLeft className="w-5 h-5" />
                  </button>

                  <button
                     onClick={() =>
                        setStartIndex(
                           (prev) =>
                              (prev + 1) % (services.length - visibleCount + 1)
                        )
                     }
                     className="p-2 rounded-full text-primary-foreground hover:scale-110 transition-transform hover:translate-x-1"
                  >
                     <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            {/* ✅ Padding added here to protect card edges */}
            <div
               ref={scrollRef}
               className={`overflow-x-auto scrollbar-hidden px-2 py-2
            ${
               isScrollable
                  ? 'cursor-grab active:cursor-grabbing'
                  : 'cursor-default'
            }`}
               style={{ WebkitOverflowScrolling: 'touch' }}
               onMouseDown={handleMouseDown}
               onMouseUp={handleMouseUp}
               onMouseLeave={handleMouseLeave}
               onMouseMove={handleMouseMove}
            >
               <div className="flex min-w-300 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services
                     .slice(startIndex, startIndex + visibleCount)
                     .map((service) => (
                        <div
                           key={service.title}
                           className="bg-secondary/20 rounded hover:bg-secondary/40 transition-all duration-300 hover:-translate-y-1"
                        >
                           <div className="p-4 bg-primary-foreground border rounded border-secondary/20 h-full w-full transform -translate-x-1 -translate-y-1 mr-1 mb-1">
                              <div className="w-16 h-16 rounded-xl text-primary flex items-center justify-center mb-4">
                                 <service.icon className="w-10 h-10 text-primary" />
                              </div>
                              <h3 className="text-xl font-semibold text-primary mb-3">
                                 {service.title}
                              </h3>
                              <p className="text-sm mb-4 text-primary leading-relaxed">
                                 {service.description}
                              </p>
                              <a
                                 href="#"
                                 className="text-secondary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                              >
                                 Read More
                              </a>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesSection;
