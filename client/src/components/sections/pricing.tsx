import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export default function Pricing() {
  const aiPlans = [
    {
      name: "Starter",
      price: "₹1,199",
      period: "/month",
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
      features: [
        "Unlimited AI Agents",
        "Unlimited Conversations",
        "Custom Analytics",
        "24/7 Dedicated Support", 
        "On-premise Deployment",
        "Custom Integrations"
      ],
      popular: false,
      isEnterprise: true
    }
  ];

  const webPackages = [
    { name: "Basic Homepage", price: "₹1,199" },
    { name: "5-Page Website", price: "₹2,499" },
    { name: "E-Commerce Site", price: "₹4,999" },
    { name: "Custom Web App", price: "₹9,999+" }
  ];

  const openContactModal = () => {
    const modal = document.getElementById("contactModal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4 text-webveda-dark">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* AI Plans */}
        <div className="mb-16">
          <h3 className="font-inter font-bold text-2xl text-center mb-8 text-webveda-dark">
            AI Agent Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover-scale ${
                  plan.popular 
                    ? "bg-webveda-primary text-white border-webveda-primary shadow-xl scale-105" 
                    : "bg-webveda-light hover:shadow-lg border-gray-200"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-webveda-accent">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className={`text-xl mb-2 ${plan.popular ? "text-white" : "text-webveda-dark"}`}>
                    {plan.name}
                  </CardTitle>
                  <div className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-webveda-primary"}`}>
                    {plan.price}
                    <span className={`text-sm font-normal ${plan.popular ? "opacity-80" : "text-gray-600"}`}>
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className={`h-5 w-5 mr-3 ${plan.popular ? "text-green-400" : "text-green-500"}`} />
                        <span className={`text-sm ${plan.popular ? "text-white" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.isEnterprise ? (
                    <Button 
                      onClick={openContactModal}
                      className={`w-full ${
                        plan.popular 
                          ? "bg-white text-webveda-primary hover:bg-gray-100" 
                          : "bg-webveda-primary text-white hover:bg-webveda-primary/90"
                      }`}
                    >
                      Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? "bg-white text-webveda-primary hover:bg-gray-100" 
                            : "bg-webveda-primary text-white hover:bg-webveda-primary/90"
                        }`}
                      >
                        Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <div className={`text-xs text-center mt-2 ${plan.popular ? "opacity-70" : "text-gray-500"}`}>
                        Secure checkout powered by Razorpay (coming soon)
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Web Development Packages */}
        <Card className="bg-webveda-light p-8 border-0">
          <CardContent className="pt-0">
            <h3 className="font-inter font-bold text-2xl text-center mb-8 text-webveda-dark">
              Web Development Packages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {webPackages.map((pkg, index) => (
                <Card key={index} className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 hover-scale border-gray-200">
                  <CardContent className="pt-0">
                    <h4 className="font-bold text-lg mb-2 text-webveda-dark">
                      {pkg.name}
                    </h4>
                    <div className="text-2xl font-bold text-webveda-primary mb-4">
                      {pkg.price}
                    </div>
                    {pkg.name === "Custom Web App" ? (
                      <Button 
                        onClick={openContactModal}
                        className="w-full bg-webveda-primary text-white hover:bg-webveda-primary/90"
                      >
                        Get Quote
                      </Button>
                    ) : (
                      <Button className="w-full bg-webveda-primary text-white hover:bg-webveda-primary/90">
                        Order Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
