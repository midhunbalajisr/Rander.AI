import express from "express";
import fetch from "node-fetch";

// Environment variables are read from process.env by the runtime.
// Ensure RESEND_API_KEY (and other secrets) are set in your environment or your host platform.

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

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
      to: "hello@rander.ai",
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

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
