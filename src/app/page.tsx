import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-w bg-blue-300">
      <Navbar />
      <Header />
    </main>
  );
}