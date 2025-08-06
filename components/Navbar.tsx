'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [passedHero, setPassedHero] = useState(false);

  // Show/hide nav based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setShowNav(currentY < lastScrollY || currentY < 80);
      setLastScrollY(currentY);

      // Detect if we've passed the hero (e.g. 700px)
      if (currentY > 700) {
        setPassedHero(true);
      } else {
        setPassedHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        passedHero
          ? 'bg-gradient-to-br from-blue-900/90 to-[#f4f4f4]/90 shadow border-b border-gray-200'
          : 'bg-transparent'
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="ABF & Sons Logo"
            width={130}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-white hover:text-yellow-400 transition-all duration-200 relative group"
            >
              <span className="group-hover:underline group-hover:underline-offset-4">
                {label}
              </span>
            </Link>
          ))}

          {/* Sticky CTA */}
          <Link
            href="/apply"
            className="ml-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-bold rounded-md text-blue-900 shadow-md transition duration-200"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white px-6 pb-4 border-t border-gray-200 shadow"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-800 hover:text-yellow-500 font-medium"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/apply"
              className="mt-4 block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 rounded-md shadow-md"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
