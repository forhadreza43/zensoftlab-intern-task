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
      <div ref={ref} className="text-4xl md:text-5xl font-bold text-cyan">
         {count}
         {suffix}
      </div>
   );
};

const StatsSection = () => {
   return (
      <section className="relative py-8 -mt-20 z-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {stats.map((stat, index) => (
                  <div
                     key={index}
                     className="stat-card rounded-xl p-6 flex items-center justify-between"
                     style={{ animationDelay: `${index * 0.1}s` }}
                  >
                     <div>
                        <AnimatedCounter
                           target={stat.number}
                           suffix={stat.suffix}
                        />
                        <p className="text-muted-foreground text-sm mt-1">
                           {stat.label}
                        </p>
                     </div>
                     <stat.icon className="w-10 h-10 text-cyan/60" />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default StatsSection;
