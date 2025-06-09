import { Button } from "@/components/ui/button";
import { Rocket, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onBookDemo: () => void;
  onExploreServices: () => void;
}

export function Hero({ onBookDemo, onExploreServices }: HeroProps) {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-primary via-blue-600 to-accent flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <motion.h1 
            className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Smart Experiences,<br />
            <span className="text-yellow-300">Rooted in Knowledge</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with intelligent AI agents and cutting-edge web development solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={onBookDemo}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
            <Button
              onClick={onExploreServices}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 transition-all"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
