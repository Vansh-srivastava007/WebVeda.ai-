import { Link } from "wouter";
import { Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-inter font-bold text-xl">WebVeda.ai</span>
            </div>
            <p className="text-gray-300 mb-4">Building Smart Experiences, Rooted in Knowledge</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/vansh-srivastava-devloper007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/917322986030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:vanshsrivastava252@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                +91 73229 86030
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                vanshsrivastava252@gmail.com
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Chandi, Nalanda, Bihar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 WebVeda.ai. All rights reserved. | Built with ❤️ by WebVeda.ai</p>
        </div>
      </div>
    </footer>
  );
}
