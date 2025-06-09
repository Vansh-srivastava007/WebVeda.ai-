import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const aiPlans = [
    {
      name: "Starter",
      price: "₹1,199",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "1 AI Agent",
        "1,000 Conversations/month",
        "Basic Analytics",
        "Email Support",
        "2 Integrations"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "/month",
      description: "Ideal for growing businesses with multiple AI needs",
      features: [
        "5 AI Agents",
        "10,000 Conversations/month",
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Integrations",
        "Custom Training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: " Quote",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited AI Agents",
        "Unlimited Conversations",
        "Custom Analytics",
        "24/7 Dedicated Support",
        "On-premise Deployment",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  const webPackages = [
    { name: "Basic Homepage", price: "₹1,199" },
    { name: "5-Page Website", price: "₹2,499" },
    { name: "E-Commerce Site", price: "₹4,999" },
    { name: "Custom Web App", price: "₹9,999+" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            className="font-inter font-bold text-3xl md:text-4xl mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </motion.p>
        </div>

        {/* AI Plans */}
        <div className="mb-16">
          <h2 className="font-inter font-bold text-2xl text-center mb-8">AI Agent Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={plan.popular ? "transform scale-105" : ""}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className={`text-center ${plan.popular ? 'bg-primary text-white' : ''}`}>
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}<span className={`text-sm ${plan.popular ? 'opacity-80' : 'text-gray-600'}`}>{plan.period}</span>
                    </div>
                    <CardDescription className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className={`mr-3 w-5 h-5 ${plan.popular ? 'text-green-400' : 'text-green-500'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.name === 'Enterprise' ? 'variant-outline' : ''}`}
                      variant={plan.name === 'Enterprise' ? 'outline' : 'default'}
                    >
                      {plan.name === 'Enterprise' ? (
                        <>
                          Contact Sales
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Buy Now
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    <div className="text-xs text-gray-500 text-center mt-2">
                      Secure checkout powered by Razorpay (coming soon)
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Development Packages */}
        <motion.div
          className="bg-light p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-inter font-bold text-2xl text-center mb-8">Web Development Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-lg mb-2">{pkg.name}</h4>
                <div className="text-2xl font-bold text-primary mb-4">{pkg.price}</div>
                <Button className="w-full">
                  {pkg.name === 'Custom Web App' ? 'Get Quote' : 'Order Now'}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="font-inter font-bold text-2xl mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Have questions about our pricing? Our team is here to help you choose the right plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
              <Button size="lg">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
