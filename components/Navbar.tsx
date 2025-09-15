"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import menuAnimation from "@/public/menu.json"; // ✅ Make sure menu.json is in public

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [passedHero, setPassedHero] = useState(false);
  const pathname = usePathname();

  // Lottie ref for controlling play state
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 80);
      setLastScrollY(currentY);
      setPassedHero(currentY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Play animation on menu toggle
  useEffect(() => {
    if (lottieRef.current) {
      if (isOpen) {
        lottieRef.current.play();
      } else {
        lottieRef.current.setDirection(-1); // reverse animation
        lottieRef.current.play();
      }
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        passedHero
          ? "bg-gradient-to-br from-[#b8b8b8]/90 via-[#dcdcdc]/90 to-[#f5f5f5]/90 shadow border-b border-gray-300"
          : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="ABF & Sons Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-bold transition-all duration-200 relative group ${
                pathname === href
                  ? "text-yellow-400 font-extrabold underline underline-offset-4"
                  : "text-yellow-400 hover:text-white"
              }`}
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

        {/* Mobile Menu Button (Controlled Lottie Animation) */}
        <div
          className="md:hidden w-10 h-10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={menuAnimation}
            loop={false}
            autoplay={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white px-6 pb-4 border-t border-gray-200 shadow"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-bold ${
                  pathname === href
                    ? "text-yellow-500"
                    : "text-gray-800 hover:text-yellow-500"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/apply-loan"
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
