import type { Testimonial } from "./TestimonialsSection";

const Stars = ({ count }: { count: number }) => (
   <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
         <span key={i} className="text-yellow-400">
            ★
         </span>
      ))}
   </div>
);

export default function TestimonialsCard({ data }: { data: Testimonial }) {
   return (
      <div
         data-slide
         style={{ boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)' }}
         className="
    min-w-full md:min-w-130 lg:min-w-155
    relative bg-white rounded-2xl shadow-lg p-8
    flex flex-col justify-between
  "
      >
         {/* Company Logo */}
         <div className="flex justify-between">
            <img
               src={data.companyLogo}
               alt="Company logo"
               className="h-8 w-auto mb-6"
            />
            {/* Stars */}
            <div>
               <Stars count={data.star} />
            </div>
         </div>

         {/* Content */}
         <div>
            <h3 className="text-lg font-semibold uppercase mb-4 text-gray-900 truncate">
               {data.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">“ {data.quote} ”</p>
         </div>

         {/* Author */}
         <div className="flex items-center gap-4 mt-8">
            <img
               src={data.authorAvatar}
               alt={data.authorName}
               className="w-12 h-12 rounded-full object-cover"
            />
            <div>
               <p className="font-semibold text-gray-900">{data.authorName}</p>
               <p className="text-sm text-gray-500">{data.authorRole}</p>
            </div>
         </div>
      </div>
   );
}
