import { cn } from '@/lib/utils'

type Props = {
  lat: number
  lng: number
  zoom?: number
  title?: string
  className?: string
}

export function GoogleMap({ lat, lng, zoom = 13, title = 'Our Location', className }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`
    : `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`

  return (
    <div className={cn('w-full rounded-2xl overflow-hidden border border-border shadow-sm', className)}>
      <iframe
        src={src}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="w-full h-[300px] md:h-[400px]"
      />
    </div>
  )
}
