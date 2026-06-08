import { Award, Users, Mic, CalendarDays, Medal } from "lucide-react";

const AchievementsSection = () => (
  <section id="achievements" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Achievements</h2>
      <div className="section-card hover-glow space-y-4 mb-16">
        {[
          { icon: Award, text: "Qualified Internal SIH Round 2025 (SIH25128)" },
          { icon: Award, text: "Internship at BHEL – Developed secure HR workflow portal" },
          { icon: Award, text: "Top position – SecurityBoat Community Quiz" },
          { icon: Award, text: "Interested in building impactful apps and solving real-world problems through technology" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <a.icon className="w-5 h-5 text-accent shrink-0" />
            <p className="text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Leadership & Roles</h2>
      <div className="section-card hover-glow space-y-4 mb-16">
        {[
          { icon: Users, text: "Volunteer – National Service Scheme (NSS)" },
          { icon: Mic, text: "Volunteer Delegate – SPIC MACAY" },
          { icon: CalendarDays, text: "Main Coordinator – University Annual Fest (2025)" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <a.icon className="w-5 h-5 text-accent shrink-0" />
            <p className="text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Certification Highlight</h2>
      <div className="section-card hover-glow text-center">
        <Medal className="w-8 h-8 text-accent mx-auto mb-4" />
        <h3 className="font-bold text-foreground text-lg mb-3">ICMR-NIN INFUSE Summit 2025</h3>
        <p className="text-muted-foreground leading-relaxed">
          Represented <span className="text-accent font-medium">Team NutriVerse</span> as Team Lead. Selected among 33 teams from 150+ applications. Showcased <span className="text-accent font-medium">NutriVision AI</span> — an intelligent nutrition tracking app designed for Indian food habits. Team collaborated remotely due to exams but delivered full project coordination.
        </p>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
