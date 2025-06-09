import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, 
  Code, 
  Headphones, 
  TrendingUp, 
  Users, 
  Calculator, 
  Megaphone, 
  Settings,
  CheckCircle,
  MessageSquare,
  Mail,
  MessageCircle,
  Send
} from "lucide-react";

export default function Services() {
  const aiAgents = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "24/7 intelligent support that resolves queries instantly with human-like understanding.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Sales Agent", 
      description: "Smart lead qualification and nurturing that converts prospects into customers.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "HR Assistant",
      description: "Streamlined recruitment and employee engagement with AI-driven insights.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Calculator,
      title: "Finance Agent",
      description: "Automated financial analysis and reporting with intelligent insights.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Megaphone,
      title: "Marketing Agent",
      description: "Personalized marketing campaigns and customer journey optimization.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Settings,
      title: "Custom Agent",
      description: "Tailored AI solutions designed specifically for your unique business needs.",
      color: "bg-indigo-100 text-indigo-600"
    }
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
    { number: 1, title: "Discovery", description: "Requirements analysis" },
    { number: 2, title: "Design", description: "UI/UX mockups" },
    { number: 3, title: "Development", description: "Coding & testing" },
    { number: 4, title: "Testing", description: "Quality assurance" },
    { number: 5, title: "Launch", description: "Deployment & support" }
  ];

  const integrationIcons = [
    { icon: MessageSquare, name: "Slack" },
    { icon: Mail, name: "Email" },
    { icon: MessageCircle, name: "WhatsApp" },
    { icon: Send, name: "Telegram" }
  ];

  return (
    <section id="services" className="py-20 bg-webveda-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4 text-webveda-dark">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI and web development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                AI Agents
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Web Development
              </TabsTrigger>
            </TabsList>
            
            {/* AI Agents Tab */}
            <TabsContent value="ai" className="space-y-8">
              <Card className="p-8 bg-white border-0 shadow-lg">
                <CardContent className="pt-0">
                  <h3 className="font-inter font-bold text-2xl mb-4 text-webveda-dark">
                    Intelligent Multilingual AI Agents
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Our AI agents understand context, learn from interactions, and provide personalized experiences in multiple languages to serve your global audience effectively.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {aiAgents.map((agent, index) => (
                      <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover-scale border border-gray-200">
                        <CardContent className="pt-0">
                          <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mb-4`}>
                            <agent.icon className="h-6 w-6" />
                          </div>
                          <h4 className="font-semibold text-lg mb-2 text-webveda-dark">
                            {agent.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {agent.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Process Flow */}
                  <Card className="bg-gray-50 p-6 mb-8">
                    <CardContent className="pt-0">
                      <h4 className="font-semibold text-lg mb-4 text-center text-webveda-dark">
                        How It Works
                      </h4>
                      <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
                        {["User Query", "Chat Interface", "AI Agent", "Database", "Smart Response"].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-webveda-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                                {index + 1}
                              </div>
                              <div className="text-sm text-webveda-dark font-medium">{step}</div>
                            </div>
                            {index < 4 && (
                              <div className="hidden sm:block w-8 h-px bg-gray-300 mx-2"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Integration */}
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-4 text-webveda-dark">
                      Integrates With Your Favorite Tools
                    </h4>
                    <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                      {integrationIcons.map((integration, index) => (
                        <div key={index} className="text-gray-400 text-2xl hover:text-webveda-primary transition-colors">
                          <integration.icon />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Web Development Tab */}
            <TabsContent value="web" className="space-y-8">
              <Card className="p-8 bg-white border-0 shadow-lg">
                <CardContent className="pt-0">
                  <h3 className="font-inter font-bold text-2xl mb-4 text-webveda-dark">
                    Modern Web Development Solutions
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    We build scalable, high-performance websites and web applications using the latest technologies and best practices.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {webPackages.map((pkg, index) => (
                      <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover-scale border border-gray-200">
                        <CardContent className="pt-0">
                          <div className="text-center mb-4">
                            <div className="text-2xl font-bold text-webveda-primary">
                              {pkg.price}
                            </div>
                            <div className="text-sm text-gray-600">Starting at</div>
                          </div>
                          <h4 className="font-semibold text-lg mb-4 text-webveda-dark text-center">
                            {pkg.title}
                          </h4>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Development Process */}
                  <Card className="bg-gray-50 p-6">
                    <CardContent className="pt-0">
                      <h4 className="font-semibold text-lg mb-4 text-center text-webveda-dark">
                        Our Development Process
                      </h4>
                      <div className="grid md:grid-cols-5 gap-4">
                        {processSteps.map((step, index) => (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-webveda-primary rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                              {step.number}
                            </div>
                            <div className="text-sm font-semibold text-webveda-dark mb-1">
                              {step.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {step.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
