import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { forwardRef, useEffect } from 'react';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

export default function FeaturedProducts() {
   const sliderRef = useRef<HTMLDivElement>(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(false);

   const checkScrollability = () => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      const hasOverflow = scrollWidth > clientWidth + 8; // tolerance buffer

      setCanScrollLeft(hasOverflow && scrollLeft > 0);
      setCanScrollRight(
         hasOverflow && scrollLeft < scrollWidth - clientWidth - 8
      );
   };

   useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      // Ensure layout is fully calculated before measuring
      requestAnimationFrame(() => {
         requestAnimationFrame(checkScrollability);
      });

      slider.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
         slider.removeEventListener('scroll', checkScrollability);
         window.removeEventListener('resize', checkScrollability);
      };
   }, []);

   const scroll = (dir: 'left' | 'right') => {
      if (!sliderRef.current) return;
      const cardWidth =
         sliderRef.current.querySelector('div')?.offsetWidth || 520;
      sliderRef.current.scrollBy({
         left: dir === 'left' ? -(cardWidth + 32) : cardWidth + 32, // card width + gap
         behavior: 'smooth',
      });
   };

   return (
      <section className="bg-[#f5f7fb] py-16">
         <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <Tabs defaultValue="new">
               {/* Header */}
               <div className="flex items-center flex-col md:flex-row justify-between mb-6 gap-4 w-full">
                  <h2 className="text-lg font-semibold tracking-wide text-primary">
                     FEATURED ZENSOFTCOMMERCE PRODUCTS
                  </h2>

                  {/* Desktop Tabs */}
                  <TabsList className="hidden md:flex bg-transparent p-0 gap-3">
                     {['new', 'apps', 'themes', 'plugins'].map((v) => (
                        <TabsTrigger
                           key={v}
                           value={v}
                           className="text-md text-gray-400 px-2 font-bold data-[state=active]:bg-secondary data-[state=active]:text-primary-foreground data-[state=active]:underline rounded-none"
                        >
                           {labelMap[v]}
                        </TabsTrigger>
                     ))}
                  </TabsList>

                  {/* Mobile Dropdown */}
                  <div className="md:hidden w-full">
                     <Select defaultValue="new">
                        <SelectTrigger className="w-full bg-white border border-primary shadow-sm">
                           <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent
                           position="popper"
                           align="start"
                           className="min-w-[var(--radix-select-trigger-width)] w-[var(--radix-select-trigger-width)]"
                        >
                           {Object.entries(labelMap).map(([k, v]) => (
                              <SelectItem key={k} value={k}>
                                 {v}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </div>
               </div>

               {/* Content */}
               {['new', 'apps', 'themes', 'plugins'].map((v) => (
                  <TabsContent key={v} value={v} className="relative">
                     {/* Carousel Navigation Buttons */}
                     {(canScrollLeft || canScrollRight) && (
                        <>
                           {canScrollLeft && (
                              <button
                                 onClick={() => scroll('left')}
                                 className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                                 aria-label="Previous"
                              >
                                 <ChevronLeft
                                    size={24}
                                    className="text-gray-800"
                                 />
                              </button>
                           )}
                           {canScrollRight && (
                              <button
                                 onClick={() => scroll('right')}
                                 className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                                 aria-label="Next"
                              >
                                 <ChevronRight
                                    size={24}
                                    className="text-gray-800"
                                 />
                              </button>
                           )}
                        </>
                     )}
                     

                     <ProductSlider ref={sliderRef} />
                  </TabsContent>
               ))}
            </Tabs>
         </div>
      </section>
   );
}

const labelMap: Record<string, string> = {
   new: 'New Products',
   apps: 'Mobile Apps',
   themes: 'Themes Collection',
   plugins: 'Plugins Collection',
};

const ProductSlider = forwardRef<HTMLDivElement>((_, ref) => {
   return (
      <div
         ref={ref}
         className="
        flex gap-8 overflow-x-auto scrollbar-hidden scroll-smooth
        p-2
      "
      >
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
      </div>
   );
});

ProductSlider.displayName = 'ProductSlider';

function ProductCard() {
   return (
      <div className="min-w-[420px] md:min-w-[500px] lg:min-w-[580px] bg-white rounded-lg shadow-md shadow-black/20 border border-gray-200 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex overflow-hidden">
         {/* unchanged content */}
         <div className="relative w-[45%] bg-gray-100 flex items-center justify-center">
            <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
               26% Off
            </span>

            <span className="absolute bottom-0 left-0 bg-yellow-400 text-xs px-3 py-1 font-semibold">
               Best Seller
            </span>

            {/* Dummy Image */}
            <div className="w-40 h-56 bg-gray-300 rounded-md" />
         </div>

         {/* Content */}
         <div className="w-[55%] p-6 flex flex-col justify-between">
            <div>
               <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Downtown Theme for nopCommerce
               </h3>

               <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  A stylish, responsive theme crafted for modern ecommerce
                  brands. Optimized for performance and conversion.
               </p>

               {/* Pricing */}
               <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                     $199.00
                  </span>
                  <span className="text-lg font-semibold text-sky-500">
                     $149.00
                  </span>
               </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
               <button className="flex-1 bg-sky-500 text-white text-sm py-2 rounded-md hover:bg-sky-600 transition">
                  LIVE DEMO
               </button>
               <button className="flex-1 bg-slate-900 text-white text-sm py-2 rounded-md hover:bg-slate-800 transition">
                  DETAILS
               </button>
            </div>
         </div>
      </div>
   );
}
