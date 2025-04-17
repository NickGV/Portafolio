import { AboutSection } from "./components/AboutSection";
import { BackgroundWatermark } from "./components/Background/BackgroundWatermark";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { HomeSection } from "./components/HomeSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="relative bg-gradient-radial from-background to-background-light">
      <BackgroundWatermark />
      <div className="relative z-10">
        <NavBar />
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
