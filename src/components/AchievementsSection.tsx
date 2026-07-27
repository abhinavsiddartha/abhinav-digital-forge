import { Award } from "lucide-react";

const AchievementsSection = () => (
  <section id="achievements" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
        Achievements
      </h2>

      <div className="section-card hover-glow space-y-4">
        {[
          {
            icon: Award,
            text: "NutriVision AI advanced to Scientific Advisory Committee (SAC) review, with subsequent evaluation at ICMR Headquarters for potential real-world implementation.",
          },
          {
            icon: Award,
            text: "Qualified Internal SIH Round 2025 (SIH25128)",
          },
          {
            icon: Award,
            text: "Top Position – SecurityBoat Community Quiz",
          },
          {
            icon: Award,
            text: "Interested in building impactful apps and solving real-world problems through technology",
          },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <a.icon className="w-5 h-5 text-accent shrink-0" />
            <p className="text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;