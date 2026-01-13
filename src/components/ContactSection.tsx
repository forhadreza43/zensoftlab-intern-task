import { Mail } from 'lucide-react';

const offices = [
   {
      country: 'USA',
      flag: '🇺🇸',
      address: '7426 Alban Station Blvd, Suite A101, Springfield, VA 22150',
   },
   {
      country: 'BANGLADESH',
      flag: '🇧🇩',
      address: '8th Floor, 2 Bir Uttam AK Khandakar, Mohakhali C/A, Dhaka 1212',
   },
   {
      country: 'GERMANY',
      flag: '🇩🇪',
      address: 'Rebhuhnweg 4, 26180 Bad Zwischenahn',
   },
   {
      country: 'UAE',
      flag: '🇦🇪',
      address: '903, 9th Floor, DAMAC XL Tower, Business Bay, Dubai',
   },
   {
      country: 'MALAYSIA',
      flag: '🇲🇾',
      address:
         'Level 9, Integra Tower, The Intermark, Jalan Tun Razak, 50400 Kuala Lumpur',
   },
   {
      country: 'NETHERLANDS',
      flag: '🇳🇱',
      address: 'Sparrenheuvel 2 3708 JE Zeist, The Netherlands',
   },
];

const ContactSection = () => {
   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 gradient-hero" />

         <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="section-title mb-4">GET IN TOUCH WITH US!</h2>
               <a
                  href="mailto:sales@nop-station.com"
                  className="inline-flex items-center gap-2 text-cyan hover:text-cyan/80 text-lg font-medium transition-colors"
               >
                  <Mail className="w-5 h-5" />
                  sales@nop-station.com
               </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
               {offices.map((office) => (
                  <div key={office.country} className="text-center p-4">
                     <div className="text-4xl mb-3">{office.flag}</div>
                     <h3 className="text-lg font-semibold text-foreground mb-2">
                        {office.country}
                     </h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        {office.address}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
