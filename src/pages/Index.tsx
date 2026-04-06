import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Objective from "@/components/portfolio/Objective";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Leadership from "@/components/portfolio/Leadership";
import Certification from "@/components/portfolio/Certification";
import LearningGoals from "@/components/portfolio/LearningGoals";
import Hobbies from "@/components/portfolio/Hobbies";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Objective />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Leadership />
      <Certification />
      <LearningGoals />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
