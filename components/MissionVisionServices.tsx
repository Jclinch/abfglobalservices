'use client';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaHandshake, FaUserShield, FaChartLine, FaCreditCard } from 'react-icons/fa';

const services = [
  {
    title: 'Instant Loans',
    description: 'Get fast and reliable loan access without delays.',
    icon: <FaMoneyBillWave />,
  },
  {
    title: 'Flexible Payments',
    description: 'Tailored repayment plans that fit your financial schedule.',
    icon: <FaCreditCard />,
  },
  {
    title: 'Proof of Funds (POF)',
    description: 'Authentic POF documentation for financial credibility.',
    icon: <FaUserShield />,
  },
  {
    title: 'Personal Manager',
    description: 'Work directly with a dedicated financial manager.',
    icon: <FaHandshake />,
  },
  {
    title: 'Financial Management',
    description: 'Expert support to manage your income, debt & growth.',
    icon: <FaChartLine />,
  },
];

export default function MissionVisionServices() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center space-y-16">
        {/* Mission + Vision */}
        <div className="grid gap-10 md:grid-cols-2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower individuals and businesses through instant access to funds, financial management tools, and trusted documentation, ensuring financial freedom and confidence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become Africa’s most trusted financial service provider for accessible funding, transparency, and sustainable financial growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-10">What We Offer</h2>
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
                <div className="text-yellow-400 text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
