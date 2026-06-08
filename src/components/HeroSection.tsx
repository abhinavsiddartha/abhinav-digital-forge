import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState, useEffect } from "react";

const titles = ["Full Stack Developer", "DevOps Enthusiast", "AI Explorer"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="mb-8">
        <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-[3px] border-accent/50 shadow-lg shadow-accent/15 ring-4 ring-primary/20 ring-offset-2 ring-offset-background">
          <img src={profilePhoto} alt="Abhinav Siddartha" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Chamarty <span className="text-gradient">Abhinav Siddartha</span>
      </h1>
      <p className="text-xl text-primary font-medium mb-4 h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </p>
      <p className="text-muted-foreground italic mb-4 max-w-xl">
        "Engineering Intelligent Solutions with Code, Creativity & Curiosity"
      </p>
      <p className="text-muted-foreground max-w-2xl mb-8">
        Computer Science student specializing in Full Stack Development and AI-driven systems, passionate about building scalable, impactful digital solutions.
      </p>
      <div className="flex gap-4 mb-16">
        <a href="#projects" className="px-6 py-3 bg-accent rounded-lg font-medium text-accent-foreground hover:opacity-90 transition">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition">
          Contact Me
        </a>
      </div>
      <a href="#about" className="animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
