import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinAI – AI Personal Finance Dashboard",
    desc: "Developed a full-stack AI-powered personal finance platform enabling secure expense tracking, income management, interactive financial analytics, and AI-driven spending insights. Built RESTful APIs with FastAPI, implemented JWT authentication, integrated PostgreSQL for persistent data storage, and leveraged Groq Llama 3.3 to provide personalized financial recommendations based on user transaction history.",
    tags: ["React.js", "FastAPI", "PostgreSQL", "Groq AI", "JWT"],
  },
  {
    title: "NutriVision AI",
    desc: "AI-powered nutrition platform that performs intelligent food analysis, dietary assessment, nutrition monitoring, and personalized health tracking. Designed to detect nutrient gaps and support evidence-based nutritional recommendations.",
    tags: [
      "Flutter",
      "Firebase",
      "AI",
      "Computer Vision",
      "Nutrition Intelligence",
    ],
    link: "https://nutri-vision-beryl.vercel.app",
  },
  {
    title: "ReServe",
    desc: "Cross-platform mobile application connecting hotels and NGOs for efficient food redistribution with real-time tracking, optimized logistics, and donation management.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
  },
  {
    title: "AttendEase",
    desc: "AI-powered attendance management system using real-time face recognition with an administrative dashboard, attendance analytics, and exportable reports.",
    tags: ["React.js", "Flask", "Python", "SQLite"],
  },
  {
    title: "DNA/RNA Sequencer",
    desc: "Bioinformatics application for analysing DNA and RNA sequences to identify genetic patterns using machine learning and data analysis techniques.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Bioinformatics",
    ],
  },
  {
    title: "Classy Calculator",
    desc: "Modern Flutter calculator application featuring a clean UI, responsive layouts, smooth animations, and efficient mathematical expression evaluation with an intuitive user experience.",
    tags: ["Flutter", "Dart", "Material Design"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="section-card hover-glow flex flex-col">
            <h3 className="font-bold text-foreground text-xl mb-2">
              {p.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t) => (
                <span key={t} className="skill-tag text-xs">
                  {t}
                </span>
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