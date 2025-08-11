import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo & Brief */}
        <div>
          <Image
            src="/abf logo.jpg"
            alt="Abf & Sons Logo"
            width={160}
            height={40}
            className="mb-4"
          />
          <p className="text-sm text-gray-300">
            Abf & Sons Global Services Ltd is a licensed financial services provider based in Lekki,
            Lagos. We offer fast loans, POF, and reliable financial solutions tailored for Nigerians.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">5th Floor, Prime Tower Plaza, Lekki Phase 1, Lagos, Nigeria.</p>
          <p className="text-sm text-gray-300 mt-1">Phone: <a href="tel:+2348012345678" className="text-yellow-400">+234 909 777 2183</a></p>
          <p className="text-sm text-gray-300 mt-1">Email: <a href="mailto:info@abfglobalservices.com" className="text-yellow-400">info@abfglobalservices.com</a></p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Abf & Sons Global Services Ltd. All rights reserved.
      </div>
    </footer>
  );
}
