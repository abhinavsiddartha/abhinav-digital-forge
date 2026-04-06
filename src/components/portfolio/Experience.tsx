import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Intern – Technical Division",
    company: "Bharat Heavy Electricals Limited (BHEL)",
    description:
      "Designed and developed a secure web portal for HR and employee workflow management, improving digital process efficiency.",
  },
  {
    role: "Upcoming Intern (2026) – NutriVision AI",
    company: "ICMR – National Institute of Nutrition (NIN)",
    description:
      "Selected for an upcoming research internship focused on AI-driven nutrition intelligence.",
  },
];

const Experience = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {experiences.map((e, i) => (
        <div key={i} className="glass-card hover-glow p-6">
          <Briefcase className="text-primary mb-3" size={22} />
          <h3 className="font-semibold text-foreground">{e.role}</h3>
          <p className="text-primary text-sm mb-2">{e.company}</p>
          <p className="text-muted-foreground text-sm">{e.description}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
