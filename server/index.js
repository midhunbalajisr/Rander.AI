import express from "express";
import fetch from "node-fetch";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Environment variables are read from process.env by the runtime.
// Ensure RESEND_API_KEY (and other secrets) are set in your environment or your host platform.

// Initialize Resend SDK
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(express.json());

// CORS configuration for production
app.use((req, res, next) => {
  // Allow requests from any origin (you can restrict this to your frontend domain)
  const allowedOrigins = [
    'http://localhost:8080',
    'http://localhost:5173',
    'https://randerai.in',
    'https://www.randerai.in',
    'https://rander-ai.vercel.app'
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

const PORT = process.env.PORT || 3001;

// New Resend SDK endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "RanderAI <onboarding@resend.dev>",
      to: ["midhunbalajisr@gmail.com"],
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, city } = req.body;
  console.log('[/api/send-email] incoming body:', req.body);

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ ok: false, error: "Missing required fields: name or email" });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY on server" });

    // Build email payload
    const payload = {
      from: "no-reply@rander.ai",
      to: "connect@randerai.in",
      subject: `New contact from ${name} <${email}>`,
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>City:</strong> ${city}</p>`,
    };

    console.log('[/api/send-email] sending to resend:', payload);

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    console.log('[/api/send-email] resend response status:', resp.status, 'body:', text);

    if (!resp.ok) {
      return res.status(500).json({ ok: false, error: text });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error('[/api/send-email] error:', err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TESTIMONIALS_FILE = path.join(__dirname, "testimonials.json");

// Helper to read testimonials
const readTestimonials = () => {
  if (!fs.existsSync(TESTIMONIALS_FILE)) return [];
  try {
    const data = fs.readFileSync(TESTIMONIALS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading testimonials file:", err);
    return [];
  }
};

// Helper to write testimonials
const writeTestimonials = (data) => {
  fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(data, null, 2));
};

app.get("/api/testimonials", (req, res) => {
  const testimonials = readTestimonials();
  res.json(testimonials);
});

app.post("/api/testimonials", (req, res) => {
  const { name, rating, feedback } = req.body;

  if (!name || !rating || !feedback) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const testimonials = readTestimonials();
  const newTestimonial = {
    id: Date.now().toString(),
    name,
    rating: Number(rating),
    feedback,
    date: new Date().toISOString()
  };

  testimonials.push(newTestimonial);
  writeTestimonials(testimonials);

  res.json({ ok: true, testimonial: newTestimonial });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
