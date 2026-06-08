const education = [
  { period: "2023 – 2027", title: "B.Tech – Computer Science Engineering (Full Stack Development)", institution: "Sir Padampat Singhania University", detail: "CGPA: 8.1 · Udaipur, India" },
  { period: "2021 – 2023", title: "Intermediate – MPC", institution: "Railway Junior College", detail: "Percentage: 81.3% · Hyderabad, India" },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Education</h2>
      <div className="relative pl-8 border-l-2 border-accent/40 space-y-12">
        {education.map((e) => (
          <div key={e.period} className="relative">
            <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
            <p className="text-accent text-sm font-mono mb-1">{e.period}</p>
            <h3 className="font-bold text-foreground text-lg">{e.title}</h3>
            <p className="text-muted-foreground">{e.institution}</p>
            <p className="text-muted-foreground text-sm">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
