import { Phone, Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-email", {
        body: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="section-card hover-glow space-y-4">
            <div>
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 bg-accent rounded-lg font-medium text-accent-foreground flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            {[
              { icon: Phone, text: "+91 9110731195" },
              { icon: Mail, text: "abhinavchamarty@gmail.com" },
              { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/c-abhinav-siddartha" },
              { icon: Github, text: "GitHub", href: "https://github.com/abhinavsiddartha" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <c.icon className="w-5 h-5 text-accent" />
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">{c.text}</a>
                ) : (
                  <span className="text-muted-foreground">{c.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
