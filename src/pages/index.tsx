import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/hero";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import Contacts from "@/components/contacts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Contacts />
    </>
  );
}
