import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Healthcare Jobs",
    template: "%s | Healthcare Jobs",
  },
  description:
    "Discover healthcare job opportunities, including positions for doctors, nurses, and other professionals in the medical field.",
  openGraph: {
    title: "Healthcare Jobs",
    description:
      "Discover healthcare job opportunities, including positions for doctors, nurses, and other professionals in the medical field.",
    url: baseUrl,
    siteName: "Healthcare Jobs Portal",
    images: [
      {
        url: `/healthcare-jobs.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Healthcare Jobs",
    description:
      "Explore healthcare job listings for doctors, nurses, and other medical professionals. Find your next career opportunity today!",
    creator: "Your Name or Brand",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const epilogue = localFont({
  src: "./fonts/Epilogue-VariableFont_wght.ttf",
  variable: "--font-epilogue",
  weight: "400 600 700 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.variable}>
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <nav className="flex  items-center justify-center px-4 container mx-auto">
            <Image src="/images/logo.jpg" alt="logo" width={80} height={80} />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
