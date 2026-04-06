import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Award } from "lucide-react";

const Certification = () => (
  <SectionWrapper id="certification">
    <SectionTitle>Certification Highlight</SectionTitle>
    <div className="glass-card hover-glow gradient-border p-8 max-w-3xl mx-auto text-center">
      <Award className="mx-auto mb-4 text-primary" size={36} />
      <h3 className="text-xl font-bold text-foreground mb-3">ICMR-NIN INFUSE Summit 2025</h3>
      <p className="text-muted-foreground leading-relaxed">
        Represented <span className="text-primary font-medium">Team NutriVerse</span> as Team Lead.
        Selected among 33 teams from 150+ applications. Showcased{" "}
        <span className="text-primary font-medium">NutriVision AI</span> — an intelligent nutrition
        tracking app designed for Indian food habits. Team collaborated remotely due to exams but
        delivered full project coordination.
      </p>
    </div>
  </SectionWrapper>
);

export default Certification;
