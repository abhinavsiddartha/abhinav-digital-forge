import { Film, Newspaper, Users, MessageSquare, Car, Dumbbell } from "lucide-react";

const hobbies = [
  { icon: Film, label: "Watching Movies" },
  { icon: Newspaper, label: "Reading Newspaper" },
  { icon: Users, label: "Group Discussions" },
  { icon: MessageSquare, label: "Debate" },
  { icon: Car, label: "Driving" },
  { icon: Dumbbell, label: "Physical Fitness" },
];

const HobbiesSection = () => (
  <section id="hobbies" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-10">Hobbies</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {hobbies.map((h) => (
          <div
            key={h.label}
            className="section-card hover-glow flex flex-col items-center justify-center py-5 gap-2 group cursor-default"
          >
            <h.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
            <span className="text-foreground text-xs font-medium text-center">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;
