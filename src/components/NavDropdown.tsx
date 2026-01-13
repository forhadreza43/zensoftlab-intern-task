import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface DropdownItem {
   name: string;
   url: string;
}

interface DropdownColumn {
   title: string;
   items: DropdownItem[];
   pageUrl?: { name: string; url: string };
   icon?: React.ComponentType<{ className?: string }>;
}

interface NavDropdownProps {
   label: string;
   categories: DropdownColumn[];
   imageUrl?: string;
   imageAlt?: string;
   url: string;
}

const NavDropdown = ({
   label,
   categories,
   imageUrl,
   imageAlt,
   url,
}: NavDropdownProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [topPosition, setTopPosition] = useState(0);
   const buttonRef = useRef<HTMLButtonElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (isOpen && buttonRef.current) {
         const buttonRect = buttonRef.current.getBoundingClientRect();
         setTopPosition(buttonRect.bottom);
      }
   }, [isOpen]);
   return (
      <div
         ref={containerRef}
         className="relative h-full"
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}
      >
         <a href={url}>
            <button
               ref={buttonRef}
               className="h-full flex items-center px-3 gap-1 text-sm font-medium text-primary-foreground hover:bg-secondary transition-colors"
            >
               {label}
               <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                     isOpen ? 'rotate-180' : ''
                  }`}
               />
            </button>
         </a>

         {isOpen && (
            <div
               className="fixed left-0 right-0 bg-primary-foreground shadow-lg z-40"
               style={{ top: `${topPosition}px` }}
            >
               <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto px-4">
                  <div
                     className="grid py-6 gap-8"
                     style={{
                        gridTemplateColumns: `repeat(${
                           categories.length + (imageUrl ? 1 : 0)
                        }, 1fr)`,
                     }}
                  >
                     {/* Columns Section */}
                     {categories.map((column) => (
                        <div key={column.title}>
                           <div className="flex items-center gap-2 mb-3">
                              {column?.icon && (
                                 <span className="bg-secondary p-2 rounded-md">
                                    <column.icon className="w-5 h-5 text-primary-foreground" />
                                 </span>
                              )}
                              <h3 className="text-sm font-semibold text-primary">
                                 {column.title}
                              </h3>
                           </div>
                           <ul>
                              {column.items.map((item) => (
                                 <li key={item?.name}>
                                    <a
                                       href={item?.url}
                                       className="group flex justify-between items-center p-2 rounded-md
                   hover:bg-gray-200 transition-all duration-300"
                                    >
                                       <span className="text-sm text-primary group-hover:text-gray-800">
                                          {item?.name}
                                       </span>
                                       <ArrowRight className="w-3 h-3 ml-2 text-gray-800 hidden group-hover:inline-block transition-all duration-300" />
                                    </a>
                                 </li>
                              ))}
                           </ul>

                           {column?.pageUrl && (
                              <ul>
                                 <li>
                                    <a
                                       href={column?.pageUrl?.url}
                                       className="group flex justify-between items-center p-2 rounded-md
                   hover:bg-gray-200 transition-all duration-300"
                                    >
                                       <span className="text-secondary font-semibold text-sm  group-hover:text-gray-800">
                                          {column?.pageUrl?.name}
                                       </span>
                                       <ArrowRight className="w-3 h-3 ml-2 text-secondary hidden group-hover:inline-block  group-hover:text-gray-800 transition-all duration-300" />
                                    </a>
                                 </li>
                              </ul>
                           )}
                        </div>
                     ))}

                     {/* Image Section */}
                     {imageUrl && (
                        <div className=" flex items-center h-full">
                           <img
                              src={imageUrl}
                              alt={imageAlt || 'Product showcase'}
                              className="h-full object-cover rounded-lg w-full"
                           />
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default NavDropdown;
