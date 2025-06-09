import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Heart, Linkedin } from "lucide-react";
import ceoImage from "@assets/CEO_1749497176322.jpg";

export default function About() {
  const timeline = [
    {
      year: "2025",
      title: "Company Launch",
      description: "WebVeda.ai was founded with the mission to democratize AI technology for businesses."
    },
    {
      year: "Q2",
      title: "First AI Agents",
      description: "Launched our first suite of multilingual AI agents for customer support and sales."
    },
    {
      year: "Q4",
      title: "Platform Expansion",
      description: "Expanding our platform with advanced analytics and enterprise-grade security features."
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Knowledge",
      description: "We believe in the power of knowledge to transform businesses and create meaningful connections.",
      color: "blue"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions that drive real results.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our success. We're committed to delivering exceptional value and support.",
      color: "green"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-light">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            className="font-inter font-bold text-3xl md:text-4xl mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About WebVeda.ai
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our journey began with a simple vision: to make advanced AI technology accessible to businesses of all sizes.
          </motion.p>
        </div>

        {/* Company Story Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-inter font-bold text-2xl text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-center justify-center mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="max-w-md shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                      {item.year}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="font-inter font-bold text-2xl text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`text-${value.color}-600 text-2xl w-8 h-8`} />
                </div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Member */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-inter font-bold text-2xl text-center mb-8">Meet Our Founder</h2>
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <img 
                src={ceoImage} 
                alt="Vansh Srivastava - Founder & CEO"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="font-bold text-xl mb-2">Vansh Srivastava</h3>
              <p className="text-accent font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                Passionate about building intelligent solutions that bridge the gap between cutting-edge AI technology 
                and practical business needs. With a vision to make AI accessible to every business, Vansh leads 
                WebVeda.ai with innovation and customer-centric values.
              </p>
              <Button asChild>
                <a 
                  href="https://www.linkedin.com/in/vansh-srivastava-devloper007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
