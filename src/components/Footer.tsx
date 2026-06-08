import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-6 px-6">
    <div className="max-w-7xl mx-auto flex items-center gap-4">
      <a href="mailto:abhinavchamarty@gmail.com"><Mail className="w-5 h-5 text-accent hover:text-foreground transition" /></a>
      <a href="https://linkedin.com/in/abhinavsiddartha" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-accent hover:text-foreground transition" /></a>
      <a href="https://github.com/abhinavsiddartha" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 text-accent hover:text-foreground transition" /></a>
    </div>
  </footer>
);

export default Footer;
