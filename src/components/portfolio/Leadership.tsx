import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Crown, Users, Mic } from "lucide-react";

const roles = [
  { icon: Users, label: "Volunteer – National Service Scheme (NSS)" },
  { icon: Mic, label: "Volunteer Delegate – SPIC MACAY" },
  { icon: Crown, label: "Main Coordinator – University Annual Fest (2025)" },
];

const Leadership = () => (
  <SectionWrapper id="leadership">
    <SectionTitle>Leadership & Roles</SectionTitle>
    <div className="glass-card hover-glow p-8 max-w-3xl mx-auto">
      <ul className="space-y-4">
        {roles.map((r, i) => (
          <li key={i} className="flex items-center gap-3">
            <r.icon className="text-primary shrink-0" size={18} />
            <span className="text-muted-foreground">{r.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
);

export default Leadership;
