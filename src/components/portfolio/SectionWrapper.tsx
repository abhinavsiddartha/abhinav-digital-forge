import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

export const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={`py-20 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center gradient-text">
    {children}
  </h2>
);
