import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

  const response = await fetch(EMAILJS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: 'service_ttxgrs4',
      template_id: 'template_a52k5pj',
      user_id: 'jB8RtYGb36FkQu3se',
      template_params: {
        name,
        email,
        company,
        message,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
}