"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaMoneyBillWave,
  FaHandshake,
  FaUserShield,
  FaChartLine,
  FaCreditCard,
} from "react-icons/fa";

const services = [
  {
    title: "Instant Loans",
    description: "Get fast and reliable loan access without delays.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Flexible Payments",
    description: "Tailored repayment plans that fit your financial schedule.",
    icon: <FaCreditCard />,
  },
  {
    title: "Proof of Funds (POF)",
    description: "Authentic POF documentation for financial credibility.",
    icon: <FaUserShield />,
  },
  {
    title: "Personal Manager",
    description: "Work directly with a dedicated financial manager.",
    icon: <FaHandshake />,
  },
  {
    title: "Financial Management",
    description: "Expert support to manage your income, debt & growth.",
    icon: <FaChartLine />,
  },
];

export default function MissionVisionServices() {
  const sectionRef = useRef(null);

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement
  const blueX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yellowX = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Floating animation configs
  const floatingAnim = {
    y: [0, 15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 px-4 overflow-hidden"
    >
      {/* 🔹 Curly Lines Background with Parallax + Floating */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-40 left-0 w-full h-full opacity-10"
        style={{ x: blueX }}
        animate={floatingAnim}
      >
        <path
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="2"
          d="M0,160 C 120,200 240,120 360,160 C 480,200 600,120 720,160 C 840,200 960,120 1080,160 C 1200,200 1320,120 1440,160"
        />
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 100 1440 320"
        className="absolute -top-20 left-0 w-full h-full opacity-10"
        style={{ x: yellowX }}
        animate={{
          y: [0, -10, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <path
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          d="M0,180 C 120,220 240,140 360,180 C 480,220 600,140 720,180 C 840,220 960,140 1080,180 C 1200,220 1320,140 1440,180"
        />
      </motion.svg>

      {/* 🔹 Main Content */}
      <div className="max-w-screen-xl mx-auto text-center space-y-16 relative z-10">
        {/* Mission + Vision */}
        <div className="grid gap-10 md:grid-cols-2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide assessible, affordable, and innovative financial
              solutions that empower individuals and businesses to achieve their
              goals.{" "}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become Africa’s most trusted financial service provider for
              accessible funding, transparency, and sustainable financial
              growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            What We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-left"
              >
                <div className="text-yellow-400 text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
