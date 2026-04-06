import { useState } from "react";
import { SectionWrapper, SectionTitle } from "./SectionWrapper";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <textarea
            required
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition inline-flex items-center justify-center gap-2 glow-blue"
          >
            <Send size={16} /> Send Message
          </button>
        </form>

        {/* Info */}
        <div className="flex flex-col justify-center gap-6">
          <a href="tel:+919110731195" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
            <Phone className="text-primary" size={20} />
            +91 9110731195
          </a>
          <a href="mailto:abhinavchamarty@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
            <Mail className="text-primary" size={20} />
            abhinavchamarty@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/c-abhinav-siddartha-655b31279/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
            <Linkedin className="text-primary" size={20} />
            LinkedIn
          </a>
          <a href="https://github.com/abhinavsiddartha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
            <Github className="text-primary" size={20} />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
