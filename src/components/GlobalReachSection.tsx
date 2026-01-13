import { Globe, Users } from 'lucide-react';

const GlobalReachSection = () => {
   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-card" />

         <div className="relative z-10 container mx-auto px-4">
            <h2 className="section-title text-center mb-4">GLOBAL REACH</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
               A Worldwide Presence Built on Strategic Partnerships and Trusted
               Relationships
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {/* Countries Card */}
               <div className="glass-card rounded-2xl p-8 text-center">
                  <Globe className="w-16 h-16 text-cyan mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                     REACH IN OVER <span className="text-cyan">150+</span>{' '}
                     COUNTRIES
                  </h3>
                  <p className="text-muted-foreground">
                     Our products are being used across the globe.
                  </p>
               </div>

               {/* Customers Card */}
               <div className="glass-card rounded-2xl p-8 text-center">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                     SERVING <span className="text-primary">950+</span>{' '}
                     CUSTOMERS
                  </h3>
                  <p className="text-muted-foreground">
                     Our journey of global service continues to expand.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default GlobalReachSection;
