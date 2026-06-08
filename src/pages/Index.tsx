import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import HobbiesSection from "@/components/HobbiesSection";
import GoalsSection from "@/components/GoalsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ExperienceSection />
    <ProjectsSection />
    <AchievementsSection />
    <HobbiesSection />
    <GoalsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
