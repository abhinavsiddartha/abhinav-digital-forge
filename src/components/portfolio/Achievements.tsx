import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Trophy } from "lucide-react";

const achievements = [
  "Qualified Internal SIH Round 2025 (SIH25128)",
  "Internship at BHEL – Developed secure HR workflow portal",
  "Top position – SecurityBoat Community Quiz",
  "Interested in building impactful apps and solving real-world problems through technology",
];

const Achievements = () => (
  <SectionWrapper id="achievements">
    <SectionTitle>Achievements</SectionTitle>
    <div className="glass-card hover-glow p-8 max-w-3xl mx-auto">
      <ul className="space-y-4">
        {achievements.map((a, i) => (
          <li key={i} className="flex items-start gap-3">
            <Trophy className="text-primary mt-1 shrink-0" size={18} />
            <span className="text-muted-foreground">{a}</span>
          </li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
);

export default Achievements;
