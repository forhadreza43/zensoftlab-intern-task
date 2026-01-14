export default function ProductCard() {
   return (
      <div className="bg-white rounded-lg shadow-sm flex overflow-hidden">
         {/* Image */}
         <div className="relative w-[45%] bg-gray-100 flex items-center justify-center">
            <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
               26% Off
            </span>

            <span className="absolute bottom-0 left-0 bg-yellow-400 text-xs px-3 py-1 font-semibold">
               Best Seller
            </span>

            {/* Dummy Image */}
            <div className="w-40 h-56 bg-gray-300 rounded-md" />
         </div>

         {/* Content */}
         <div className="w-[55%] p-6 flex flex-col justify-between">
            <div>
               <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Downtown Theme for nopCommerce
               </h3>

               <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  A stylish, responsive theme crafted for modern ecommerce
                  brands. Optimized for performance and conversion.
               </p>

               {/* Pricing */}
               <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                     $199.00
                  </span>
                  <span className="text-lg font-semibold text-sky-500">
                     $149.00
                  </span>
               </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
               <button className="flex-1 bg-sky-500 text-white text-sm py-2 rounded-md hover:bg-sky-600 transition">
                  LIVE DEMO
               </button>
               <button className="flex-1 bg-slate-900 text-white text-sm py-2 rounded-md hover:bg-slate-800 transition">
                  DETAILS
               </button>
            </div>
         </div>
      </div>
   );
}
