import nodemailer from 'nodemailer';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const { firstname, lastname, company, phonenumber, websiteurl,email,message } = await request.json();
    
    // Configure the email transporter using direct credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use another service
      auth: {
        user:'rrahulkumaryadav347@gmail.com', // Replace with your email address
        pass: 'nhjp lsgo esnw wfle',   // Replace with your email password
      },
    });

    // Define the email options
    const mailOptions = {
      from:email, // Replace with your email address
      to: 'rkumar1@kloudrac.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      replyTo: email,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phonenumber}
        Company: ${company}
        WebsiteUrl:${websiteurl}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong>${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phonenumber}</p>
        <p><strong> Company:</strong> ${company}</p>
          <p><strong> WebsiteUrl:</strong> ${websiteurl}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    // Return an error response
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}

// const nodemailer = require("nodemailer");
// const cors = require('cors');
 

// export async function POST(request) {
//     try {
//         // Parse the JSON body of the request
//         const { firstname, lastname, websiteurl, email, company, phonenumber, message } = await request.json();


//         // Configure the email transporter using direct credentials
//         const transporter = nodemailer.createTransport({
//             service: 'gmail', // or use another service
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         // Define the email options
//         const mailOptions = {
//             from: email, // Sender's email
//             to: 'rkumar1@kloudrac.com', // Recipient's email
//             subject: 'New Contact Form Submission',
//             replyTo: email,
//             text: `
//         Name: ${firstname} ${lastname}
//         Email: ${email}
//         Phone: ${phonenumber}
//         Company: ${company}
//         Website: ${websiteurl}
//         Message:${message}
//       `,
//             html: `
//         <p><strong>Name:</strong> ${firstname} ${lastname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phonenumber}</p>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Website:</strong> ${websiteurl}</p>
//              <p><strong>Website:</strong> ${message}</p>
//       `,
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);

//         // Return a success response
//         return new Response(JSON.stringify({ success: true }), { status: 200 });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         // Return an error response
//         return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//     }
// }
