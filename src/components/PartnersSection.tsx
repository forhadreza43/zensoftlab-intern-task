import { Award, BadgeCheck, Users } from 'lucide-react';

const PartnersSection = () => {
   return (
      <section className="py-16 relative overflow-hidden">
         <div className="relative z-10 container mx-auto px-4">
            {/* GRID CONTROLLER */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
               {/* Card 1 — 60% on lg, full on md/sm */}
               <div
                  className="bg-accent p-6 rounded-lg flex items-center
                               lg:col-span-3 col-span-2 place-content-center"
               >
                  <div className="flex items-center gap-4">
                     <div
                        className="w-20 h-20 rounded-full bg-linear-to-br from-yellow-300 to-orange-300
                                     flex items-center justify-center border border-yellow/50"
                     >
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
               </div>

               {/* Card 2 — 20% on lg, 50% on md */}
               <div
                  className="bg-accent p-6 rounded-lg flex items-center justify-center
                               lg:col-span-1 col-span-1"
               >
                  <div className="">
                     <span className="bg-primary-foreground inline-block rounded-full p-3 mb-2 text-primary">
                        <BadgeCheck className="w-10 h-10 opacity-80" />
                     </span>
                     <p className="text-4xl font-bold text-primary/90">100+</p>
                     <p className="">nopCommerce & Odoo Certified Developers</p>
                  </div>
               </div>

               {/* Card 3 — 20% on lg, 50% on md */}
               <div
                  className="bg-accent p-6 rounded-lg flex items-center justify-center
                               lg:col-span-1 col-span-1"
               >
                  <div className="">
                     <span className="bg-primary-foreground inline-block rounded-full p-3 mb-2 text-primary">
                        <Users className="w-10 h-10 text-primary opacity-80" />
                     </span>
                     <p className="text-4xl font-bold text-primary/90">04</p>
                     <p className="">nopCommerce & Odoo MVP</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PartnersSection;
