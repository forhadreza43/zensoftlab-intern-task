import {
   LayoutGrid,
   Search,
   ShoppingCart,
   Tags,
   UserRound,
} from 'lucide-react';

export default function PhoneNavigationMenu() {
   return (
      <div className="bg-primary-foreground md:hidden">
         <div className="px-10 py-2 relative">
            <ul className="flex items-center justify-between text-xs text-primary">
               <li className="flex flex-col items-center">
                  <span>
                     <UserRound />
                  </span>
                  <span>Log in</span>{' '}
               </li>
               <li className="flex flex-col items-center">
                  <span>
                     <Tags fill="bg-primary" className="scale-x-[-1]" />
                  </span>
                  <span>My tickets</span>
               </li>
               <li className="relative">
                  <div className="absolute z-30 top-0 left-1/2 -translate-x-1/2 -translate-y-13">
                     <span
                        style={{
                           boxShadow: '0px 4px 10px rgba(0, 161, 219, 0.4)',
                        }}
                        className="w-12 inline-block h-12 bg-linear-to-l from-cyan-300 to-cyan-600 rounded-full p-2.5 "
                     >
                        <LayoutGrid className="text-primary-foreground  w-full h-full" />
                     </span>
                  </div>
               </li>
               <li className="flex flex-col items-center">
                  <span>
                     <Search />
                  </span>
                  <span>Search</span>
               </li>
               <li className="flex flex-col items-center">
                  <span>
                     <ShoppingCart />
                  </span>
                  <span>Cart</span>
               </li>
            </ul>
         </div>
      </div>
   );
}
