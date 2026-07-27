import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "IBM Skills Network (Cognitive Class)",
    subtitle: "SQL and Relational Databases 101 (MySQL & Database Management)",
    link: "https://courses.cognitiveclass.ai/certificates/29ff87f697514d7a956af46d8d7f637d",
  },
  {
    title: "Tata",
    subtitle: "GenAI Powered Data Analytics Job Simulation",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6980974e3d1849ccff536498_1780294801759_completion_certificate.pdf",
  },
  {
    title: "Wells Fargo",
    subtitle: "Software Engineering Job Simulation",
    link: "https://www.theforage.com/completion-certificates/nkmk7gJitYs4TBvoA/9Wvq4L2WCFQDyyPp3_nkmk7gJitYs4TBvoA_6980974e3d1849ccff536498_1780902313699_completion_certificate.pdf",
  },
  {
    title: "Third Bridge",
    subtitle: "Client Service Delivery Job Simulation",
    link: "https://www.theforage.com/completion-certificates/3HY7euLNHJL494MHd/xzwFBbxXQCacYTL6g_3HY7euLNHJL494MHd_6980974e3d1849ccff536498_1780306331878_completion_certificate.pdf",
  },
];

const Certification = () => (
  <>
    <SectionWrapper id="certification">
      <SectionTitle>Certification Highlight</SectionTitle>

      <div className="glass-card hover-glow gradient-border p-8 max-w-3xl mx-auto text-center">
        <Award className="mx-auto mb-4 text-primary" size={36} />

        <h3 className="text-xl font-bold text-foreground mb-3">
          git status-NIN INFUSE Summit 2025
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          Represented <span className="text-primary font-medium">Team NutriVerse</span> as Team
          Lead. Selected among{" "}
          <span className="text-primary font-medium">33 teams from 150+ applications</span>.
          Showcased <span className="text-primary font-medium">NutriVision AI</span>, an
          AI-powered nutrition platform designed for Indian food habits. Successfully coordinated
          the project remotely during examinations while delivering the complete solution.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper id="professional-certifications">
      <SectionTitle>Professional Certifications</SectionTitle>

      <div className="glass-card hover-glow p-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 hover:text-primary transition"
            >
              <div>
                <h3 className="font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.subtitle}
                </p>
              </div>

              <ExternalLink
                className="text-primary shrink-0 mt-1"
                size={18}
              />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default Certification;