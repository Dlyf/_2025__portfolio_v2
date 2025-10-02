import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroTest from "./components/HeroTest";
import LinkCard from "./components/LinkCard";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-blue-300">
      <Navbar />
      <HeroSection />
      {/* <HeroTest /> */}
      <LinkCard />
      {/* <Header /> */}
      <Skills />


    </main>
  );
}