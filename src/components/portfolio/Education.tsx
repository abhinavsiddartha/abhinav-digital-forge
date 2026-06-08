import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const entries = [
  {
    period: "2023 – 2027",
    title: "B.Tech – Computer Science Engineering (Full Stack Development)",
    institution: "Sir Padampat Singhania University",
    detail: "CGPA: 8.1 · Udaipur, India",
  },
  {
    period: "2021 – 2023",
    title: "Intermediate – MPC",
    institution: "Railway Junior College",
    detail: "Percentage: 81.3% · Hyderabad, India",
  },
];

const Education = () => (
  <SectionWrapper id="education">
    <SectionTitle>Education</SectionTitle>
    <div className="relative max-w-2xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

      <div className="flex flex-col gap-10">
        {entries.map((e, i) => (
          <div key={i} className="relative pl-14">
            <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-primary glow-blue" />
            <span className="text-xs text-primary font-mono">{e.period}</span>
            <h3 className="text-lg font-semibold text-foreground mt-1">{e.title}</h3>
            <p className="text-muted-foreground text-sm">{e.institution}</p>
            <p className="text-muted-foreground text-xs mt-1">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Education;
