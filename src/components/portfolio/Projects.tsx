import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "ReServe",
    description: "Cross-platform app connecting hotels and NGOs for efficient food redistribution with real-time tracking and optimized logistics.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    link: null,
  },
  {
    name: "AttendEase",
    description: "AI-powered attendance system using real-time face recognition with admin dashboard and exportable reports.",
    tech: ["React.js", "Flask", "Python", "SQLite"],
    link: null,
  },
  {
    name: "DNA/RNA Sequencer",
    description: "Bioinformatics project analyzing biological data to identify genetic patterns using machine learning.",
    tech: ["Python", "Data Analysis", "ML"],
    link: null,
  },
  {
    name: "NutriVision AI",
    description: "Intelligent nutrition tracking app detecting nutrient gaps and early deficiency indicators.",
    tech: ["AI", "Mobile App", "Nutrition Intelligence"],
    link: "https://food-face-fix.lovable.app/",
  },
];

const Projects = () => (
  <SectionWrapper id="projects">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <div key={p.name} className="glass-card hover-glow gradient-border p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-foreground mb-2">{p.name}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-primary/15 text-primary border border-primary/30">
                {t}
              </span>
            ))}
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Live Demo <ExternalLink size={13} />
            </a>
          )}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
