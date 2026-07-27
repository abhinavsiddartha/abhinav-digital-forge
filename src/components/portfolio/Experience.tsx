const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="section-card hover-glow">
          <p className="text-accent text-sm font-mono mb-1">
            Internship (Jun 2025)
          </p>

          <h3 className="font-bold text-foreground text-lg">
            Intern – Technical Division
          </h3>

          <p className="text-muted-foreground text-sm mb-2">
            Bharat Heavy Electricals Limited (BHEL)
          </p>

          <p className="text-muted-foreground mt-2">
            Designed and developed a secure web portal for HR and employee
            workflow management, improving digital process efficiency.
          </p>
        </div>

        <div className="section-card hover-glow">
          <p className="text-accent text-sm font-mono mb-1">
            Internship (May 2026 – Jun 2026)
          </p>

          <h3 className="font-bold text-foreground text-lg">
            AI Research & Full-Stack Intern
          </h3>

          <p className="text-muted-foreground text-sm mb-2">
            Indian Council of Medical Research (ICMR) – National Institute of
            Nutrition (NIN)
          </p>

          <p className="text-muted-foreground mt-2">
            Developed and enhanced NutriVision AI, an AI-driven nutrition
            platform in collaboration with ICMR–NIN, implementing intelligent
            features for food recognition, dietary assessment, nutrition
            monitoring, and personalized health tracking. Integrated
            research-backed nutritional guidelines and domain expertise from
            ICMR–NIN to improve the platform's accuracy, reliability, and
            evidence-based health recommendations.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;