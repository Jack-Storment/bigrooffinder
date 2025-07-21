import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Resend API key not set' });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Big Roof Finder <noreply@bigrooffinder.com>',
      to: email,
      subject: 'Thank you for contacting Big Roof Finder!',
      html: `
        <h2>Thank you for getting in touch, ${name}!</h2>
        <p>We have received your message and will get back to you soon.</p>
        <hr/>
        <p><strong>Your message:</strong><br/>${message}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
      `
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
}