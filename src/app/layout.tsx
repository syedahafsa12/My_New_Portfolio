import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Footer from "@/components/footer";
import "./globals.css";
import Testimonial_cards from '@/components/testimonial_cards';
// import navb from "./components/page";
import Navbar from "@/components/Navbar";
// import { Projects } from '@/components/project';
import { ThreeDCardDemo } from '@/components/d-card';
import Footer from '@/components/footer';
import { Projects } from "@/components/project";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syeda Hafsa",
  description: "My Portfolio",
  icons:{
    icon:['./favicon.ico'],
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Navbar /> */}
        {children}
       {/* <Footer /> */}
       </body>
    </html>
  );
}
