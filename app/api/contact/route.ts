import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (SendGrid, Resend, Nodemailer, etc.)
    // For now, log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
      timestamp: new Date().toISOString(),
    })

    // Placeholder: In production, send email notification here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@codeinwordpress.com',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New inquiry from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>...`,
    // })

    return NextResponse.json({ success: true, message: 'Message received. We will respond within 24 hours.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
