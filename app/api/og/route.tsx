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
          justifyContent: 'space-between',
          padding: '60px 80px',
          background: 'linear-gradient(145deg, #0f172a 0%, #1e3a8a 50%, #172554 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative gradient circles */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-50px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(8, 145, 178, 0.3) 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Top section: Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #2563eb, #0891b2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            &lt;/&gt;
          </div>
          <span style={{ fontSize: '26px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
            Code In WordPress
          </span>
        </div>

        {/* Middle section: Title + Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
          <h1
            style={{
              fontSize: title.length > 50 ? '44px' : title.length > 35 ? '52px' : '60px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              maxWidth: '900px',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(147, 197, 253, 0.9)',
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom section: Stats bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            position: 'relative',
          }}
        >
          {[
            { value: '400+', label: 'Projects' },
            { value: '99%', label: 'Satisfaction' },
            { value: '8+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#60a5fa' }}>{stat.value}</span>
              <span style={{ fontSize: '16px', color: 'rgba(148, 163, 184, 0.8)' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Top gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #2563eb, #0891b2, #2563eb)',
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
