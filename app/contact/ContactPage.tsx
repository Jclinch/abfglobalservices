//app\contact\ContactPage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50">
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
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is ready to help you
            with loans, proof of funds, and financial management solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-8 px-2">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-900">Get in Touch</h2>
          <p className="text-gray-700">
            Reach out to us directly via phone, email, or by filling out the
            form. Our representatives are available during working hours to
            assist you.
          </p>

          <div>
            <p className="font-semibold text-blue-900">📍 Office Address</p>
            <p className="text-gray-700">
              5th Floor, Prime Tower Plaza, Lekki Phase 1, Lagos, Nigeria.{" "}
            </p>
          </div>

          <div>
            <p className="font-semibold text-blue-900">📞 Phone</p>
            <p className="text-gray-700">+234 807 777 0546</p>
            <p className="text-gray-700">+234 909 984 1000</p>
          </div>

          <div>
            <p className="font-semibold text-blue-900">✉️ Email</p>
            <p className="text-gray-700">info@abfglobalservices.com</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-md transition duration-200"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-sm text-blue-900">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
