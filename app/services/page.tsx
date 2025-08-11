import type { Metadata } from "next";
import ServicesPage from "@/app/services/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | ABF & Sons Global Services Ltd",
  description:
    "Discover ABF & Sons Global Services Ltd's financial solutions including instant loans, proof of funds, asset financing, investment advisory, and corporate credit facilities. Empowering individuals and businesses with expert services.",
  keywords: [
    "ABF & Sons",
    "Financial Services Nigeria",
    "Instant Loans",
    "Proof of Funds",
    "Investment Advisory",
    "Corporate Credit",
    "Asset Financing",
    "Wealth Management",
    "Business Financing"
  ],
  openGraph: {
    title: "Our Services | ABF & Sons Global Services Ltd",
    description:
      "Explore ABF & Sons Global Services Ltd's wide range of financial services to meet your personal and business needs.",
    url: "https://your-domain.com/services",
    siteName: "ABF & Sons Global Services Ltd",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "ABF & Sons Global Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
