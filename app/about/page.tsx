// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.png" // Replace with a real image
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
            About <span className="text-blue-400">Us</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Building trust, delivering speed, and offering flexible financial
            solutions for individuals and businesses across Nigeria.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            At{" "}
            <span className="font-semibold">
              ABF & Sons Global Services Ltd
            </span>
            , we provide fast, transparent, and flexible financial services —
            including instant loans, proof of funds (POF), and personal
            financial management — tailored to meet your needs.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our team consists of seasoned financial managers dedicated to
            delivering customized solutions for both individuals and corporate
            clients. With us, you can expect professionalism, confidentiality,
            and unparalleled customer service.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/team.jpg" // Replace with a real image
            alt="ABF Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-900"
          >
            Why Choose ABF & Sons
          </motion.h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We don’t just offer loans — we build long-term relationships based
            on trust and reliability.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Approvals",
                text: "Our streamlined process ensures loan approval within hours.",
                icon: "⚡",
              },
              {
                title: "Flexible Payment Plans",
                text: "We tailor repayment schedules to fit your financial needs.",
                icon: "📅",
              },
              {
                title: "Transparent Processes",
                text: "No hidden fees or surprise charges — full clarity from start to finish.",
                icon: "🔍",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-blue-900"
        >
          Our Core Values
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Integrity",
              text: "We operate with honesty, ensuring complete transparency in all transactions.",
              icon: "🤝",
            },
            {
              title: "Customer-Centric",
              text: "Your needs come first — every decision we make is for your benefit.",
              icon: "💡",
            },
            {
              title: "Excellence",
              text: "We aim to exceed expectations by providing top-tier financial services.",
              icon: "🏆",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">
                {value.title}
              </h3>
              <p className="text-gray-600 mt-2">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Office</h2>
            <p>5th Floor, Prime Tower Plaza, Lekki Phase 1, Lagos, Nigeria.</p>
            <p className="mt-2">Open Monday – Friday: 9:00 AM – 5:00 PM</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
