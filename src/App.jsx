import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
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
      <FooterSection/>
    </>
  );
}

export default App;
