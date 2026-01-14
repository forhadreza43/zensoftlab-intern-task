import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HorizontalSliderProps = {
   children: React.ReactNode;
   gap?: number;
   className?: string;
};

export function HorizontalSlider({
   children,
   gap = 32,
   className = '',
}: HorizontalSliderProps) {
   const sliderRef = useRef<HTMLDivElement>(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(false);

   const checkScrollability = () => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const hasOverflow = scrollWidth > clientWidth + 8;

      setCanScrollLeft(hasOverflow && scrollLeft > 0);
      setCanScrollRight(
         hasOverflow && scrollLeft < scrollWidth - clientWidth - 8
      );
   };

   useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;

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

      const slideWidth =
         sliderRef.current.querySelector<HTMLElement>('[data-slide]')
            ?.offsetWidth ?? 520;

      sliderRef.current.scrollBy({
         left: dir === 'left' ? -(slideWidth + gap) : slideWidth + gap,
         behavior: 'smooth',
      });
   };

   return (
      <div className={`relative ${className}`}>
         {(canScrollLeft || canScrollRight) && (
            <>
               {canScrollLeft && (
                  <button
                     onClick={() => scroll('left')}
                     className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:scale-110 transition"
                  >
                     <ChevronLeft size={22} />
                  </button>
               )}

               {canScrollRight && (
                  <button
                     onClick={() => scroll('right')}
                     className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:scale-110 transition"
                  >
                     <ChevronRight size={22} />
                  </button>
               )}
            </>
         )}

         <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hidden scroll-smooth p-2"
            style={{ gap }}
         >
            {children}
         </div>
      </div>
   );
}
