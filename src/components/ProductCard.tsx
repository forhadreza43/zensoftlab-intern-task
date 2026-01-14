import { FileText, Monitor } from "lucide-react";

export default function ProductCard() {
   return (
      <div
         data-slide
         style={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}
         className="min-w-full md:min-w-125 lg:min-w-145 bg-white rounded-lg border border-gray-200
             hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 hover:-translate-x-1
             transition-all duration-300 flex flex-col md:flex-row overflow-hidden"
      >
         {/* Image */}
         <div className="relative w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
            <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
               26% Off
            </span>

            <span className="absolute bottom-0 left-0 bg-yellow-400 text-xs px-3 py-1 font-semibold">
               Best Seller
            </span>

            {/* Dummy Image */}
            {/* <div className="w-full h-full min-h-56 bg-gray-300" /> */}
            <img
               src="product.webp"
               alt=""
               className="w-full min-h-56 h-full max-h-90 object-cover"
            />
         </div>

         {/* Content */}
         <div
            className="
      w-full md:w-1/2 p-6 flex flex-col justify-between
      text-center md:text-left
    "
         >
            <div>
               <h3 className="text-base font-semibold text-gray-900 mb-2 truncate">
                  Downtown Theme for nopCommerce
               </h3>
               <div className="h-15 hidden md:block">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 overflow-clip">
                     A stylish, responsive theme crafted for modern ecommerce
                     brands.Optimized for performance and conversion.
                  </p>
               </div>
               <div className="border-b border-gray-300 pt-10 md:hidden" />
               {/* Pricing */}
               <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
                  <span className="text-sm text-gray-400 line-through">
                     $199.00
                  </span>
                  <span className="text-lg font-semibold text-sky-500">
                     $149.00
                  </span>
               </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
               <button className="flex-1 bg-sky-500 text-white flex items-center justify-center text-sm py-2 rounded-md hover:bg-sky-600 transition">
                  <Monitor size={16} className="hidden lg:block mr-1" /> LIVE
                  DEMO
               </button>
               <button className="flex-1 bg-slate-900 flex items-center justify-center text-white text-sm py-2 rounded-md hover:bg-slate-800 transition">
                  <FileText size={16} className="hidden lg:block mr-1" />{' '}
                  DETAILS
               </button>
            </div>
         </div>
      </div>
   );
}
