import { Target } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">About Me</h2>
      <div className="section-card hover-glow text-center">
        <Target className="w-8 h-8 text-accent mx-auto mb-4" />
        <p className="text-muted-foreground leading-relaxed">
          Motivated Computer Science student with strong interests in full-stack development and AI, combining core problem-solving abilities with technical expertise to build scalable, impactful digital solutions.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
