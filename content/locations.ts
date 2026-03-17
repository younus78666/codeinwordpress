export type Location = {
  city: string
  state: string
  slug: string
  headline: string
  description: string
  population: string
  localIntro: string
  neighborhoods: string[]
  geo: { lat: number; lng: number }
  nearbyCities: string[]
}

export const locations: Location[] = [
  {
    city: 'Albuquerque',
    state: 'NM',
    slug: 'albuquerque',
    headline: 'WordPress Agency in Albuquerque, New Mexico',
    description: 'Professional WordPress development, speed optimization, and SEO services for Albuquerque businesses. Get a website that works as hard as you do.',
    population: '564,000+',
    localIntro: 'As New Mexico\'s largest city and economic hub, Albuquerque businesses need websites that compete at every level. From the bustling Nob Hill district to the tech corridors along I-25, we help local companies stand out online with fast, SEO-optimized WordPress websites built for the Duke City market.',
    neighborhoods: ['Downtown', 'Nob Hill', 'Old Town', 'Northeast Heights', 'Uptown', 'Rio Rancho Corridor'],
    geo: { lat: 35.0844, lng: -106.6504 },
    nearbyCities: ['rio-rancho', 'santa-fe', 'los-alamos'],
  },
  {
    city: 'Santa Fe',
    state: 'NM',
    slug: 'santa-fe',
    headline: 'WordPress Agency in Santa Fe, New Mexico',
    description: 'Custom WordPress websites for Santa Fe businesses. Art galleries, boutique hotels, restaurants, and professional services trust us for beautiful, fast websites.',
    population: '89,000+',
    localIntro: 'Santa Fe\'s unique blend of art, culture, and tourism demands websites that capture the city\'s creative spirit while performing flawlessly. Whether you run a Canyon Road gallery, a Railyard District restaurant, or a professional services firm on the Plaza, your website should reflect the quality your visitors expect.',
    neighborhoods: ['The Plaza', 'Canyon Road', 'Railyard District', 'Museum Hill', 'De Vargas Heights'],
    geo: { lat: 35.687, lng: -105.9378 },
    nearbyCities: ['albuquerque', 'los-alamos', 'las-cruces'],
  },
  {
    city: 'Las Cruces',
    state: 'NM',
    slug: 'las-cruces',
    headline: 'WordPress Agency in Las Cruces, New Mexico',
    description: 'WordPress development and SEO for Las Cruces businesses. Serving the Mesilla Valley with websites that drive growth and local visibility.',
    population: '111,000+',
    localIntro: 'Las Cruces is one of the fastest-growing cities in New Mexico, and local businesses need websites that keep pace. From the historic Mesilla Plaza to the innovation corridors around NMSU, we build WordPress sites that help Las Cruces companies attract customers and compete with larger markets.',
    neighborhoods: ['Downtown', 'Mesilla', 'Sonoma Ranch', 'Telshor Area', 'University District'],
    geo: { lat: 32.3199, lng: -106.7637 },
    nearbyCities: ['albuquerque', 'santa-fe', 'roswell'],
  },
  {
    city: 'Rio Rancho',
    state: 'NM',
    slug: 'rio-rancho',
    headline: 'WordPress Agency in Rio Rancho, New Mexico',
    description: 'WordPress websites for Rio Rancho businesses. Fast, professional, and built to rank on Google for the growing Sandoval County market.',
    population: '104,000+',
    localIntro: 'Rio Rancho has transformed from a bedroom community into a thriving business hub. With Intel\'s presence and a growing entrepreneurial scene, local businesses need professional WordPress websites that establish credibility and capture the attention of Rio Rancho\'s expanding customer base.',
    neighborhoods: ['City Center', 'Enchanted Hills', 'Cabezon', 'Loma Colorado', 'Northern Meadows'],
    geo: { lat: 35.2334, lng: -106.6636 },
    nearbyCities: ['albuquerque', 'santa-fe', 'los-alamos'],
  },
  {
    city: 'Roswell',
    state: 'NM',
    slug: 'roswell',
    headline: 'WordPress Agency in Roswell, New Mexico',
    description: 'WordPress development for Roswell businesses. From tourism and hospitality to agriculture and energy, we build sites that put Roswell on the digital map.',
    population: '48,000+',
    localIntro: 'Roswell is famous worldwide, and local businesses can leverage that recognition with a strong online presence. Whether you serve tourists visiting the International UFO Museum or provide essential services to the Chaves County community, a fast and optimized WordPress website helps you reach more customers.',
    neighborhoods: ['Downtown', 'North Main Street', 'Country Club Estates', 'Berrendo', 'Spring River'],
    geo: { lat: 33.3943, lng: -104.5230 },
    nearbyCities: ['las-cruces', 'albuquerque', 'farmington'],
  },
  {
    city: 'Farmington',
    state: 'NM',
    slug: 'farmington',
    headline: 'WordPress Agency in Farmington, New Mexico',
    description: 'Professional WordPress websites for Farmington businesses. Serving the Four Corners region with fast, SEO-optimized sites that drive local growth.',
    population: '46,000+',
    localIntro: 'Farmington anchors the Four Corners region with a diverse economy spanning energy, healthcare, tourism, and retail. Local businesses in San Juan County need websites that reach customers across a wide geographic area, and our WordPress solutions deliver the performance and visibility required to compete in Northwest New Mexico.',
    neighborhoods: ['Downtown', 'East Main', 'Piñon Hills', 'Foothills', 'Crouch Mesa'],
    geo: { lat: 36.7281, lng: -108.2187 },
    nearbyCities: ['albuquerque', 'santa-fe', 'roswell'],
  },
  {
    city: 'Los Alamos',
    state: 'NM',
    slug: 'los-alamos',
    headline: 'WordPress Agency in Los Alamos, New Mexico',
    description: 'WordPress websites for Los Alamos businesses. Technical precision meets clean design for the scientific community and local enterprises.',
    population: '19,000+',
    localIntro: 'Los Alamos is home to one of the world\'s premier research institutions, and the local business community reflects that standard of excellence. From technology contractors to restaurants and retail shops serving LANL professionals, your WordPress website should match the precision and quality your customers expect.',
    neighborhoods: ['Downtown', 'White Rock', 'Barranca Mesa', 'North Community', 'Western Area'],
    geo: { lat: 35.8800, lng: -106.3031 },
    nearbyCities: ['santa-fe', 'albuquerque', 'rio-rancho'],
  },
]
