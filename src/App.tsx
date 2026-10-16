import Hero from "./components/hero/Hero";
import QuickFacts from "./components/hero/QuickFacts";
import About from "./components/hero/about/Abot";
import Experience from "./components/hero/experience/Experience";
import TechStack from "./components/hero/TechStack";
import Vision from "./components/vision/Vision";
import Footer from "./components/footer/Footer";
import { ProjectsSection } from "./components/projects/projectsSection";
import { ExtrasSection } from "./components/extra/extraSection";
import { Reveal } from "./components/Reveal";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Reveal>
          <QuickFacts />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <ExtrasSection />
        </Reveal>
        <Reveal>
          <Vision />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}

export default App;
