import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter (resets on redeploy)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // max submissions
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return false
  }
  record.count++
  return record.count > RATE_LIMIT
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
    .slice(0, 5000) // Max length cap
}

// Validate input lengths
function validateLength(field: string, max: number): boolean {
  return typeof field === 'string' && field.length > 0 && field.length <= max
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, service, message, website: honeypot } = body

    // Honeypot check - if 'website' field is filled, it is a bot
    if (honeypot) {
      // Silently accept but do not process (fool the bot)
      return NextResponse.json({ success: true, message: 'Message received.' })
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Validate input lengths
    if (!validateLength(name, 100)) {
      return NextResponse.json({ error: 'Name must be under 100 characters.' }, { status: 400 })
    }
    if (!validateLength(email, 254)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (!validateLength(message, 5000)) {
      return NextResponse.json({ error: 'Message must be under 5000 characters.' }, { status: 400 })
    }

    // Validate email format (strict)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: phone ? sanitize(phone) : 'Not provided',
      service: service ? sanitize(service) : 'Not specified',
      message: sanitize(message),
      timestamp: new Date().toISOString(),
      ip,
    }

    // Log submission (replace with email service in production)
    console.log('Contact form submission:', sanitizedData)

    return NextResponse.json({
      success: true,
      message: 'Message received. We will respond within 24 hours.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
