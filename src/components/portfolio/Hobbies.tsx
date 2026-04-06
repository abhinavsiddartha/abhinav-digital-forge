import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Film, Newspaper, MessageCircle, Scale, Car } from "lucide-react";

const hobbies = [
  { icon: Film, label: "Watching Movies" },
  { icon: Newspaper, label: "Reading Newspaper" },
  { icon: MessageCircle, label: "Group Discussions" },
  { icon: Scale, label: "Debate" },
  { icon: Car, label: "Driving" },
];

const Hobbies = () => (
  <SectionWrapper id="hobbies">
    <SectionTitle>Hobbies</SectionTitle>
    <div className="flex flex-wrap justify-center gap-6">
      {hobbies.map((h) => (
        <div key={h.label} className="glass-card hover-glow p-5 flex flex-col items-center gap-2 w-32">
          <h.icon className="text-primary" size={28} />
          <span className="text-muted-foreground text-xs text-center">{h.label}</span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Hobbies;
