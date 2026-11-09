import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const [view, setView] = useState("home"); // 'home' ou 'projects'

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#212121]">
      <Navbar onNavigate={(page) => setView(page)} />
      <main>
        {view === "home" ? (
          <>
            <Hero />
            <Competencies />
            <Portfolio onNavigateToProjects={() => setView("projects")} />
            <Services />
            <Process />
            <Testimonials />
            <Contact />
          </>
        ) : (
          <ProjectsPage onBack={() => setView("home")} />
        )}
      </main>
      <Footer />
    </div>
  );
}