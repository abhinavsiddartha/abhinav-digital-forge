import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Briefcase } from "lucide-react";
const experiences = [
  {
    role: "Intern – Technical Division",
    company: "Bharat Heavy Electricals Limited (BHEL) | Jun 2025",
    description:
      "Designed and developed a secure web portal for HR and employee workflow management, improving digital process efficiency.",
  },
  {
    role: "AI Research & Full-Stack Intern",
    company:
      "Indian Council of Medical Research (ICMR) – National Institute of Nutrition (NIN) | May 2026 – Jun 2026",
    description:
      "Developed and enhanced NutriVision AI, an AI-driven nutrition platform in collaboration with ICMR–NIN, implementing intelligent features for food recognition, dietary assessment, nutrition monitoring, and personalized health tracking. Integrated research-backed nutritional guidelines and domain expertise from ICMR–NIN to improve the platform's accuracy, reliability, and evidence-based health recommendations.",
  },
];

const Experience = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience</SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {experiences.map((e, i) => (
        <div key={i} className="glass-card hover-glow p-6">
          <Briefcase className="text-primary mb-3" size={22} />

          <h3 className="font-semibold text-foreground">
            {e.role}
          </h3>

          <p className="text-primary text-sm mb-2">
            {e.company}
          </p>

          <p className="text-muted-foreground text-sm">
            {e.description}
          </p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;