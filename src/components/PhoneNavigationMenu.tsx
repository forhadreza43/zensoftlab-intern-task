import {
   LayoutGrid,
   Search,
   ShoppingCart,
   Tags,
   UserRound,
} from 'lucide-react';

export default function PhoneNavigationMenu() {
   return (
      <div className="bg-primary-foreground md:hidden  fixed bottom-0 left-0 w-full z-30">
         <div className="py-2 pb-6">
            <ul className="grid grid-cols-5 items-center justify-items-center text-xs text-primary place-content-center">
               <li className="flex flex-col items-center place-content-center">
                  <span>
                     <UserRound />
                  </span>
                  <span>Log in</span>{' '}
               </li>
               <li className="flex flex-col items-center place-content-center">
                  <span>
                     <Tags fill="bg-primary" className="scale-x-[-1]" />
                  </span>
                  <span>My tickets</span>
               </li>
               <li className="relative place-content-center">
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
               <li className="flex flex-col items-center place-content-center">
                  <span>
                     <Search />
                  </span>
                  <span>Search</span>
               </li>
               <li className="flex flex-col items-center place-content-center">
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
