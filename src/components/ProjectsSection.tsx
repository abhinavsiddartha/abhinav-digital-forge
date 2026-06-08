import { ExternalLink } from "lucide-react";

const projects = [
  { title: "ReServe", desc: "Cross-platform app connecting hotels and NGOs for efficient food redistribution with real-time tracking and optimized logistics.", tags: ["Flutter", "Dart", "Firebase", "Google Maps API"] },
  { title: "AttendEase", desc: "AI-powered attendance system using real-time face recognition with admin dashboard and exportable reports.", tags: ["React.js", "Flask", "Python", "SQLite"] },
  { title: "DNA/RNA Sequencer", desc: "Bioinformatics project analyzing biological data to identify genetic patterns using machine learning.", tags: ["Python", "Data Analysis", "ML"] },
  { title: "NutriVision AI", desc: "Intelligent nutrition tracking app detecting nutrient gaps and early deficiency indicators.", tags: ["AI", "Mobile App", "Nutrition Intelligence"], link: "https://nutri-vision-beryl.vercel.app" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="section-card hover-glow flex flex-col">
            <h3 className="font-bold text-foreground text-xl mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t) => (
                <span key={t} className="skill-tag text-xs">{t}</span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition w-fit"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
