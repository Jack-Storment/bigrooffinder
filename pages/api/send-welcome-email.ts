import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
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
        email,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
} 