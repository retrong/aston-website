import type { Metadata } from "next";
import {Poppins} from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", '200', '400', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Aston Website",
  description: "Revolutionizing the real estate industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark poppins">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
