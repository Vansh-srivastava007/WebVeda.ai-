import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { TechShowcase } from "@/components/sections/tech-showcase";
import { Features } from "@/components/sections/features";
import { UseCases } from "@/components/sections/use-cases";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { DemoModal } from "@/components/modals/demo-modal";

export default function Home() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero 
        onBookDemo={() => setShowDemoModal(true)}
        onExploreServices={scrollToServices}
      />
      <TechShowcase />
      <div id="services">
        <Features />
      </div>
      <UseCases />
      <Stats />
      <Testimonials />
      
      <DemoModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
}
