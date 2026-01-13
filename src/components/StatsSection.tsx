import { Calendar, Globe, Users, Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
   { number: 15, suffix: '+', label: 'Years on the market', icon: Calendar },
   { number: 150, suffix: '+', label: 'Countries Serving', icon: Globe },
   { number: 500, suffix: '+', label: 'Clients Served Globally', icon: Users },
   { number: 800, suffix: '+', label: 'Software Engineers', icon: Code },
];

const AnimatedCounter = ({
   target,
   suffix,
}: {
   target: number;
   suffix: string;
}) => {
   const [count, setCount] = useState(0);
   const [hasAnimated, setHasAnimated] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
               setHasAnimated(true);
               let start = 0;
               const duration = 2000;
               const increment = target / (duration / 16);

               const timer = setInterval(() => {
                  start += increment;
                  if (start >= target) {
                     setCount(target);
                     clearInterval(timer);
                  } else {
                     setCount(Math.floor(start));
                  }
               }, 16);
            }
         },
         { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
   }, [target, hasAnimated]);

   return (
      <div
         ref={ref}
         className="text-3xl lg:text-4xl font-bold text-primary-foreground"
      >
         {count}
         {suffix}
      </div>
   );
};

const StatsSection = () => {
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

   const handleMouseUp = () => {
      isDragging.current = false;
   };

   const handleMouseLeave = () => {
      isDragging.current = false;
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      e.preventDefault();

      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.4;
      scrollRef.current.scrollLeft = scrollStart.current - walk;
   };

   return (
      <section className="relative py-8 -mt-[15vh] md:-mt-[25vh] lg:-mt-[35vh] z-10">
         <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            <div
               ref={scrollRef}
               className={`overflow-x-auto scrollbar-hidden
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
               <div className="flex gap-4 md:gap-6 min-w-230 lg:min-w-255 lg:w-full lg:justify-between">
                  {stats.map((stat, index) => (
                     <div
                        key={index}
                        className="stat-card rounded-xl p-3 lg:p-4 flex items-center justify-between
                           bg-blue-950/70 backdrop-blur-xs border border-secondary/30
                           min-w-60 md:min-w-0 md:flex-1 select-none"
                        style={{ animationDelay: `${index * 0.1}s` }}
                     >
                        <div>
                           <AnimatedCounter
                              target={stat.number}
                              suffix={stat.suffix}
                           />
                           <p className="text-primary-foreground whitespace-nowrap text-sm">
                              {stat.label}
                           </p>
                        </div>

                        <div className="ml-1 bg-secondary/20 p-2 lg:p-3 rounded-full flex items-center justify-center">
                           <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default StatsSection;
