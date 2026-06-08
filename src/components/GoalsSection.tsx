import { Lightbulb, Rocket } from "lucide-react";

const GoalsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Currently Learning & Future Goals</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="section-card hover-glow">
          <Lightbulb className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-bold text-foreground mb-2">Currently Learning</h3>
          <p className="text-muted-foreground text-sm">Exploring advanced DevOps pipelines, cloud infrastructure (AWS), and diving deeper into machine learning frameworks and LLM integrations.</p>
        </div>
        <div className="section-card hover-glow">
          <Rocket className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-bold text-foreground mb-2">Future Goals</h3>
          <p className="text-muted-foreground text-sm">Aiming to contribute to open-source AI projects, build production-grade SaaS products, and pursue opportunities at innovative tech companies.</p>
        </div>
      </div>
    </div>
  </section>
);

export default GoalsSection;
