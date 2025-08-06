import './globals.css';
import { Inter } from 'next/font/google';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // ✅ Import the navbar

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Abf & Sons Global Services Ltd',
  description:
    'Abf & Sons Global Services Ltd offers instant loans, proof of funds (POF), flexible payment plans, and access to personal financial managers in Lekki, Lagos, Nigeria.',
  metadataBase: new URL('https://abfglobalservices.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <SEO />
        <Navbar /> {/* ✅ Now at the top */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
