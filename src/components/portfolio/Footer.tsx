import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <div className="flex gap-4">
        <a href="mailto:abhinavchamarty@gmail.com" className="text-muted-foreground hover:text-primary transition">
          <Mail size={18} />
        </a>
        <a href="https://www.linkedin.com/in/c-abhinav-siddartha-655b31279/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/abhinavsiddartha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>;
export default Footer;