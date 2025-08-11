"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  details: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Instant Loan Services",
    description:
      "Quick access to funds with flexible repayment plans tailored to your needs.",
    details:
      "Our Instant Loan Services are designed for speed, reliability, and convenience. With minimal paperwork and quick approvals, we help you bridge financial gaps in record time. Whether for personal or business purposes, we ensure transparent terms and a stress-free process.",
    icon: "💰",
  },
  {
    title: "Proof of Funds (POF)",
    description:
      "Secure and verifiable proof of funds for international transactions.",
    details:
      "We provide credible Proof of Funds to facilitate global trade, investments, and immigration purposes. Our POF service is recognized by financial institutions worldwide, ensuring your transactions proceed smoothly.",
    icon: "📜",
  },
  {
    title: "Financial Management Services",
    description:
      "Expert financial advisory to help you grow and manage wealth.",
    details:
      "Our team of seasoned financial managers guides clients in investment planning, expense control, and wealth growth. We work closely with you to design strategies that align with your long-term financial goals.",
    icon: "📊",
  },
  {
    title: "Corporate Credit Facilities",
    description: "Tailored financing solutions for businesses of all sizes.",
    details:
      "From SMEs to large corporations, we offer credit lines that help your business scale efficiently. We assess your unique needs and provide favorable terms for sustainable growth.",
    icon: "🏢",
  },
  {
    title: "Asset Financing",
    description: "Flexible financing options for acquiring essential assets.",
    details:
      "Whether you’re looking to purchase vehicles, equipment, or property, our asset financing solutions provide the capital you need while allowing you to spread payments over time.",
    icon: "🚗",
  },
  {
    title: "Investment Advisory",
    description:
      "Professional guidance on profitable investment opportunities.",
    details:
      "We research and recommend secure, high-return investments tailored to your risk appetite and objectives. Our advice covers real estate, stocks, bonds, and more.",
    icon: "📈",
  },
];

// Utility to create randomized animation data
const generateFloatingIcons = (count: number) =>
  [...Array(count)].map((_, i) => ({
    id: i,
    top: `${30 + Math.random() * 60}%`,
    left: `${Math.random() * 90}%`,
    size: 40 + Math.random() * 40,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 6,
  }));

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const floatingIcons = generateFloatingIcons(6); // more variation

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* 🔹 Floating Currency Icons */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute z-50 pointer-events-none"
          style={{
            top: icon.top,
            left: icon.left,
            opacity: 0.08,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: icon.duration,
            delay: icon.delay,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/shape_dollar_1.webp"
            alt="Floating Dollar Icon"
            width={icon.size}
            height={icon.size}
          />
        </motion.div>
      ))}

      {/* 🔹 Curly Lines */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-[35%] left-10 w-40 h-40 opacity-20 z-50 pointer-events-none"
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <path
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="2"
          d="M0,160 C 120,200 240,120 360,160 C 480,200 600,120 720,160"
        />
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-[5%] right-10 w-40 h-40 opacity-20 z-50 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <path
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          d="M0,160 C 120,200 240,120 360,160 C 480,200 600,120 720,160"
        />
      </motion.svg>

      {/* Hero Section */}
      <section className="relative min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="About ABF & Sons"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            At ABF & Sons Global Services Ltd, we provide innovative financial
            solutions designed to empower individuals and businesses.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedService(service)}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg shadow transition-all">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              >
                ✖
              </button>

              <div className="text-center">
                <div className="text-5xl mb-4">{selectedService.icon}</div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {selectedService.title}
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {selectedService.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
