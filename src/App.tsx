import Hero from "./components/hero/Hero";
import QuickFacts from "./components/hero/QuickFacts";
import About from "./components/hero/about/Abot";
import Experience from "./components/hero/experience/Experience";
import TechStack from "./components/hero/TechStack";
import Vision from "./components/vision/Vision";
import Footer from "./components/footer/Footer";
import { ProjectsSection } from "./components/projects/projectsSection";
import { ExtrasSection } from "./components/extra/extraSection";

function App() {
  return (
    <>
      <Hero />
      <main>
        <QuickFacts />
        <About />
        <Experience />
        <ProjectsSection />
        <TechStack />
        <ExtrasSection />
        <Vision />
      </main>
      <Footer />
    </>
  );
}

export default App;
