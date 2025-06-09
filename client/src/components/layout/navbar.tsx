import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DemoModal } from "@/components/modals/demo-modal";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-inter font-bold text-xl text-dark">WebVeda.ai</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button onClick={() => setShowDemoModal(true)}>
                Book Free Demo
              </Button>
            </div>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors ${
                        isActive(item.href)
                          ? "text-primary font-semibold"
                          : "text-dark hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setShowDemoModal(true);
                    }}
                    className="w-full mt-4"
                  >
                    Book Free Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <DemoModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
}
