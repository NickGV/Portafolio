import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/layout/Footer";
import { HomeSection } from "../components/sections/HomeSection";
import { NavBar } from "../components/layout/NavBar";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { AboutSection } from "../components/sections/AboutSection";

export const Main = () => {
  return (
    <div className="relative z-10">
      <NavBar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
