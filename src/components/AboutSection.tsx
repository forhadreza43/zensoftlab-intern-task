import { ArrowRight, Users } from 'lucide-react';

const AboutSection = () => {
   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-card" />

         <div className="relative z-10 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
               {/* Image placeholder */}
               <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-navy-mid to-navy-dark">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-24 h-24 text-muted-foreground/30" />
                     </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan/20 rounded-xl -z-10" />
               </div>

               {/* Content */}
               <div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                     <span className="text-foreground font-semibold">
                        nopStation
                     </span>{' '}
                     is the eCommerce wing of Brain Station 23 PLC, a
                     top-ranking software development company with a global
                     presence.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                     We are the leading Gold Solution Partner of nopCommerce
                     with over{' '}
                     <span className="text-cyan font-semibold">
                        100+ nopCommerce Certified professionals
                     </span>
                     . We have been delivering comprehensive technology services
                     across diverse industries and technology stacks.
                  </p>
                  <a
                     href="#"
                     className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                     Meet our Team
                     <ArrowRight className="w-4 h-4" />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
