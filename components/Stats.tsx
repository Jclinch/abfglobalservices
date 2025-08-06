'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Mocked stats to animate
const stats = [
  { label: 'Clients Served', value: 2500 },
  { label: 'Loans Disbursed', value: 1.8, suffix: 'B' },
  { label: 'POF Issued', value: 650 },
  { label: 'Financial Managers', value: 40 },
];

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

// Counter component with live animation
function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const increment = end / (duration * 60); // ~60 steps for smoother animation
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(current);
      }
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-yellow-400">
      {Math.round(count).toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} duration={2} />
              <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
