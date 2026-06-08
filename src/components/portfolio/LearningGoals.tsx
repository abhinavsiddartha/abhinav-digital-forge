import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Lightbulb, Rocket } from "lucide-react";

const LearningGoals = () => (
  <SectionWrapper id="learning">
    <SectionTitle>Currently Learning & Future Goals</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="glass-card hover-glow p-6">
        <Lightbulb className="text-primary mb-3" size={24} />
        <h3 className="font-semibold text-foreground mb-2">Currently Learning</h3>
        <p className="text-muted-foreground text-sm">
          Exploring advanced DevOps pipelines, cloud infrastructure (AWS), and diving deeper into
          machine learning frameworks and LLM integrations.
        </p>
      </div>
      <div className="glass-card hover-glow p-6">
        <Rocket className="text-primary mb-3" size={24} />
        <h3 className="font-semibold text-foreground mb-2">Future Goals</h3>
        <p className="text-muted-foreground text-sm">
          Aiming to contribute to open-source AI projects, build production-grade SaaS products,
          and pursue opportunities at innovative tech companies.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default LearningGoals;
