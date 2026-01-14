import React from 'react';

interface ClientSuccessCardProps {
   name: string;
   title: string;
   company?: string;
   logoUrl: string;
   youtubeId: string;
   videoLeftOnDesktop?: boolean;
}

const ClientSuccessCard: React.FC<ClientSuccessCardProps> = ({
   name,
   title,
   company="",
   logoUrl,
   youtubeId,
   videoLeftOnDesktop = false,
}) => {
   return (
      <div
         style={{ boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.2)' }}
         className="bg-white rounded-xl shadow-2xl shadow-black/25 overflow-hidden"
      >
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Video */}
            <div
               className={
                  `w-full h-65 sm:h-80 lg:h-full lg:min-h-96 ` +
                  (videoLeftOnDesktop ? 'lg:order-1' : 'lg:order-2')
               }
            >
               <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  title="Client Success Video"
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               />
            </div>

            {/* Content */}
            <div
               className={
                  `flex flex-col justify-center p-6 sm:p-10 ` +
                  (videoLeftOnDesktop ? 'lg:order-2 items-start' : 'lg:order-1 items-start lg:items-end')
               }
            >
               <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                  {name}
               </h3>
               <p className="text-gray-600 font-medium">{title}</p>
               <p className="text-gray-500 mb-6">{company}</p>

               <div className="w-32 h-20 flex items-center">
                  <img
                     src={logoUrl}
                     alt={`${company} logo`}
                     className="object-contain opacity-80"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClientSuccessCard;
