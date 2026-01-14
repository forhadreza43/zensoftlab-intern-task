import { Globe, Grip, User } from 'lucide-react';
import React from 'react';
const countries = [
   {
      name: 'USA',
      flag: '🇺🇸',
      flagImageUrl: 'bangladesh-flag.png', // replace with actual image URL if needed
      address: `7426 Alban Station Blvd,
Suite A101, Springfield, VA 22150`,
   },
   {
      name: 'Bangladesh',
      flag: '🇧🇩',
      flagImageUrl: 'bangladesh-flag.png',
      address: `8th Floor, 2 Bir Uttam AK Khandakar
Mohakhali C/A, Dhaka 1212, Bangladesh`,
   },
   {
      name: 'Germany',
      flag: '🇩🇪',
      flagImageUrl: 'bangladesh-flag.png',
      address: `Rebhuhnweg 4, 26180
Bad Zwischenahn`,
   },
   {
      name: 'UAE',
      flag: '🇦🇪',
      flagImageUrl: 'bangladesh-flag.png',
      address: `903, 9th Floor, DAMAC XL Tower,
Business Bay, Dubai, UAE.`,
   },
   {
      name: 'Malaysia',
      flag: '🇲🇾',
      flagImageUrl: 'bangladesh-flag.png',
      address: `Level 9, Integra Tower,
The Intermark, No. 348,
Jalan Tun Razak, 50400 Kuala Lumpur.`,
   },
   {
      name: 'Netherlands',
      flag: '🇳🇱',
      flagImageUrl: 'bangladesh-flag.png',
      address: `Sparrenheuvel 2 3708 JE Zeist
The Netherlands`,
   },
];

const GlobalReachSection: React.FC = () => {
   return (
      <section className=" rounded-b-[50px] w-full bg-linear-to-t from-gray-200 to-primary-foreground py-20">
         <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
            {/* Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 items-start">
               {/* LEFT: Global Reach (Top on mobile) */}
               <div className="order-1 lg:col-span-6">
                  <div className="mb-6">
                     <h2 className="text-sm tracking-widest font-semibold uppercase flex items-center gap-3">
                        Global Reach
                        <span className="flex gap-1">
                           <Grip className="w-8 h-8 opacity-40" />
                        </span>
                     </h2>
                     <p className="mt-3 text-gray-600 max-w-md">
                        A Worldwide Presence Built on Strategic Partnerships and
                        Trusted Relationships
                     </p>
                  </div>

                  <div className="space-y-6">
                     {/* Card 1 */}
                     <div className="bg-accent rounded-xl p-6 flex flex-col gap-4 items-start">
                        <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center shadow">
                           <Globe size={30}/>
                        </div>
                        <div>
                           <h4 className="font-semibold text-gray-900 uppercase text-lg">
                              Reach in Over 150+ Countries
                           </h4>
                           <p className="text-sm text-gray-600 mt-1">
                              Our products are being used across the globe.
                           </p>
                        </div>
                     </div>

                     {/* Card 2 */}
                     <div className="bg-accent rounded-xl p-6 flex flex-col gap-4 items-start">
                        <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center shadow">
                           <User size={30}/>
                        </div>
                        <div>
                           <h4 className="font-semibold text-gray-900 uppercase text-lg">
                              Serving 950+ Customers and Growing
                           </h4>
                           <p className="text-sm text-gray-600 mt-1">
                              Our journey of global service continues to expand.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* RIGHT: Get in Touch (Bottom on mobile) */}
               <div className="order-2 lg:col-span-5">
                  <div className="mb-6">
                     <h2 className="text-sm tracking-widest font-semibold uppercase flex items-center gap-3">
                        GET IN TOUCH WITH US!
                        <span className="flex gap-1">
                           <Grip className="w-8 h-8 opacity-40" />
                        </span>
                     </h2>
                     <p className="mt-3 text-gray-600 max-w-md">
                        sales@nop-station.com
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                     {countries.map((country) => (
                        <CountryCard
                           key={country.name}
                           name={country.name}
                           flag={country.flag}
                           flagImageUrl={country.flagImageUrl}
                           address={country.address}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default GlobalReachSection;

type CountryCardProps = {
   name: string;
   flag: string;
   flagImageUrl: string;
   address: string;
};

function CountryCard({ name, flag, flagImageUrl, address }: CountryCardProps) {
   return (
      <div className="flex gap-4">
         <div className="w-10 h-10">
            <img
               className="rounded-full object-cover "
               src={flagImageUrl}
               alt={`${flag} flag`}
            />
         </div>
         <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600 mt-1">
               {address.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                     {line}
                     <br />
                  </React.Fragment>
               ))}
            </p>
         </div>
      </div>
   );
}
