/**
 * lib/saveToDatabase.js
 *
 * Connects to MongoDB and saves form submissions using Mongoose.
 */

import mongoose from 'mongoose';
import Submission from '../models/Submission';

let isConnected = false;

/**
 * Connects to MongoDB if not already connected.
 */
async function connect() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

/**
 * Validates formData and saves a Submission document.
 *
 * @param {{ name: string, email: string, phone: string, message: string, source: string }} formData
 */
export default async function saveToDatabase(formData) {
  await connect();
  const { name, email, phone, message, source } = formData;
  if (!name || !email || !phone || !message) {
    throw new Error('All fields are required.');
  }
  const submission = new Submission({ name, email, phone, message, source });
  await submission.save();
}
