import { AboutSection } from "./components/AboutSection";
import { BackgroundComponent } from "./components/Background/BackgroundComponent";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { HomeSection } from "./components/HomeSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <BackgroundComponent>
      <NavBar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </BackgroundComponent>
  );
}

export default App;
