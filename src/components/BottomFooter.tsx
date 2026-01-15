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
         <div className="w-full opacity-45 flex z-10 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-14 pointer-events-none">
            <div
               className="w-screen h-[100vw] rounded-full bg-radial from-blue-600 via-blue-600/80 to-70% to-transparent"
            />
         </div>

         <div className="w-full flex z-20 justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-5 pointer-events-none">
            <div className="w-[85vw] h-[85vw] rounded-full bg-radial from-primary  via-primary to-80% to-transparent" />
         </div>

         <div className="relative z-30 flex flex-col items-center px-6 pt-12 md:pt-16 pb-23">
            {/* Animated Rocket */}
            <div className="mb-2 md:mb-12">
               <AnimatedRocket onClick={scrollToTop} />
            </div>

            {/* Logo Section */}
            <div className="flex flex-col items-center  opacity-100 pb-3 md:pb-12 pt-4">
               <a href="/" className="flex items-center gap-2 opacity-100">
                  <span className="text-xl font-bold">
                     <span className="text-primary-foreground">Zen</span>
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
