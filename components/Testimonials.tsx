'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Emeka Okoro',
    title: 'Entrepreneur',
    quote:
      'Abf & Sons helped me access funding at the right time. Their terms were flexible and the support was excellent!',
  },
  {
    name: 'Chinwe Umeh',
    title: 'Small Business Owner',
    quote:
      'I got my Proof of Funds letter within hours! Super fast, reliable and very professional service.',
  },
  {
    name: 'Tunde Bakare',
    title: 'Software Developer',
    quote:
      'The loan calculator was accurate and the disbursement was smooth. Highly recommend ABF Global!',
  },
];

export default function Testimonials() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20; // move range -10 to +10
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative bg-white py-20 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🔹 Curly Line Patterns */}

      {/* Top Left - Blue */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        className="absolute top-6 left-6 w-44 h-24 opacity-40"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <path
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="2"
          d="M0,50 C 40,80 80,20 120,50 C 160,80 200,20 240,50"
        />
      </motion.svg>

      {/* Top Right - Yellow */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 100"
        className="absolute top-6 right-6 w-44 h-24 opacity-40"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `translate(${-mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <path
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          d="M0,50 C 40,20 80,80 120,50 C 160,20 200,80 240,50"
        />
      </motion.svg>

      {/* Bottom Right - Blue */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 80"
        className="absolute bottom-8 right-8 w-40 h-20 opacity-40"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
        }}
      >
        <path
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="1.5"
          d="M0,40 C 30,70 60,10 90,40 C 120,70 150,10 180,40"
        />
      </motion.svg>

      {/* 🔹 Main Content */}
      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Trusted by thousands of individuals and businesses across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="bg-gray-50 rounded-xl shadow-md p-6 text-left relative z-10"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-2">
                <p className="font-semibold text-blue-900">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
