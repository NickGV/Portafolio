import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { HomeSection } from "./components/HomeSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="bg-gradient-to-tl from-background-light to-background relative">
      <NavBar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
