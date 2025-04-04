"use client";

import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#120012] flex flex-col">
      <NavBar />
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 sm:px-40">
          <FloatingBar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
