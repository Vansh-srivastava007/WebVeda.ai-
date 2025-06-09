import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, Headphones, TrendingUp, Users, Calculator, Megaphone, Settings, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const aiAgents = [
    { icon: Headphones, title: "Customer Support", description: "24/7 intelligent support that resolves queries instantly with human-like understanding.", color: "blue" },
    { icon: TrendingUp, title: "Sales Agent", description: "Smart lead qualification and nurturing that converts prospects into customers.", color: "green" },
    { icon: Users, title: "HR Assistant", description: "Streamlined recruitment and employee engagement with AI-driven insights.", color: "purple" },
    { icon: Calculator, title: "Finance Agent", description: "Automated financial analysis and reporting with intelligent insights.", color: "yellow" },
    { icon: Megaphone, title: "Marketing Agent", description: "Personalized marketing campaigns and customer journey optimization.", color: "red" },
    { icon: Settings, title: "Custom Agent", description: "Tailored AI solutions designed specifically for your unique business needs.", color: "indigo" },
  ];

  const webPackages = [
    {
      title: "Basic Homepage",
      price: "₹1,199",
      features: ["Responsive Design", "SEO Optimized", "Contact Form", "Mobile Friendly"]
    },
    {
      title: "5-Page Website",
      price: "₹2,499",
      features: ["Multi-page Structure", "CMS Integration", "Analytics Setup", "Performance Optimization"]
    },
    {
      title: "E-Commerce Site",
      price: "₹4,999",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"]
    },
    {
      title: "Custom Web App",
      price: "₹9,999+",
      features: ["Custom Features", "Database Design", "API Integration", "Admin Dashboard"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Discovery", description: "Requirements analysis" },
    { step: 2, title: "Design", description: "UI/UX mockups" },
    { step: 3, title: "Development", description: "Coding & testing" },
    { step: 4, title: "Testing", description: "Quality assurance" },
    { step: 5, title: "Launch", description: "Deployment & support" },
  ];

  const integrations = ["Slack", "Microsoft Teams", "Gmail", "WhatsApp", "Telegram"];

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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive AI and web development solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                AI Agents
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Web Development
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-inter text-2xl">Intelligent Multilingual AI Agents</CardTitle>
                  <CardDescription className="text-base">
                    Our AI agents understand context, learn from interactions, and provide personalized experiences 
                    in multiple languages to serve your global audience effectively.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aiAgents.map((agent, index) => (
                      <motion.div
                        key={agent.title}
                        className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className={`w-12 h-12 bg-${agent.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                          <agent.icon className={`text-${agent.color}-600 text-xl w-6 h-6`} />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{agent.title}</h4>
                        <p className="text-gray-600 text-sm">{agent.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Process Flow */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4 text-center">How It Works</h4>
                    <div className="flex items-center justify-center space-x-4 flex-wrap">
                      {["User Query", "Chat Interface", "AI Agent", "Database", "Smart Response"].map((step, index) => (
                        <div key={step} className="flex items-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                              {index + 1}
                            </div>
                            <div className="text-sm">{step}</div>
                          </div>
                          {index < 4 && <ArrowRight className="text-gray-400 mx-2" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Integrations */}
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-4">Integrates With Your Favorite Tools</h4>
                    <div className="flex justify-center items-center space-x-8 flex-wrap">
                      {integrations.map((integration) => (
                        <div key={integration} className="text-gray-400 font-medium">
                          {integration}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-inter text-2xl">Modern Web Development Solutions</CardTitle>
                  <CardDescription className="text-base">
                    We build scalable, high-performance websites and web applications using the latest technologies and best practices.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {webPackages.map((pkg, index) => (
                      <motion.div
                        key={pkg.title}
                        className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                          <div className="text-sm text-gray-600">Starting at</div>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{pkg.title}</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Development Process */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4 text-center">Our Development Process</h4>
                    <div className="grid md:grid-cols-5 gap-4">
                      {processSteps.map((step) => (
                        <div key={step.step} className="text-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                            {step.step}
                          </div>
                          <div className="text-sm font-semibold">{step.title}</div>
                          <div className="text-xs text-gray-600">{step.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button size="lg" className="font-semibold">
                View Pricing Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
