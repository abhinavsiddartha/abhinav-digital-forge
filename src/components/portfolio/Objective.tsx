import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Target } from "lucide-react";

const Objective = () => (
  <SectionWrapper id="objective">
    <SectionTitle>About Me</SectionTitle>
    <div className="glass-card hover-glow p-8 max-w-3xl mx-auto text-center">
      <Target className="mx-auto mb-4 text-primary" size={32} />
      <p className="text-muted-foreground text-lg leading-relaxed">
        Motivated Computer Science student with strong interests in full-stack development and AI,
        combining core problem-solving abilities with technical expertise to build scalable,
        impactful digital solutions.
      </p>
    </div>
  </SectionWrapper>
);

export default Objective;
