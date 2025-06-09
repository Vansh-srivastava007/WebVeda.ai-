import { motion } from "framer-motion";

export function TechShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="font-inter font-bold text-3xl md:text-4xl mb-6 text-dark"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Powered by Cutting-Edge Technology
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our AI agents and web solutions leverage the latest advances in machine learning, 
                natural language processing, and modern web frameworks to deliver exceptional 
                performance and user experiences.
              </motion.p>
              <motion.div 
                className="grid grid-cols-2 gap-4 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Natural Language Processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Modern Web Frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Cloud Infrastructure</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800"
                  alt="AI and Technology Workspace"
                  className="w-full h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs font-semibold text-primary">AI Processing</div>
                  <div className="text-2xl font-bold text-dark">99.9%</div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-xs font-semibold text-accent">Response Time</div>
                  <div className="text-2xl font-bold text-dark">&lt;200ms</div>
                </motion.div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent to-primary rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}