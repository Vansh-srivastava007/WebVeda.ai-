import { users, contacts, demos, type User, type InsertUser, type Contact, type InsertContact, type Demo, type InsertDemo } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createDemo(demo: InsertDemo): Promise<Demo>;
  getContacts(): Promise<Contact[]>;
  getDemos(): Promise<Demo[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private demos: Map<number, Demo>;
  private currentUserId: number;
  private currentContactId: number;
  private currentDemoId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.demos = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentDemoId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createDemo(insertDemo: InsertDemo): Promise<Demo> {
    const id = this.currentDemoId++;
    const demo: Demo = {
      ...insertDemo,
      id,
      createdAt: new Date(),
    };
    this.demos.set(id, demo);
    return demo;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getDemos(): Promise<Demo[]> {
    return Array.from(this.demos.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
