import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <div className="pt-16 min-h-screen bg-light">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-inter font-bold text-3xl md:text-4xl mb-4 text-dark">
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay updated with the latest in AI and web development
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-16 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h2 className="font-inter font-bold text-xl mb-4 text-gray-500">
                Coming Soon
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                We're preparing valuable content about AI, web development, and business automation. 
                Stay tuned for insights that will help you leverage technology for business growth!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
