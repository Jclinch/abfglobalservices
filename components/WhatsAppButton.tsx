'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phone = '2348077770546'; // Replace with your WhatsApp number (without leading +)
  const message = encodeURIComponent('Hello, I’d like to know more about your loan services.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 md:hidden bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
