import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
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
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}