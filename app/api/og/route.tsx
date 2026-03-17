import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Code In WordPress'
  const subtitle = searchParams.get('subtitle') || 'WordPress Agency in New Mexico'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 40%, #ffffff 70%, #ecfeff 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '100px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'rgba(8, 145, 178, 0.06)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            &lt;/&gt;
          </div>
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
            Code In WordPress
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: title.length > 40 ? '48px' : '56px',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '900px',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '24px',
            color: '#64748b',
            lineHeight: 1.4,
            maxWidth: '700px',
          }}
        >
          {subtitle}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '6px',
            background: 'linear-gradient(90deg, #2563eb, #0891b2)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
