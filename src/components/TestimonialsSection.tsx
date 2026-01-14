import React from 'react';
import { HorizontalSlider } from './ui/horizontal-slider';
import TestimonialsCard from './TestimonialsCard';
import { Grip } from 'lucide-react';

export type Testimonial = {
   id: number;
   companyLogo: string;
   title: string;
   quote: string;
   authorName: string;
   authorRole: string;
   authorAvatar: string;
   star: number;
}

const testimonials: Testimonial[] = [
   {
      id: 1,
      title: 'Exceptional Communication, Expertise & Adaptability',
      quote: "We're most impressed by their exceptional communication, in-depth business knowledge, and remarkable adaptability.",
      authorName: 'Filip Mitrovic',
      authorRole: 'E-Commerce Product Manager',
      companyLogo: 'cropped-Gotham.jpg',
      authorAvatar: 'profile.jpg',
      star: 5,
   },
   {
      id: 2,
      title: 'Communication Was Clear and Consistent Throughout',
      quote: 'Brain Station 23 has successfully launched the subscription-based POS platform, improving operational efficiency, enhancing customer engagement, and providing accurate financial tracking.',
      authorName: 'Chris Golden',
      authorRole: 'Director of Product Development',
      companyLogo: 'cropped-Gotham.jpg',
      authorAvatar: 'profile.jpg',
      star: 3,
   },
   {
      id: 3,
      title: 'Communication Was Clear and Consistent Throughout',
      quote: 'Brain Station 23 has successfully launched the subscription-based POS platform, improving operational efficiency, enhancing customer engagement, and providing accurate financial tracking.',
      authorName: 'Chris Golden',
      authorRole: 'Director of Product Development',
      companyLogo: 'cropped-Gotham.jpg',
      authorAvatar: 'profile.jpg',
      star: 4,
   },
];

const TestimonialsSection: React.FC = () => {
   return (
      <section className="relative w-full bg-white py-20 overflow-hidden">
         {/* Blue background shape */}
         <div className="absolute left-0 top-0 h-full w-[80%] md:w-[60%] lg:w-[45%] bg-sky-500 rounded-br-[80px]" />

         <div className="relative max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-white">
               <h2 className="text-sm tracking-widest font-semibold uppercase flex items-center gap-3">
                  Testimonials
                  <span className="flex gap-1">
                     <Grip className="w-8 h-8 opacity-50" />
                  </span>
               </h2>
            </div>

            {/* Slider */}
            <HorizontalSlider gap={24}>
               {testimonials.map((t) => (
                  <TestimonialsCard key={t.id} data={t} />
               ))}
            </HorizontalSlider>
         </div>
      </section>
   );
};

export default TestimonialsSection;
