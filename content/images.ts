/**
 * Curated image set from Unsplash for the website.
 * All images are free to use (Unsplash license).
 * Format: https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w={width}&q=80
 */

const unsplash = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

// ── Homepage Images ──
export const homepageImages = {
  // Hero area - not needed, has browser mockup
  introSection: unsplash('photo-1460925895917-afdab827c52f', 900, 500), // Analytics dashboard
  codeWorkspace: unsplash('photo-1498050108023-c5249f4df085', 900, 500), // Laptop coding
  teamCollaboration: unsplash('photo-1522071820081-009f0129c71c', 900, 500), // Team working
}

// ── How We Work Steps ──
export const processImages = {
  discovery: unsplash('photo-1553877522-43269d4ea984', 600, 600), // Meeting/conversation
  strategy: unsplash('photo-1531403009284-440f080d1e12', 600, 600), // Whiteboard planning
  design: unsplash('photo-1547658719-da2b51169166', 600, 600), // Design on screen
  testing: unsplash('photo-1551288049-bebda4e38f71', 600, 600), // Dashboard/analytics
  launch: unsplash('photo-1533750349088-cd871a92f312', 600, 600), // Rocket/launch concept
}

// ── Service Page Images ──
export const serviceImages = {
  development: unsplash('photo-1461749280684-dccba630e2f6', 900, 500), // Code on screen
  speedOptimization: unsplash('photo-1551288049-bebda4e38f71', 900, 500), // Performance dashboard
  seo: unsplash('photo-1432888498266-38ffec3eaf0a', 900, 500), // Search/analytics
  maintenance: unsplash('photo-1558494949-ef010cbdcc31', 900, 500), // Server room
  security: unsplash('photo-1555949963-ff9fe0c870eb', 900, 500), // Security/lock
  woocommerce: unsplash('photo-1556742049-0cfed4f6a45d', 900, 500), // E-commerce/shopping
  redesign: unsplash('photo-1507238691740-187a5b1d37b8', 900, 500), // Design mockup
}

// ── Location/City Images ──
export const locationImages = {
  albuquerque: unsplash('photo-1570366583862-f91883984fde', 900, 500), // Albuquerque balloons
  santaFe: unsplash('photo-1570829460005-c840387bb1ca', 900, 500), // Adobe architecture
  lasCruces: unsplash('photo-1469854523086-cc02fe5d8800', 900, 500), // Desert landscape
  rioRancho: unsplash('photo-1516156008796-094e27e0e3d1', 900, 500), // Suburban business
  roswell: unsplash('photo-1534289692684-c02577d5560d', 900, 500), // Small town main street
  farmington: unsplash('photo-1506905925346-21bda4d32df4', 900, 500), // Mountain landscape
  losAlamos: unsplash('photo-1451187580459-43490279c0fa', 900, 500), // Technology/science
}

// ── Content Section Images (used by ContentRenderer) ──
export const contentImages = [
  unsplash('photo-1460925895917-afdab827c52f', 1200, 600), // Analytics dashboard
  unsplash('photo-1498050108023-c5249f4df085', 1200, 600), // Laptop coding workspace
  unsplash('photo-1522071820081-009f0129c71c', 1200, 600), // Team collaboration
  unsplash('photo-1553877522-43269d4ea984', 1200, 600), // Business meeting
  unsplash('photo-1551288049-bebda4e38f71', 1200, 600), // Performance dashboard
  unsplash('photo-1531403009284-440f080d1e12', 1200, 600), // Strategy planning
  unsplash('photo-1547658719-da2b51169166', 1200, 600), // Design on screen
  unsplash('photo-1461749280684-dccba630e2f6', 1200, 600), // Code closeup
  unsplash('photo-1507238691740-187a5b1d37b8', 1200, 600), // Design mockup
  unsplash('photo-1558494949-ef010cbdcc31', 1200, 600), // Server/technology
  unsplash('photo-1556742049-0cfed4f6a45d', 1200, 600), // E-commerce
  unsplash('photo-1432888498266-38ffec3eaf0a', 1200, 600), // Search concept
]

// ── Blog Category Images ──
export const blogImages = {
  speedOptimization: unsplash('photo-1551288049-bebda4e38f71', 900, 500),
  seo: unsplash('photo-1432888498266-38ffec3eaf0a', 900, 500),
  business: unsplash('photo-1553877522-43269d4ea984', 900, 500),
  security: unsplash('photo-1555949963-ff9fe0c870eb', 900, 500),
  development: unsplash('photo-1461749280684-dccba630e2f6', 900, 500),
  woocommerce: unsplash('photo-1556742049-0cfed4f6a45d', 900, 500),
}

// ── Portfolio/Case Study Images ──
export const portfolioImages = {
  interiorDesign: unsplash('photo-1618221195710-dd6b41faaea6', 900, 500),
  lawFirm: unsplash('photo-1589829545856-d10d557cf95f', 900, 500),
  medical: unsplash('photo-1519494026892-80bbd2d6fd0d', 900, 500),
  outdoor: unsplash('photo-1501555088652-021faa106b9b', 900, 500),
  coffee: unsplash('photo-1495474472287-4d71bcdd2085', 900, 500),
  construction: unsplash('photo-1504307651254-35680f356dfd', 900, 500),
}
