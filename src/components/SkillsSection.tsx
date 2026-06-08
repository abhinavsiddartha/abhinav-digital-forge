import { Code2, Globe, Smartphone, Wrench, Server, Users } from "lucide-react";

const skillCategories = [
  { icon: Code2, title: "Programming Languages", skills: ["C", "C++", "Java", "Python", "Dart"] },
  { icon: Globe, title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs", "JSON"] },
  { icon: Smartphone, title: "App Dev & Databases", skills: ["Flutter", "Firebase", "Firestore", "MySQL", "MongoDB"] },
  { icon: Wrench, title: "Frameworks & Tools", skills: ["Spring Boot", "OpenCV", "Git", "GitHub", "Cursor", "Lovable", "Replit"] },
  { icon: Server, title: "DevOps & Backend", skills: ["Flask", "API Development", "Deployment Concepts"] },
  { icon: Users, title: "Soft Skills", skills: ["Problem-Solving", "Teamwork", "Communication", "Adaptability", "Leadership", "Attention to Detail"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="section-card hover-glow">
            <div className="flex items-center gap-3 mb-4">
              <cat.icon className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
