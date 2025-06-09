import sgMail from '@sendgrid/mail';
import * as ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

// Initialize SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY not found in environment variables');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string | null | undefined;
  message: string;
}

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

export async function createExcelFile(data: ContactFormData | DemoFormData, type: 'contact' | 'demo'): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(type === 'contact' ? 'Contact Form' : 'Demo Request');

  // Add header row
  worksheet.addRow(['Field', 'Value']);
  
  // Style the header
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF2A52BE' }
  };
  worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };

  // Add data rows
  Object.entries(data).forEach(([key, value]) => {
    const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
    worksheet.addRow([fieldName, value || '']);
  });

  // Add timestamp
  worksheet.addRow(['Submission Time', new Date().toLocaleString()]);

  // Auto-fit columns
  worksheet.columns.forEach((column) => {
    column.width = 20;
  });

  // Generate buffer
  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}

export async function sendEmailWithAttachment(
  data: ContactFormData | DemoFormData, 
  type: 'contact' | 'demo'
): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.log('SendGrid API key not available, skipping email');
      return false;
    }

    // Create Excel file
    const excelBuffer = await createExcelFile(data, type);
    
    // Prepare email content
    const subject = `New ${type === 'contact' ? 'Contact Form' : 'Demo Request'} Submission on WebVeda.ai`;
    
    let htmlContent = `
      <h2>New ${type === 'contact' ? 'Contact Form' : 'Demo Request'} Submission</h2>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr><th>Field</th><th>Value</th></tr>
    `;
    
    Object.entries(data).forEach(([key, value]) => {
      const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
      htmlContent += `<tr><td>${fieldName}</td><td>${value || ''}</td></tr>`;
    });
    
    htmlContent += `
        <tr><td>Submission Time</td><td>${new Date().toLocaleString()}</td></tr>
      </table>
      <p>Please find the complete details in the attached Excel file.</p>
    `;

    const msg = {
      to: 'vanshsrivastava252@gmail.com',
      from: 'noreply@webveda.ai', // This should be a verified sender
      subject: subject,
      html: htmlContent,
      attachments: [
        {
          content: excelBuffer.toString('base64'),
          filename: `${type}_submission_${Date.now()}.xlsx`,
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          disposition: 'attachment',
        },
      ],
    };

    await sgMail.send(msg);
    console.log('Email sent successfully with Excel attachment');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Store form data as text file (existing functionality)
export async function storeFormData(data: ContactFormData | DemoFormData, type: 'contact' | 'demo') {
  try {
    const emailsDir = path.join(process.cwd(), 'emails');
    
    // Create emails directory if it doesn't exist
    if (!fs.existsSync(emailsDir)) {
      fs.mkdirSync(emailsDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${type}_${timestamp}.txt`;
    const filepath = path.join(emailsDir, filename);
    
    const content = `
${type.toUpperCase()} FORM SUBMISSION
Submitted: ${new Date().toLocaleString()}

${Object.entries(data).map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value || ''}`).join('\n')}
    `.trim();

    fs.writeFileSync(filepath, content);
    console.log(`Form data stored to: ${filepath}`);
  } catch (error) {
    console.error('Error storing form data:', error);
  }
}