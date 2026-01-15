import { Link, useLocation } from 'react-router';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const NotFound = () => {
   const location = useLocation();

   useEffect(() => {
      console.error(
         '404 Error: User attempted to access non-existent route:',
         location.pathname
      );
   }, [location.pathname]);

   return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
         {/* Ambient background motion */}
         <motion.div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
         />
         <motion.div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
         />

         {/* Content */}
         <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 text-center text-primary-foreground"
         >
            <motion.h1
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5 }}
               className="mb-4 text-8xl font-extrabold tracking-tight"
            >
               404
            </motion.h1>

            <p className="mx-auto mb-8 max-w-md text-lg text-primary-foreground/80">
               The page you’re looking for doesn’t exist or hasn’t been deployed
               yet. Let’s get you back on track.
            </p>

            <Link
               to="/"
               className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
               <ArrowLeft className="h-4 w-4" />
               Return Home
            </Link>
         </motion.div>
      </div>
   );
};

export default NotFound;
