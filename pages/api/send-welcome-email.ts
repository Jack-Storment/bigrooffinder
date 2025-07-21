import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
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
      subject: 'Welcome to Big Roof Finder!',
      html: `<h1>Welcome!</h1><p>Thank you for subscribing for early access to Big Roof Finder. We’ll keep you updated!</p>`,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
} 