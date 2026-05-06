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
import Tape from "./components/Tape";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <Header />
      <div className="flex flex-col">
        <HeroSection />
        {/* Mettre skill en bas de la photo ? */}
        {/* <Tape /> */}
        <Skills />
      </div>
      <div className="z-10 flex flex-col gap-4">
        {/* <HeroTest /> */}
        {/* <LinkCard /> */}
        {/* <TestComponent /> */}
        {/* <Header /> */}
        <ProjectSection />
        {/* <Experiences /> */}
        {/* <TestComp /> */}
        <FormSection />
        <Footer />

      </div>
    </main>
  );
}