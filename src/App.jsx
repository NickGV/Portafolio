import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <ProjectsSection/>
      <SkillsSection/>
      <ContactSection/>
    </>
  );
}

export default App;
