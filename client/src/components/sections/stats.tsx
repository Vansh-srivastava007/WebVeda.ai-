import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 150, label: "Projects Delivered" },
    { value: 50, label: "Happy Clients" },
    { value: 99, label: "Success Rate %" },
    { value: 24, label: "24/7 Support" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter 
                value={stat.value} 
                isVisible={isVisible}
                className="text-4xl font-bold mb-2"
              />
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedCounterProps {
  value: number;
  isVisible: boolean;
  className?: string;
}

function AnimatedCounter({ value, isVisible, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <div className={className}>{count}</div>;
}
