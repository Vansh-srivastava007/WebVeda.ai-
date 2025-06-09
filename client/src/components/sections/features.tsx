import { Bot, Code, Link } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent AI Agents",
      description: "Multilingual AI agents that understand context and deliver personalized experiences across all customer touchpoints.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Code,
      title: "Modular Web Development",
      description: "Scalable, modern websites built with cutting-edge technology stacks for optimal performance and user experience.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Easy integration with existing systems and popular platforms like Slack, Gmail, and more.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-inter font-bold text-3xl md:text-4xl mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose WebVeda.ai?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our cutting-edge solutions combine AI intelligence with modern web development to deliver exceptional results.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-8 bg-light rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-2xl text-white w-8 h-8" />
              </div>
              <h3 className="font-inter font-bold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
