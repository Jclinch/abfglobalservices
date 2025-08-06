'use client';

import { motion } from 'framer-motion';

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
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">What Our Clients Say</h2>
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
              className="bg-gray-50 rounded-xl shadow-md p-6 text-left"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-4">&quot;{testimonial.quote}&quot;</p>
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
