import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Code, Globe, Smartphone, Wrench, Server, Users } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "Dart"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs", "JSON"],
  },
  {
    title: "App Dev & Databases",
    icon: Smartphone,
    skills: ["Flutter", "Firebase", "Firestore", "MySQL", "MongoDB"],
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["Spring Boot", "OpenCV", "Git", "GitHub", "Cursor", "Lovable", "Replit"],
  },
  {
    title: "DevOps & Backend",
    icon: Server,
    skills: ["Flask", "API Development", "Deployment Concepts"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Teamwork", "Communication", "Adaptability", "Leadership", "Attention to Detail"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionTitle>Skills</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <div key={cat.title} className="glass-card hover-glow p-6">
          <div className="flex items-center gap-3 mb-4">
            <cat.icon className="text-primary" size={22} />
            <h3 className="font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
