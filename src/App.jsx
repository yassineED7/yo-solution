import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFEFEF] text-[#212121]">
      <Navbar />
      <main>
        <Hero />
        <Competencies />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}