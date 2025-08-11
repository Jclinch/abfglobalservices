'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoanCalculator() {
  const [loan, setLoan] = useState(500_000);
  const [duration, setDuration] = useState(6);

  const monthlyRate = 0.05;
  const interest = loan * monthlyRate * duration;
  const totalPayback = Math.round(loan + interest);
  const monthlyPay = Math.round(totalPayback / duration);

  return (
    <div className="w-full max-w-sm mx-auto rounded-xl shadow-lg px-6 py-4 bg-gradient-to-br from-[#e0e0e0]/70 via-[#c0c0c0]/70 to-[#a9a9a9]/70 text-gray-900">
      <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-blue-900">
        Loan Calculator
      </h3>

      {/* Loan Input Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Enter Loan Amount (₦)
        </label>
        <input
          type="number"
          min={10000}
          max={10000000}
          step={10000}
          value={loan}
          onChange={(e) => setLoan(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Loan Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Loan Amount: <span className="text-blue-700">₦{loan.toLocaleString()}</span>
        </label>
        <input
          type="range"
          min={10000}
          max={10000000}
          step={10000}
          value={loan}
          onChange={(e) => setLoan(Number(e.target.value))}
          className="w-full accent-yellow-400"
        />
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-800 mb-1">
          Duration: <span className="text-blue-700">{duration} Month(s)</span>
        </label>
        <input
          type="range"
          min={1}
          max={24}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full accent-yellow-400"
        />
      </div>

      {/* Slimmer Results */}
      <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-center mb-4">
        <div className="bg-white/90 p-2 rounded-md shadow-sm">
          <p className="text-gray-600 font-bold">Monthly Pay</p>
          <p className="font-bold text-green-700">
            <AnimatedNumber value={monthlyPay} />
          </p>
        </div>

        <div className="bg-white/90 p-2 rounded-md shadow-sm">
          <p className="text-gray-600 font-bold">Term</p>
          <p className="font-bold text-blue-700">{duration} Month(s)</p>
        </div>

        <div className="bg-white/90 p-2 rounded-md shadow-sm">
          <p className="text-gray-600 font-bold">Total Payback</p>
          <p className="font-bold text-red-700">
            <AnimatedNumber value={totalPayback} />
          </p>
        </div>
      </div>

      {/* Apply Now Button */}
      <Link
        href="/contact"
        className="block w-full text-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg shadow transition-all"
      >
        Apply Now
      </Link>
    </div>
  );
}

// ✅ Animated count-up number formatter
function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 500;
    const increment = end / (duration / 10);

    const animate = () => {
      start += increment;
      if (start < end) {
        setDisplay(Math.round(start));
        setTimeout(animate, 10);
      } else {
        setDisplay(end);
      }
    };

    animate();
  }, [value]);

  return <span>₦{display.toLocaleString()}</span>;
}
