import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-blue-300">
      <Navbar />
      <HeroSection />
      <Header />


    </main>
  );
}