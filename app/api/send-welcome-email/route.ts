import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Resend API key not set' }, { status: 500 });
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
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}