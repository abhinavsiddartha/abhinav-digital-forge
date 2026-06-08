const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="section-card hover-glow">
          <p className="text-accent text-sm font-mono mb-1">Internship</p>
          <h3 className="font-bold text-foreground text-lg">Intern – Technical Division</h3>
          <p className="text-muted-foreground text-sm mb-2">Bharat Heavy Electricals Limited (BHEL)</p>
          <p className="text-muted-foreground mt-2">
            Designed and developed a secure web portal for HR and employee workflow management, improving digital process efficiency.
          </p>
        </div>
        <div className="section-card hover-glow">
          <p className="text-accent text-sm font-mono mb-1">Upcoming Internship (2026)</p>
          <h3 className="font-bold text-foreground text-lg">Upcoming Intern – NutriVision AI</h3>
          <p className="text-muted-foreground text-sm mb-2">ICMR – National Institute of Nutrition (NIN)</p>
          <p className="text-muted-foreground mt-2">
            Selected for an upcoming research internship focused on AI-driven nutrition intelligence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
