import nodemailer from 'nodemailer';
import { generatePdfBuffer } from '../utils/generatepdf.js';

// controllers/inquiryController.js

export const sendInquiry = async (req, res) => {
  try {
    const { name, phone, email, location, material, weight } = req.body;

    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      'Delivery Location': location,
      'Material Type': material,
      'Approx. Weight': weight,
    };

    // Generate PDF as a buffer
    const pdfBuffer = await generatePdfBuffer(data);

    // Email config using env variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail to admin/owner
    const mailOptions = {
      from: `${data.Name}`,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Transport Inquiry Received - TBM',
      html: `
        <h3>New Inquiry</h3>
        <ul>
          ${Object.entries(data)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('')}
        </ul>
      `,
      attachments: [
        {
          filename: 'TransportInquiry.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"TBM Transport" <${process.env.EMAIL_USER}>`,
      to: data.Email,
      subject: 'Your TBM Transport Inquiry',
      text: `Hi ${data.Name},\n\nThank you for your inquiry. We will contact you shortly.\n\n- TBM Team`,
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Inquiry sent with PDF successfully!' });
  } catch (error) {
    console.error('Inquiry send error:', error);
    res.status(500).json({ error: 'Failed to send inquiry.' });
  }
};

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: 'Please fill all fields' });
    }

    // Setup email transporter using env
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare mail for admin/owner
    const mailOptionss = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject} (from ${name})`,
      text: `
        You have a new contact inquiry.

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}

        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptionss);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
};
