import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroTest from "./components/HeroTest";
import LinkCard from "./components/LinkCard";
import Skills from "./components/Skills";
// import TestComp from "./components/TestComponent";
import ProjectSection from "./components/ProjectSection";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-blue-300">
      <Navbar />
      <HeroSection />
      {/* <HeroTest /> */}
      <LinkCard />
      {/* <TestComponent /> */}
      {/* <Header /> */}
      <Skills />
      <ProjectSection />
      <Experiences />
      {/* <TestComp /> */}
      <FormSection />
      <Footer />
    </main>
  );
}