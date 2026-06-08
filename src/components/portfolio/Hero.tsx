import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
const roles = ["Full Stack Developer", "DevOps Enthusiast", "AI Explorer"];
const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);
  return <section className="min-h-screen flex items-center justify-center relative mesh-bg px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.7
      }} className="mb-8 inline-block">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-transparent glow-blue relative gradient-border">
            <img alt="Chamarty Abhinav Siddartha" className="w-full h-full object-cover" src="/lovable-uploads/c6d5129e-6e4c-44dd-b24f-a1714cfc2ed0.jpg" />
          </div>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Chamarty{" "}
          <span className="gradient-text">Abhinav Siddartha</span>
        </motion.h1>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6
      }} className="text-xl sm:text-2xl text-primary font-medium mb-4 h-8">
          <span className="typing-cursor">{text}</span>
        </motion.div>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }} className="text-lg sm:text-xl text-muted-foreground italic mb-3 max-w-2xl mx-auto">
          "Engineering Intelligent Solutions with Code, Creativity & Curiosity"
        </motion.p>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Computer Science student specializing in Full Stack Development and AI-driven systems, passionate about building scalable, impactful digital solutions.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1.2
      }} className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition glow-blue">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg font-medium border border-primary text-primary hover:bg-primary/10 transition">
            Contact Me
          </a>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5
      }} className="mt-16 animate-float">
          <ArrowDown className="mx-auto text-muted-foreground" size={28} />
        </motion.div>
      </div>
    </section>;
};
export default Hero;