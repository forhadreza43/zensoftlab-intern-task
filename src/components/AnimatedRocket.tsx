// import { motion } from 'framer-motion';
import { motion } from 'motion/react';

interface AnimatedRocketProps {
   onClick: () => void;
}

const AnimatedRocket = ({ onClick }: AnimatedRocketProps) => {
   return (
      <motion.button
         onClick={onClick}
         className="cursor-pointer focus:outline-none"
         animate={{
            y: [0, -12, 0],
         }}
         transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
         }}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
         aria-label="Scroll to top"
      >
         <svg
            width="48"
            height="64"
            viewBox="0 0 48 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* Rocket body */}
            <ellipse
               cx="24"
               cy="28"
               rx="10"
               ry="20"
               className="fill-rocket-body"
            />

            {/* Rocket tip */}
            <path d="M24 4 L30 20 L18 20 Z" className="fill-rocket-body" />

            {/* Window */}
            <circle cx="24" cy="22" r="5" className="fill-footer-bg" />
            <circle cx="24" cy="22" r="3" fill="hsl(200, 100%, 80%)" />

            {/* Left fin */}
            <path d="M14 40 L10 50 L18 42 Z" className="fill-rocket-body" />

            {/* Right fin */}
            <path d="M34 40 L38 50 L30 42 Z" className="fill-rocket-body" />

            {/* Flame outer */}
            <motion.path
               d="M18 48 L24 64 L30 48 Q24 52 18 48"
               className="fill-rocket-flame"
               animate={{
                  d: [
                     'M18 48 L24 64 L30 48 Q24 52 18 48',
                     'M18 48 L24 60 L30 48 Q24 54 18 48',
                     'M18 48 L24 64 L30 48 Q24 52 18 48',
                  ],
               }}
               transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  ease: 'linear',
               }}
            />

            {/* Flame inner */}
            <motion.path
               d="M20 48 L24 58 L28 48 Q24 50 20 48"
               className="fill-rocket-flameInner"
               animate={{
                  d: [
                     'M20 48 L24 58 L28 48 Q24 50 20 48',
                     'M20 48 L24 54 L28 48 Q24 52 20 48',
                     'M20 48 L24 58 L28 48 Q24 50 20 48',
                  ],
               }}
               transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  ease: 'linear',
               }}
            />
         </svg>
      </motion.button>
   );
};

export default AnimatedRocket;
