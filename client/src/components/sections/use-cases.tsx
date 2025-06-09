import { motion } from "framer-motion";

export function UseCases() {
  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 AI-powered support that understands customer needs and provides instant, accurate responses.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Sales Automation",
      description: "Intelligent lead qualification and nurturing that converts prospects into customers automatically.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "E-Commerce",
      description: "Smart product recommendations and inventory management that boost sales and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "HR Management",
      description: "Streamlined recruitment and employee engagement with AI-driven insights and automation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-inter font-bold text-3xl md:text-4xl mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real-World Applications
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how our solutions transform businesses across industries
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={useCase.image} 
                alt={useCase.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-inter font-bold text-lg mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
