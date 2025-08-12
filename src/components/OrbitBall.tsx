import { motion } from 'framer-motion';

export default function OrbitBall() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className="w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-neutral-800 to-black rounded-full shadow-2xl relative overflow-hidden"
    >
      {/* Pulsing outline */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 2 ? 'bg-white' : 'bg-black'}`}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: ['0%', '-20%', '0%'], opacity: [1, 0, 1] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Planet surface details */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-8 h-8 bg-white rounded-full absolute top-6 left-8" />
        <div className="w-4 h-4 bg-white rounded-full absolute bottom-12 right-6" />
        <div className="w-6 h-6 bg-white rounded-full absolute top-16 right-12" />
      </div>

      {/* Stylized Hand Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-white">
          <path
            d="M12 2C13.1 2 14 2.9 14 4V8L15.5 8C16.3 8 17 8.7 17 9.5S16.3 11 15.5 11L14 11V13L15.5 13C16.3 13 17 13.7 17 14.5S16.3 16 15.5 16L14 16V18C14 19.1 13.1 20 12 20S10 19.1 10 18V16L8.5 16C7.7 16 7 15.3 7 14.5S7.7 13 8.5 13L10 13V11L8.5 11C7.7 11 7 10.3 7 9.5S7.7 8 8.5 8L10 8V4C10 2.9 10.9 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.div>
  );
}
