import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertDemoSchema } from "@shared/schema";
import { sendEmailWithAttachment, storeFormData } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      console.log('Contact form submission:', contactData);
      
      // Store in memory
      const contact = await storage.createContact(contactData);
      
      // Store as text file
      await storeFormData(contactData, 'contact');
      
      // Send email with Excel attachment
      await sendEmailWithAttachment(contactData, 'contact');
      
      res.json({ success: true, contact });
    } catch (error: any) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to submit contact form" 
      });
    }
  });

  // Demo booking submission
  app.post("/api/demos", async (req, res) => {
    try {
      const demoData = insertDemoSchema.parse(req.body);
      console.log('Demo booking submission:', demoData);
      
      // Store in memory
      const demo = await storage.createDemo(demoData);
      
      // Store as text file
      await storeFormData(demoData, 'demo');
      
      // Send email with Excel attachment
      await sendEmailWithAttachment(demoData, 'demo');
      
      res.json({ success: true, demo });
    } catch (error: any) {
      console.error('Demo booking error:', error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to book demo" 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ 
        message: error.message || "Failed to fetch contacts" 
      });
    }
  });

  // Get all demos (for admin purposes)
  app.get("/api/demos", async (req, res) => {
    try {
      const demos = await storage.getDemos();
      res.json(demos);
    } catch (error: any) {
      res.status(500).json({ 
        message: error.message || "Failed to fetch demos" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
