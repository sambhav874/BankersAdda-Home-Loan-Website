"use client"; // This directive makes this component a Client Component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar/page';
import { Toaster } from "react-hot-toast";
import Footer from '../components/layout/Footer';
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Bankers Adda",
  description: "We cater to Finance and Loan requirements.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="smooth-scroll">
      <SessionProvider>
        <body className={inter.className}>
          <Toaster position="top-right" reverseOrder={false} />
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
