import { Award, BadgeCheck, Users } from 'lucide-react';

const PartnersSection = () => {
   return (
      <section className="py-16 relative overflow-hidden">
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
               {/* Gold Partner Badge */}
               <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow/20 to-orange/20 flex items-center justify-center border-2 border-yellow/50">
                     <Award className="w-10 h-10 text-yellow" />
                  </div>
                  <div>
                     <p className="text-sm text-muted-foreground">
                        nopCommerce
                     </p>
                     <p className="text-lg font-semibold text-foreground">
                        Gold Solution Partner
                     </p>
                  </div>
               </div>

               <div className="hidden md:block w-px h-16 bg-border" />

               {/* Certified Developers */}
               <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                     <BadgeCheck className="w-10 h-10 text-cyan" />
                     <span className="text-5xl font-bold text-cyan">100+</span>
                  </div>
                  <p className="text-muted-foreground">
                     nopCommerce & Odoo Certified Developers
                  </p>
               </div>

               <div className="hidden md:block w-px h-16 bg-border" />

               {/* MVP Badge */}
               <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                     <Users className="w-10 h-10 text-primary" />
                     <span className="text-5xl font-bold text-primary">04</span>
                  </div>
                  <p className="text-muted-foreground">
                     nopCommerce & Odoo MVP
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PartnersSection;
