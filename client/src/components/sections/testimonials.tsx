import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      content: "WebVeda.ai transformed our customer service with their AI agents. Response times decreased by 80% and customer satisfaction increased dramatically.",
      author: "Rajesh Kumar",
      position: "CEO, TechCorp India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      content: "The website they built for us is not just beautiful but incredibly fast and functional. Our online sales have doubled since launch.",
      author: "Priya Sharma",
      position: "Founder, StyleHub",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
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
            What Our Clients Say
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-light p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
