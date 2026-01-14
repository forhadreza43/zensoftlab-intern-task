import ClientSuccessCard from "./ClientSuccessCard";


export default function ClientSuccessSection() {
  return (
     <section className="py-12 md:py-18 relative overflow-hidden">
        <div className="md:w-[95%] lg:w-[90%] max-w-360 mx-auto  px-4">
           <div className="relative z-10 container mx-auto px-4">
              <h2 className=" text-center mb-4 text-2xl md:text-3xl font-bold">
                 Client Success Stories
              </h2>
              <p className="text-gray-600 text-center mb-12 mx-auto">
                 Hear valuable feedback and best wishes from the clients we have
                 had the privilege to work with.
              </p>
           </div>
           <div className="space-y-10">
              <ClientSuccessCard
                 name="Chris Golden"
                 title="Director, Product Development"
                 company="Mas Direct Network"
                 logoUrl="/mas-direct_logo_lg.png"
                 youtubeId="YOUR_YOUTUBE_VIDEO_ID"
              />
              <ClientSuccessCard
                 name="Vinay Mehta"
                 title="COO, Gothem Manufacturing"
                 logoUrl="/cropped-Gotham.jpg"
                 youtubeId="YOUR_YOUTUBE_VIDEO_ID"
                 videoLeftOnDesktop={true}
              />
           </div>
        </div>
     </section>
  );
}
