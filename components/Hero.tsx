// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className="relative min-h-[757px] w-full overflow-hidden bg-black">
//       {/* Zooming background image */}
//       <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.1 }}
//         transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
//         className="absolute inset-0 z-0"
//       >
//         <Image
//           src="/hero.png"
//           alt="Hero Background"
//           fill
//           priority
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Overlay to darken bg and boost text contrast */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Content */}
//       <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Text Section */}
//         <motion.div
//           className="text-center md:text-left w-full md:w-1/2 text-white"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
//             Fast <span className="text-yellow-400">Loans</span>, <br />
//             Flexible <span className="text-yellow-400">Payments</span>.
//           </h1>

//           <p className="mt-6 text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed">
//             At <span className="font-semibold text-yellow-400">ABF & Sons Global Services Ltd</span>,
//             we provide you with proof of funds (POF), instant loans, and personal financial management services — tailored to your needs.
//           </p>

//           <Link href="https://wa.me/c/2349097772183" target="_blank">
//             <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg transition-all shadow-lg w-full sm:w-auto">
//               💬 Chat With Us on WhatsApp
//             </button>
//           </Link>
//         </motion.div>

//         {/* Logo Image */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* <Image
//             src="/logo.jpg"
//             alt="ABF Logo"
//             width={450}
//             height={450}
//             className="object-contain max-w-[90%] h-auto"
//             priority
//           /> */}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LoanCalculator from './LoanCalculator';

export default function Hero() {
  return (
    <section className="relative min-h-[757px] w-full overflow-hidden bg-black ">
      {/* Zooming background image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left w-full md:w-1/2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-[70px]">
            Fast <span className="text-yellow-400">Loans</span>, <br />
            Flexible <span className="text-yellow-400">Payments</span>.
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed">
            At <span className="font-semibold text-yellow-400">ABF & Sons Global Services Ltd</span>,
            we provide proof of funds (POF), instant loans, and personal financial management services — tailored to your needs.
          </p>

          <Link href="https://wa.me/c/2349097772183" target="_blank">
            <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg transition-all shadow-lg w-full sm:w-auto">
              💬 Chat With Us on WhatsApp
            </button>
          </Link>
        </motion.div>

        {/* Calculator beside text */} 
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="w-full md:w-1/2 flex justify-center md:justify-end"
>
  <div className="w-[90%] max-w-xs md:mr-[-10px] md:mb-[-300px] z-30">
    <LoanCalculator />
  </div>
</motion.div>

      </div>
    </section>
  );
}
