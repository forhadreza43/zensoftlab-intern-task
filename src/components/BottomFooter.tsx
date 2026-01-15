import AnimatedRocket from './AnimatedRocket';

const Footer = () => {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <footer className="relative w-full overflow-hidden bg-primary">
         {/* Radial glow background */}
         {/* <div
            className="absolute inset-0"
            style={{
               background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, 
              hsl(210, 100%, 25%) 0%, 
              hsl(220, 70%, 15%) 40%, 
              hsl(220, 70%, 12%) 100%)
          `,
            }}
         /> */}
         <div className="w-full opacity-45 flex z-10 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 pointer-events-none">
            <div
               className="w-[95vw] h-[95vw] rounded-full bg-radial
    from-blue-600
    via-blue-600/80
    to-70%
    to-transparent"
            />
         </div>

         <div className="w-full flex z-20 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 pointer-events-none">
            <div className="w-[80vw] h-[80vw] rounded-full bg-radial from-primary  via-primary to-80% to-transparent" />
         </div>

         <div className="relative z-30 flex flex-col items-center px-6 pt-12 md:pt-16">
            {/* Animated Rocket */}
            <div className="mb-8 md:mb-12">
               <AnimatedRocket onClick={scrollToTop} />
            </div>

            {/* Logo Section */}
            <div className="flex flex-col items-center  opacity-100 pb-8 md:pb-12 pt-8">
               <a href="/" className="flex items-center gap-2 opacity-100">
                  <span className="text-xl font-bold">
                     <span className="text-primary-foreground">Zen</span>
                     {/* <span className="text-primary-foreground">S</span> */}
                     <span className="text-secondary">Soft</span>
                     <span className="text-primary-foreground">Lab</span>
                  </span>
               </a>
               <p className="mt-1 text-xs tracking-wider text-primary-foreground md:text-sm">
                  Your Trusted Solution Partner
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
