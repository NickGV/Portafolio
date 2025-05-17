import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { HomeSection } from "../components/HomeSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { AboutSection } from "../components/AboutSection";

export const Main = () => {
  return (
    <div className="relative z-10">
      <NavBar />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
