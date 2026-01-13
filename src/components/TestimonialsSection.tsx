import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
   {
      company: 'Intelisale',
      title: 'EXCEPTIONAL COMMUNICATION, EXPERTISE & ADAPTABILITY',
      quote: "We're most impressed by their exceptional communication, in-depth business knowledge, and remarkable adaptability.",
      name: 'Filip Mitrovic',
      role: 'E-Commerce Product Manager',
      color: 'cyan',
   },
   {
      company: 'Mas Direct Network',
      title: 'Communication was clear and consistent throughout the project',
      quote: 'Brain Station 23 has successfully launched the subscription-based POS platform, improving operational efficiency, enhancing customer engagement, and providing accurate financial tracking.',
      name: 'Chris Golden',
      role: 'Director of Product Development',
      color: 'primary',
   },
   {
      company: 'NCCO',
      title: 'EXCEPTIONAL COMMUNICATION, EXPERTISE & ADAPTABILITY',
      quote: "Brain Station 23's efforts have resulted in a modernized website that significantly improved user engagement and conversion rates. The team follows an agile methodology, ensuring transparency and timely feedback.",
      name: 'Joe Perron',
      role: 'Sr Software Engineering Manager',
      color: 'yellow',
   },
   {
      company: 'Shwapno',
      title: 'Agile, Punctual, and Highly Responsive',
      quote: 'They followed an agile approach, delivered milestones on time, and were highly responsive to our evolving needs.',
      name: 'Syed Amirul Islam',
      role: 'Head of Growth & E-Commerce Platform Dev',
      color: 'pink',
   },
];

const TestimonialsSection = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () =>
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
   const prevSlide = () =>
      setCurrentIndex(
         (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );

   return (
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-card" />

         <div className="relative z-10 container mx-auto px-4">
            <h2 className="section-title text-center mb-4">
               Client Success Stories
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
               Hear valuable feedback and best wishes from the clients we have
               had the privilege to work with.
            </p>

            <div className="max-w-4xl mx-auto">
               <div className="relative">
                  {/* Video placeholder / Testimonial Card */}
                  <div className="glass-card rounded-2xl p-8 md:p-12">
                     <Quote className="w-12 h-12 text-primary/40 mb-6" />

                     <div className="mb-4">
                        <span className="text-primary font-semibold">
                           {testimonials[currentIndex].company}
                        </span>
                     </div>

                     <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                        {testimonials[currentIndex].title}
                     </h3>

                     <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {testimonials[currentIndex].quote}
                     </p>

                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-bold text-xl">
                           {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                           <p className="font-semibold text-foreground">
                              {testimonials[currentIndex].name}
                           </p>
                           <p className="text-sm text-muted-foreground">
                              {testimonials[currentIndex].role}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                     <button
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-border hover:border-primary transition-colors"
                     >
                        <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                     </button>
                     <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                           <button
                              key={i}
                              onClick={() => setCurrentIndex(i)}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                 i === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-muted-foreground/30'
                              }`}
                           />
                        ))}
                     </div>
                     <button
                        onClick={nextSlide}
                        className="p-2 rounded-full border border-border hover:border-primary transition-colors"
                     >
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TestimonialsSection;
