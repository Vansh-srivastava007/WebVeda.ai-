import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitToFirebase } from "@/lib/firebase";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: submitToFirebase,
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 73229 86030",
      link: "tel:+917322986030",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/917322986030",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      value: "vanshsrivastava252@gmail.com",
      link: "mailto:vanshsrivastava252@gmail.com",
      color: "red"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chandi, Nalanda, Bihar – 803108",
      link: null,
      color: "blue"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you deploy an AI agent?",
      answer: "Most AI agents can be deployed within 2-3 business days after requirements finalization."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we provide custom integrations with your existing systems and third-party platforms."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including setup assistance, training, and ongoing maintenance."
    }
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
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to transform your business with AI? Let's start the conversation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-inter text-xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 12345 67890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your project..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Direct Contact */}
            <div>
              <h3 className="font-inter font-bold text-xl mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-${contact.color} rounded-lg flex items-center justify-center mr-4`}>
                      <contact.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{contact.title}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className={`text-${contact.color} hover:underline`}
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{contact.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h3 className="font-inter font-bold text-xl mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115059.65371374266!2d85.37779645820311!3d25.13591498047678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sChandi%2C%20Bihar%20803108!5e0!3m2!1sen!2sin!4v1649497176322!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WebVeda.ai Location - Chandi, Nalanda, Bihar"
                  className="w-full h-64 md:h-72"
                />
              </div>
              <div className="mt-2 text-sm text-gray-600 text-center">
                Chandi, Nalanda, Bihar – 803108
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-inter font-bold text-xl mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
