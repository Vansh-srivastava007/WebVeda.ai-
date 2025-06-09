/**
 * lib/sendEmailWithExcel.js
 *
 * Generates an Excel file from formData and emails it via Gmail SMTP.
 */

import nodemailer from 'nodemailer';
import ExcelJS from 'exceljs';

/**
 * Sends an email with an Excel attachment containing form submission data.
 *
 * @param {{ name: string, email: string, phone: string, message: string, source: string }} formData
 * @throws Will throw an error if Excel generation or email sending fails.
 */
export default async function sendEmailWithExcel(formData) {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Submission');
    worksheet.columns = [
      { header: 'Name', key: 'name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Message', key: 'message' },
      { header: 'Form', key: 'source' },
    ];
    worksheet.addRow(formData);
    const buffer = await workbook.xlsx.writeBuffer();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New WebVeda.ai Submission',
      text: 'See attached Excel.',
      attachments: [
        {
          filename: 'submission.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });
  } catch (error) {
    throw new Error(`Failed to send email with Excel: ${error.message}`);
  }
}
