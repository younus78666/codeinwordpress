export type ServiceIcon = 'code' | 'rocket' | 'chart' | 'shield-check' | 'lock' | 'cart' | 'paintbrush'

export type Service = {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: ServiceIcon
  features: string[]
  price?: string
  longContent: string
}

export const services: Service[] = [
  {
    slug: 'wordpress-development',
    title: 'Custom WordPress Development in New Mexico',
    shortTitle: 'WordPress Development',
    description: 'We build WordPress websites from scratch with clean code, not cookie-cutter templates. Every site is custom-designed for your brand, optimized for speed, and built to convert visitors into customers.',
    icon: 'code',
    features: [
      'Custom theme development from scratch',
      'Elementor and ACF-powered layouts',
      'WooCommerce integration ready',
      'Mobile-first responsive design',
      'WCAG accessibility compliance',
      'Performance-optimized from day one',
    ],
    price: 'From $500',
    longContent: `
<h2>What Custom WordPress Development Actually Means</h2>
<p>When we say custom WordPress development, we mean your website is built from a blank canvas. There is no pre-made template that gets slightly tweaked and shipped out the door. We have built over 400 WordPress projects in the past eight years, and the one thing we have learned is that no two businesses need the same website. A law firm in Albuquerque has completely different needs than a restaurant in Santa Fe or a construction company in Las Cruces. Cookie-cutter templates ignore those differences, and your customers notice.</p>
<p>Custom development means every element on your site exists because it serves a purpose for your specific business. The layout, the navigation, the call-to-action placement, the forms, the content structure — all of it is designed around how your actual customers interact with your brand online. We have seen firsthand what happens when a business tries to force their content into a generic theme. Pages get cluttered, important information gets buried, and visitors leave before they ever pick up the phone.</p>

<h2>Our Development Process From Start to Finish</h2>
<p>After eight years of refining how we work, our process is built for clarity and efficiency. We do not disappear for weeks and then show up with something you did not ask for. Here is how a typical custom WordPress project works with us.</p>

<h3>Discovery and Planning</h3>
<p>We start with a detailed conversation about your business, your customers, and what you need your website to accomplish. For a medical practice in Rio Rancho, that might mean patient intake forms, provider bios, and insurance information front and center. For a roofing company in Albuquerque, the priority might be a portfolio of completed projects and a fast quote request form. We map out the site architecture, identify the pages you need, and create wireframes before any code gets written.</p>

<h3>Design and Prototyping</h3>
<p>Once the architecture is locked in, we move into visual design. We work with your brand colors, fonts, and imagery to create a design that feels like your business, not like a template someone downloaded. You get to review the design in a clickable prototype before we start building, so there are no surprises at launch. We have found that this step alone saves weeks of back-and-forth revisions later in the process.</p>

<h3>Development and Build</h3>
<p>This is where we turn the approved design into a working WordPress site. Our stack typically includes custom theme development, Elementor Pro for flexible page building, and Advanced Custom Fields for structured content management. We write clean, well-documented PHP when custom functionality is needed, and we avoid the bloated plugin soup that makes most WordPress sites slow and fragile.</p>

<h3>Testing and Launch</h3>
<p>Before your site goes live, we test it on every major browser and device. We check for responsive behavior, form functionality, page speed, accessibility compliance, and SEO fundamentals. We run Lighthouse audits and fix any issues before launch day. When everything passes, we handle the deployment, DNS configuration, and SSL setup so the transition is seamless.</p>

<h2>Why Custom Development Beats Templates Every Time</h2>
<p>We understand the appeal of templates. They are cheap, they are fast, and they look decent in the demo. But in our experience with over 400 projects, templates create more problems than they solve. Here is why.</p>
<ul>
<li><strong>Bloated code:</strong> Most templates load dozens of features you will never use, which slows your site down. We have audited template-based sites that load 30+ unused JavaScript files on every page.</li>
<li><strong>Limited customization:</strong> You can change the colors and swap the logo, but when you need something the template was not designed for, you hit a wall. We have rescued many business owners who got stuck trying to make a template do something it was never built to do.</li>
<li><strong>Update conflicts:</strong> Template updates can break your customizations. We have seen theme updates wipe out hours of work because the changes were made in the wrong files.</li>
<li><strong>Generic user experience:</strong> Your competitors might be using the same template. Custom development means your website is uniquely yours, which builds trust with customers who are comparing multiple businesses.</li>
</ul>

<h2>Technologies We Use and Why</h2>
<p>We are not married to a single tool. We pick the right technology for each project. That said, here is what we reach for most often and why.</p>

<h3>Elementor Pro</h3>
<p>For sites where the client needs to update content regularly, Elementor Pro gives them a visual editor that is intuitive without sacrificing design quality. We build custom Elementor widgets when the built-in ones do not fit, and we optimize Elementor's output so it does not become a performance bottleneck. A restaurant owner in Santa Fe does not need to call us every time they update their seasonal menu — Elementor lets them do it themselves.</p>

<h3>Advanced Custom Fields (ACF)</h3>
<p>ACF is how we create structured content that is easy to manage. Instead of dumping everything into a single text editor, we build custom field groups for things like team member profiles, service descriptions, project portfolios, and FAQ sections. This keeps the content organized in the admin panel and ensures it always displays correctly on the front end.</p>

<h3>Custom PHP Development</h3>
<p>When a plugin does not exist for what you need, or when existing plugins are too bloated, we write custom PHP. This could be a custom booking system for a medical practice, a quote calculator for a construction company, or a filtered portfolio for an architecture firm. Custom code is leaner, faster, and easier to maintain than stacking three plugins to accomplish the same thing.</p>

<h2>Responsive Design That Works on Every Device</h2>
<p>More than 60 percent of the traffic to most business websites in New Mexico comes from mobile devices. If your site does not work perfectly on a phone, you are losing more than half your potential customers before they even see your services.</p>
<p>Our responsive design approach goes beyond just shrinking the desktop layout. We design the mobile experience first, ensuring that navigation is thumb-friendly, text is readable without zooming, forms are easy to fill out on a small screen, and calls to action are prominent. Then we scale up for tablets and desktops. We test on real devices, not just browser simulators, because there are rendering differences that only show up on actual phones.</p>

<h2>Accessibility Is Not Optional</h2>
<p>WCAG accessibility compliance is part of every site we build, not an add-on or an afterthought. This means proper heading structure, alt text on every image, keyboard navigation support, sufficient color contrast, and ARIA labels where needed. Beyond being the right thing to do, accessibility also improves SEO and protects your business from potential ADA compliance lawsuits, which have been increasing for small businesses across the country.</p>
<p>We have built accessible sites for medical practices in Albuquerque that serve patients with visual impairments, and for government contractors in Los Alamos who need to meet Section 508 compliance. Accessibility is a core part of our development checklist, not a line item we add at the end.</p>

<h2>Performance Built In From Day One</h2>
<p>Speed is not something we fix after the site is built. It is baked into every decision during development. We choose lightweight code over bloated plugins. We optimize images during the build process. We configure server-side caching before launch. We minimize HTTP requests by combining and deferring scripts. The result is a site that loads fast out of the gate, not one that needs our <a href="/services/speed-optimization">speed optimization service</a> the day after launch.</p>
<p>That said, even well-built sites can slow down over time as content is added and plugins are updated. That is why we also recommend our <a href="/services/website-maintenance">ongoing maintenance plans</a> to keep your site performing at its best month after month.</p>

<h2>Real Projects for New Mexico Businesses</h2>
<p>We have built custom WordPress sites for businesses across New Mexico, and each project has its own set of challenges and requirements. A personal injury law firm in Albuquerque needed a site that communicated trust and authority while making it easy for potential clients to request a free consultation. We built a custom theme with attorney profiles powered by ACF, practice area pages with structured schema markup, and a multi-step intake form that pre-qualifies leads before they reach the firm.</p>
<p>A family-owned restaurant in Santa Fe needed a site that showcased their food photography, displayed their rotating seasonal menu, and integrated with their online ordering system. We built a custom Elementor-based site with a menu management system that the owner updates weekly without any help from us.</p>
<p>A commercial construction company in Las Cruces needed a project portfolio that filtered by project type, location, and size, along with a subcontractor application system. We built custom post types for projects and a custom form workflow that routes applications to the right project manager.</p>

<h2>What Happens After Launch</h2>
<p>Launching your site is the beginning, not the end. We provide training on how to manage your content, answer questions during the first month at no extra charge, and offer <a href="/services/website-maintenance">maintenance plans</a> that cover updates, backups, security monitoring, and performance checks. If your business grows and your site needs new features, we are here to build them. Many of our clients in New Mexico have been working with us for years, expanding their sites as their businesses grow.</p>
<h2>Content Management That Makes Sense</h2>
<p>One of the biggest frustrations we hear from business owners is that they cannot update their own website. Either the theme makes it impossible without a developer, or the WordPress admin is so confusing that they are afraid to touch anything. We build every site with content management in mind. That means intuitive editing interfaces, clear labeling for every section, and training that actually prepares you to manage your content independently.</p>
<p>For a dental practice in Albuquerque, we set up a staff directory using ACF repeater fields. When they hire a new dentist or hygienist, the office manager adds the new team member through a simple form — name, photo, bio, and credentials — and it appears on the site exactly where it should, styled consistently with every other team member. No code, no developer, no waiting. For a real estate agency in Santa Fe, we built a property listing system where agents add new listings through custom post types with fields for price, bedrooms, square footage, photos, and neighborhood details. The listings automatically appear in the right category pages with proper filtering. That is what good content management looks like.</p>

<h2>Why Businesses in New Mexico Choose Us</h2>
<p>There are plenty of WordPress developers online. What sets us apart is our deep understanding of New Mexico businesses and markets. We know that a contractor in Albuquerque needs different things from a hospitality business in Taos. We understand the seasonal patterns that affect tourism-dependent businesses in Santa Fe. We have worked with enough local companies to understand the competitive landscape across industries in the state. When we build your site, it is informed by that local knowledge, not just generic web development best practices.</p>
<p>We also believe in long-term relationships. Most of our clients stay with us for years, adding features and growing their sites as their businesses grow. We are not a one-and-done agency that disappears after launch. We are here for the ongoing evolution of your online presence.</p>
<p>If you are ready to invest in a website that is built specifically for your business, not adapted from a template, we would be happy to talk about what a custom WordPress development project looks like for you.</p>
`,
  },
  {
    slug: 'speed-optimization',
    title: 'WordPress Speed Optimization',
    shortTitle: 'Speed Optimization',
    description: 'A slow website costs you money every single day. We dig into your WordPress setup, find every bottleneck, and fix them. Most clients see their Lighthouse score jump 40 to 60 points within a week.',
    icon: 'rocket',
    features: [
      'Core Web Vitals optimization',
      'Image compression and lazy loading',
      'Database and query optimization',
      'CDN configuration and caching',
      'Plugin audit and cleanup',
      'Before/after speed reports',
    ],
    price: 'From $500',
    longContent: `
<h2>Why WordPress Speed Matters More Than You Think</h2>
<p>Every second your website takes to load costs you money. That is not an exaggeration. Google's own research shows that as page load time goes from one second to three seconds, bounce probability increases by 32 percent. Push that to five seconds and you lose 90 percent of visitors. For a business in New Mexico that depends on website leads — whether you are a plumber in Albuquerque, a law firm in Santa Fe, or a medical practice in Rio Rancho — those lost visitors are lost revenue.</p>
<p>Beyond visitor behavior, speed directly impacts your search rankings. Google has used page speed as a ranking factor since 2018, and Core Web Vitals became an official ranking signal in 2021. If your WordPress site is slow, you are getting outranked by competitors whose sites load faster, even if your content is better. In our experience with over 400 WordPress projects in the past eight years, speed optimization consistently delivers the fastest, most measurable ROI of any service we offer.</p>

<h2>Common WordPress Speed Problems We Find</h2>
<p>WordPress itself is not slow. A clean WordPress installation loads in under one second. The problems come from how sites are built and maintained over time. Here are the most common speed killers we find when auditing WordPress sites for New Mexico businesses.</p>

<h3>Cheap or Overcrowded Hosting</h3>
<p>Many small businesses start on shared hosting because it is affordable. The problem is that shared hosting means your site shares server resources with hundreds of other websites. When one of those sites gets a traffic spike, your site slows down. We have audited sites for businesses in Albuquerque where the server response time alone — before any content even starts loading — was over two seconds. Moving to proper hosting can cut load times in half before we touch anything else.</p>

<h3>Unoptimized Images</h3>
<p>This is the single most common speed issue we encounter. Business owners upload high-resolution photos straight from their camera or phone, and WordPress serves them as-is. We regularly find product pages with images that are 4,000 pixels wide and 3 MB each, when the display area is only 600 pixels wide. A single page might load 15 MB of unnecessary image data. For a restaurant in Santa Fe showcasing their menu items, or a construction company in Las Cruces showing project photos, unoptimized images can add 10 or more seconds to page load time.</p>

<h3>Too Many Plugins</h3>
<p>WordPress plugins are convenient, but every plugin adds code that runs on every page load. We have audited sites running 40, 50, even 60 plugins, many of which overlap in functionality or are no longer being used. Each plugin loads its own CSS and JavaScript files, makes its own database queries, and competes for server resources. A plugin audit alone often reduces page load time by two to three seconds.</p>

<h3>No Caching Strategy</h3>
<p>WordPress generates pages dynamically by querying the database and assembling content on every single visit. Without caching, your server does this work from scratch for every visitor. That is like a restaurant cooking every dish from raw ingredients for every customer instead of prepping components in advance. Implementing proper caching can reduce server response time by 80 to 90 percent.</p>

<h3>Render-Blocking JavaScript and CSS</h3>
<p>Many themes and plugins load all their JavaScript and CSS files in the page header, which blocks the browser from rendering anything until those files download and execute. We frequently find sites loading 15 to 20 separate CSS files and 10 to 15 JavaScript files before the visitor sees any content. Deferring, combining, and eliminating unnecessary scripts is one of the most impactful optimizations we perform.</p>

<h2>Our Speed Optimization Process Step by Step</h2>
<p>We do not guess. Every optimization project starts with a comprehensive audit and follows a structured process that we have refined over hundreds of projects.</p>

<h3>Step 1: Comprehensive Speed Audit</h3>
<p>We run your site through multiple testing tools including Google PageSpeed Insights, GTmetrix, and WebPageTest. We test from multiple locations, on multiple devices, and we record the baseline metrics that matter: Largest Contentful Paint, First Input Delay, Cumulative Layout Shift, Time to First Byte, and total page weight. We document everything so you can see the exact before-and-after comparison when we are done.</p>

<h3>Step 2: Hosting Analysis</h3>
<p>We evaluate your current hosting environment. If your Time to First Byte is consistently over 600 milliseconds, hosting is likely a bottleneck. We check server configuration, PHP version, MySQL version, available memory, and whether your hosting plan is appropriate for your traffic level. If a hosting migration is needed, we handle the entire process including DNS changes and SSL configuration. We do not resell hosting — we recommend the best option for your specific needs and budget.</p>

<h3>Step 3: Image Optimization</h3>
<p>We audit every image on your site. We resize images to the maximum display dimensions they actually need, compress them using lossy and lossless techniques depending on the image type, convert to modern formats like WebP where browser support exists, and implement lazy loading so images below the fold only load when the visitor scrolls to them. For a typical business website, image optimization alone reduces total page weight by 60 to 80 percent.</p>

<h3>Step 4: Plugin Audit and Cleanup</h3>
<p>We review every installed plugin. We identify plugins that are inactive, redundant, poorly coded, or no longer maintained. We replace heavy plugins with lighter alternatives where possible and remove unnecessary ones entirely. For a medical practice site in Albuquerque, we once removed 22 unused plugins and replaced three overlapping form plugins with a single optimized solution. Page load time dropped by 3.5 seconds from this step alone.</p>

<h3>Step 5: Caching Strategy Implementation</h3>
<p>We configure server-side caching, browser caching, and object caching appropriate for your hosting environment. This includes setting proper cache headers, implementing a page caching plugin optimized for your server stack, and configuring object caching with Redis or Memcached if your hosting supports it. We fine-tune cache expiration times and exclusion rules so dynamic content like shopping carts and logged-in user areas still work correctly.</p>

<h3>Step 6: JavaScript and CSS Optimization</h3>
<p>We minify and combine CSS files to reduce HTTP requests. We defer non-critical JavaScript so it loads after the page renders. We eliminate render-blocking resources by inlining critical CSS and loading the rest asynchronously. We remove unused CSS from theme stylesheets that often contain thousands of lines of code for features your site does not use. This step typically improves Largest Contentful Paint by one to two seconds.</p>

<h3>Step 7: Database Optimization</h3>
<p>Over time, WordPress databases accumulate bloat — post revisions, spam comments, transient options, orphaned metadata, and auto-draft posts. We clean up the database, optimize tables, and review slow queries. For sites that have been running for several years, we have seen database optimization reduce query times by 40 to 60 percent.</p>

<h3>Step 8: CDN Setup and Configuration</h3>
<p>A Content Delivery Network serves your static files from servers geographically close to your visitors. For a New Mexico business, your visitors might be in Albuquerque, El Paso, Denver, or Phoenix. A CDN ensures they all get fast load times regardless of where your hosting server is physically located. We configure the CDN, set up proper cache rules, and ensure it works correctly with your caching and SSL setup.</p>

<h2>Before and After Metrics We Typically Achieve</h2>
<p>Numbers matter more than promises. Here is what we typically see across our optimization projects.</p>
<ul>
<li><strong>Google PageSpeed score:</strong> Average improvement from 25-40 to 85-95 on mobile</li>
<li><strong>Largest Contentful Paint:</strong> Reduced from 6-10 seconds to under 2.5 seconds</li>
<li><strong>Total page weight:</strong> Reduced by 60-80 percent on average</li>
<li><strong>Time to First Byte:</strong> Reduced from 1-3 seconds to under 400 milliseconds</li>
<li><strong>HTTP requests:</strong> Reduced from 80-120 to 20-35 per page</li>
</ul>
<p>These are not cherry-picked numbers. They represent the typical results across our client base, which includes everything from simple five-page business sites to complex WooCommerce stores with thousands of products.</p>

<h2>How Speed Impacts Your Business Bottom Line</h2>
<p>For a local business in New Mexico, the connection between site speed and revenue is direct. A roofing company in Albuquerque that gets 500 monthly website visitors with a three percent conversion rate generates 15 leads per month. If a slow site causes half those visitors to bounce before the page loads, that is seven or eight lost leads. At an average job value of $5,000, that is $35,000 to $40,000 in lost potential revenue every month from a problem that costs a fraction of that to fix.</p>
<p>We have seen similar math play out for law firms, medical practices, restaurants, and service businesses across New Mexico. The ROI on speed optimization is almost always positive within the first month.</p>

<h2>Ongoing Speed Maintenance</h2>
<p>Speed optimization is not a one-time fix. Plugin updates, content additions, and hosting changes can all introduce new speed issues over time. That is why we recommend pairing speed optimization with one of our <a href="/services/website-maintenance">WordPress maintenance plans</a>. We monitor your Core Web Vitals monthly and catch performance regressions before they impact your traffic or rankings.</p>
<h2>Why DIY Speed Optimization Usually Falls Short</h2>
<p>We regularly see business owners who have tried to speed up their sites on their own. They install a caching plugin, activate it with default settings, and check their speed score. Sometimes it helps a little. Sometimes it breaks the site. Almost always, it leaves the biggest performance gains on the table because the real bottlenecks — server configuration, render-blocking resources, database query optimization, and image delivery — require hands-on technical work that goes beyond what any single plugin can automate.</p>
<p>We have also seen businesses hire general-purpose web developers who claim to do speed optimization but only address surface-level issues. They compress a few images, install a caching plugin, and call it done. Meanwhile, the site is still loading 18 render-blocking scripts, the server is running PHP 7.4 instead of 8.2, and the database has 50,000 post revisions weighing it down. Real speed optimization requires understanding how WordPress generates and serves pages at every level of the stack, from the server to the browser. That is what eight years and 400 projects of WordPress-specific experience gives us.</p>
<p>The difference between a half-optimized site and a fully optimized site is often the difference between a 60 and a 95 on PageSpeed Insights. For a business that depends on organic traffic — which is most businesses in New Mexico — that gap directly impacts your search rankings, your visitor experience, and your revenue.</p>
<p>If your site has not been audited for speed in the past year, or if you have never had a professional optimization done, chances are strong that you are leaving money on the table. We are happy to run a free initial speed test and show you exactly where your site stands and what we can improve.</p>
`,
  },
  {
    slug: 'wordpress-seo',
    title: 'WordPress SEO Services',
    shortTitle: 'WordPress SEO',
    description: 'Getting traffic from Google is not magic, it is technical precision. We handle the schema markup, meta optimization, internal linking, and content structure that search engines actually care about.',
    icon: 'chart',
    features: [
      'Comprehensive technical SEO audit',
      'On-page optimization for every page',
      'Schema markup (JSON-LD) implementation',
      'Internal linking architecture',
      'Google Search Console setup',
      'Monthly ranking reports',
    ],
    price: 'From $500',
    longContent: `
<h2>WordPress SEO That Actually Drives Results</h2>
<p>Search engine optimization for WordPress is not about installing a plugin and filling in a few meta descriptions. We have been doing WordPress SEO for over eight years, across more than 400 projects, and the sites that rank well are the ones where SEO is built into the foundation — the site architecture, the code structure, the content strategy, and the technical setup. If you are a business in New Mexico trying to get found on Google for your services, you need more than a plugin. You need someone who understands how WordPress and search engines interact at a technical level.</p>
<p>We work with law firms in Albuquerque, medical practices in Rio Rancho, restaurants in Santa Fe, and construction companies across the state. Each of these businesses has different keyword targets, different competitors, and different local search dynamics. Our approach is built around your specific business and your specific market, not a one-size-fits-all checklist.</p>

<h2>Technical SEO Foundations</h2>
<p>Technical SEO is the infrastructure that makes everything else work. If your site has crawl errors, broken links, duplicate content, or slow page speeds, no amount of content optimization will save you. Here is what we address in the technical foundation.</p>

<h3>Site Architecture and Crawlability</h3>
<p>Google needs to be able to find, crawl, and understand every page on your site. We audit your site structure to ensure there are no orphan pages, no crawl traps, and no unnecessary redirect chains. We review your XML sitemap to make sure it includes all the pages you want indexed and excludes the ones you do not. We check your robots.txt configuration to ensure you are not accidentally blocking important content. For a law firm site with dozens of practice area pages and blog posts, proper site architecture is the difference between Google indexing everything and Google ignoring half your content.</p>

<h3>Page Speed and Core Web Vitals</h3>
<p>Speed is an SEO ranking factor, and it directly impacts how Google evaluates your site. We ensure your Core Web Vitals — Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift — all pass Google's thresholds. If your site needs significant speed work, we often recommend starting with our <a href="/services/speed-optimization">speed optimization service</a> before diving into broader SEO work, because a slow site undermines everything else.</p>

<h3>Mobile Optimization</h3>
<p>Google uses mobile-first indexing, which means the mobile version of your site is what Google primarily evaluates for rankings. We ensure your site is fully responsive, that content is not hidden on mobile, that buttons and links are properly spaced for touch, and that mobile page speed passes Core Web Vitals. We have seen businesses in Albuquerque lose rankings simply because their mobile experience was poor even though their desktop site looked fine.</p>

<h3>HTTPS and Security</h3>
<p>SSL is a ranking signal. We ensure your site is properly configured with HTTPS, that there are no mixed content warnings, and that all HTTP URLs redirect to HTTPS. We also review your site for <a href="/services/security-hardening">security issues</a> that could lead to Google flagging your site as unsafe, which would devastate your rankings overnight.</p>

<h2>On-Page Optimization</h2>
<p>On-page SEO is where we optimize individual pages to rank for specific keywords. This is where most WordPress SEO plugins stop, but we go much deeper than filling in a meta title and description.</p>

<h3>Keyword Research and Mapping</h3>
<p>We research the actual terms your potential customers are searching for. For a plumber in Albuquerque, that might be "emergency plumber Albuquerque" or "water heater repair near me." For a family law attorney in Santa Fe, it might be "divorce lawyer Santa Fe NM" or "child custody attorney New Mexico." We map these keywords to specific pages on your site so every page targets a unique set of terms without cannibalizing each other.</p>

<h3>Title Tags and Meta Descriptions</h3>
<p>Every page gets a unique, keyword-optimized title tag that stays within the 50 to 60 character sweet spot and a compelling meta description that drives click-through rates. We write these by hand, not with AI generators, because the meta description is your advertisement in the search results. It needs to speak to your specific audience and differentiate you from competitors.</p>

<h3>Heading Structure and Content Optimization</h3>
<p>We ensure every page has a proper heading hierarchy — one H1 per page, followed by H2s and H3s that organize the content logically. We optimize existing content to naturally incorporate target keywords without stuffing. We review content length, readability, and comprehensiveness compared to what is currently ranking for your target terms. If a competitor's page has 2,000 words of detailed content and yours has 200 words, we will identify that gap and help you close it.</p>

<h3>Image Optimization for SEO</h3>
<p>Every image on your site should have descriptive, keyword-relevant alt text. File names should be descriptive rather than generic. Images should be properly sized and compressed so they do not slow down the page. For businesses with visual portfolios — like a construction company in Las Cruces showing completed projects — properly optimized images can drive significant traffic from Google Image Search.</p>

<h2>Schema Markup Implementation</h2>
<p>Schema markup is structured data that tells Google exactly what your content is about. It is the code behind those rich results you see in search — star ratings, business hours, FAQ dropdowns, and more. Most WordPress sites have either no schema markup or incorrect markup from a plugin that was never properly configured.</p>
<p>We implement schema markup using JSON-LD, which is Google's preferred format. The types of schema we commonly implement include:</p>
<ul>
<li><strong>LocalBusiness schema:</strong> Your business name, address, phone number, hours, and service area — critical for local search visibility in New Mexico</li>
<li><strong>Service schema:</strong> Detailed markup for each service you offer, helping Google understand and display your services in search results</li>
<li><strong>FAQ schema:</strong> Frequently asked questions that can appear directly in search results, taking up more real estate on the page</li>
<li><strong>Review schema:</strong> Customer reviews and ratings that display as stars in search results, dramatically increasing click-through rates</li>
<li><strong>BreadcrumbList schema:</strong> Navigation paths that appear in search results, helping users understand your site structure</li>
<li><strong>Article schema:</strong> For blog posts and news content, enabling rich results with dates and author information</li>
</ul>
<p>We have seen proper schema implementation increase click-through rates by 20 to 35 percent for our clients, which translates directly into more traffic without any change in rankings.</p>

<h2>Internal Linking Strategy</h2>
<p>Internal links are how Google discovers and understands the relationships between your pages. They also distribute ranking authority across your site. Most WordPress sites have weak internal linking — maybe a navigation menu and a few random links in blog posts. We build a deliberate internal linking architecture that connects your most important pages, supports your keyword strategy, and creates clear topical clusters.</p>
<p>For example, a medical practice site might have a main "Services" page that links to individual service pages for each specialty, which link to related blog posts about common conditions, which link back to appointment booking pages. This creates a web of relevant connections that helps Google understand your site's topic depth and authority.</p>

<h2>Local SEO for New Mexico Businesses</h2>
<p>If you serve customers in a specific geographic area, local SEO is where the biggest wins happen. We optimize your WordPress site for local search by ensuring your NAP (name, address, phone) information is consistent across your site and matches your Google Business Profile. We create location-specific content when you serve multiple areas. We implement local schema markup. We optimize for "near me" searches and location-based keywords.</p>
<p>For a business in Albuquerque competing against dozens of similar businesses, local SEO is often the difference between appearing in the Map Pack — the top three local results with the map — and being buried on page two. We have helped restaurants in Santa Fe, dental practices in Rio Rancho, and HVAC companies in Albuquerque reach the Map Pack through a combination of on-site optimization and Google Business Profile management.</p>

<h2>Google Search Console Setup and Monitoring</h2>
<p>Google Search Console is the single most valuable free SEO tool available, and most business owners either do not have it set up or never look at it. We configure Search Console properly, submit your sitemap, monitor for crawl errors and indexing issues, track your keyword rankings, and use the data to guide ongoing optimization decisions. Search Console tells us exactly which queries are driving impressions and clicks, which pages are performing well, and where there are opportunities to improve.</p>

<h2>Content Optimization and Strategy</h2>
<p>SEO without content is like building a road that leads nowhere. We help you develop a content strategy that targets keywords your customers are actually searching for, answers their questions, and positions your business as the authority in your industry. This might mean optimizing existing pages, creating new service pages, or developing a blog strategy that drives long-tail traffic.</p>
<p>We do not write thin, keyword-stuffed content. Every piece of content we optimize or recommend is designed to be genuinely useful to the reader. Google has gotten extremely good at identifying low-quality content, and the businesses that win in search are the ones that provide real value. In our eight years of doing this work, we have never had a client penalized by a Google algorithm update because we do not take shortcuts.</p>

<h2>Measuring SEO Results</h2>
<p>SEO is not a black box. We provide monthly reports that show your keyword rankings, organic traffic trends, top-performing pages, and actionable recommendations. We track the metrics that matter to your business — not vanity metrics like total impressions, but conversion-focused metrics like organic traffic to your key service pages, phone calls from organic visitors, and form submissions from search traffic. We set up goal tracking in Google Analytics so you can see exactly how SEO is impacting your bottom line.</p>

<h2>Ongoing SEO Maintenance</h2>
<p>SEO is not a one-time project. Google updates its algorithm hundreds of times per year, competitors are constantly improving their sites, and your content needs to stay fresh and relevant. Our ongoing SEO services include monthly technical audits, content optimization, backlink monitoring, and strategy adjustments based on performance data. Combined with our <a href="/services/website-maintenance">WordPress maintenance plans</a>, we ensure your site stays healthy, fast, and visible in search results month after month.</p>
<h2>Common SEO Mistakes We Fix on WordPress Sites</h2>
<p>In our years of auditing WordPress sites for businesses across New Mexico, certain SEO mistakes come up over and over again. Duplicate title tags across multiple pages, which confuse search engines about which page should rank. Missing or generic meta descriptions that fail to entice clicks. Broken internal links that waste crawl budget and create dead ends. Multiple H1 tags on a single page, diluting the page's topical focus. Missing alt text on images, which is both an accessibility issue and a missed SEO opportunity. Thin content pages with fewer than 200 words that offer no value to visitors or search engines.</p>
<p>We also frequently find sites where the robots.txt file is accidentally blocking important pages, or where the XML sitemap includes noindexed pages, sending conflicting signals to Google. These are technical issues that are invisible to the business owner but can have a significant impact on search visibility. Our audit catches all of these problems and our optimization process resolves them systematically.</p>
<p>Another common issue is keyword cannibalization, where multiple pages on the same site compete for the same keyword. For a plumber in Albuquerque, having three pages that all target "plumber Albuquerque" means none of them rank as well as a single, comprehensive, well-optimized page would. We consolidate competing pages and build a keyword strategy where each page has a clear, unique target.</p>
<p>If you are not showing up where your customers are searching, you are handing business to your competitors. We would be glad to run a free SEO audit of your site and show you exactly where you stand and what it would take to improve your visibility in search.</p>
`,
  },
  {
    slug: 'website-maintenance',
    title: 'WordPress Maintenance Plans',
    shortTitle: 'Maintenance',
    description: 'WordPress is not a set-it-and-forget-it platform. Plugins need updating, backups need running, and security needs monitoring. Our maintenance plans handle all of it so you can focus on running your business.',
    icon: 'shield-check',
    features: [
      'Weekly core and plugin updates',
      'Daily automated backups',
      'Uptime and security monitoring',
      'Monthly performance reports',
      'Priority email and chat support',
      'Emergency fix response within 4 hours',
    ],
    price: 'From $99/mo',
    longContent: `
<h2>Why Your WordPress Site Needs Ongoing Maintenance</h2>
<p>WordPress powers over 40 percent of all websites on the internet, and that popularity makes it a constant target. The WordPress core team releases security patches regularly. Plugin developers push updates to fix vulnerabilities and add features. PHP versions get updated. Hosting environments change. If you are not keeping up with all of this, your site is falling behind — and eventually, something breaks.</p>
<p>We have been maintaining WordPress sites for over eight years, and in that time we have seen what happens when maintenance gets neglected. A law firm in Albuquerque came to us after their site had not been updated in 14 months. They had 23 outdated plugins, including one with a known security vulnerability that had already been exploited. Their site was serving malware to visitors, Google had flagged it as dangerous, and they had lost all their organic search traffic. The cleanup took two weeks and cost significantly more than a year of maintenance would have.</p>
<p>That is not an unusual story. We hear variations of it regularly from businesses across New Mexico. Our maintenance plans exist to prevent that from ever happening to you.</p>

<h2>What Our Maintenance Plans Include</h2>

<h3>Weekly Core and Plugin Updates</h3>
<p>WordPress core updates and plugin updates are the most fundamental part of site maintenance. We do not just click "update all" and hope for the best. Every update goes through a process. We take a backup first, apply updates on a staging environment when possible, test for conflicts and visual issues, and then push to your live site. If an update causes a problem, we roll it back immediately and investigate before trying again.</p>
<p>In our experience, about one in 20 plugin updates introduces some kind of conflict or issue. For a site with 15 plugins, that means you can expect a problem roughly every couple of months. Without a process for catching and fixing these issues, they accumulate until something breaks visibly in front of your customers.</p>

<h3>Daily Automated Backups</h3>
<p>Every day, we take a full backup of your site — both the files and the database. These backups are stored off-site in a separate location from your hosting, so if your server has a catastrophic failure, your data is safe. We retain 30 days of backups so we can restore to any point in the past month if needed.</p>
<p>We have used these backups to recover sites after hosting failures, botched updates by other developers, accidental content deletions, and security breaches. For a restaurant in Santa Fe that accidentally deleted their entire menu section, we had them restored within 20 minutes from the previous day's backup. Without those backups, they would have had to recreate everything from scratch.</p>

<h3>Uptime Monitoring</h3>
<p>We monitor your site every five minutes around the clock. If your site goes down, we get an alert immediately and begin investigating before you even know there is a problem. Downtime is not just an inconvenience — it costs you money. If a potential customer tries to visit your site at 2 AM because they have a plumbing emergency, and your site is down, they go to your competitor. Our monitoring catches most downtime incidents within five minutes and resolves them quickly.</p>
<p>Over the past year, we have achieved 99.95 percent average uptime across all the sites we maintain. When downtime does occur, our average resolution time is under 30 minutes.</p>

<h3>Security Monitoring</h3>
<p>Our maintenance plans include continuous security monitoring. We scan for malware, check for file changes, monitor login attempts, and watch for known vulnerabilities in your installed plugins and themes. If something suspicious is detected, we investigate immediately. Combined with the <a href="/services/security-hardening">security hardening</a> we recommend for all our maintenance clients, this provides comprehensive protection against the most common WordPress attacks.</p>

<h3>Monthly Performance Reports</h3>
<p>Every month, you receive a report that covers what we did, what we found, and how your site is performing. The report includes update logs, backup status, uptime statistics, security scan results, and page speed metrics. We also flag any issues we noticed and recommendations for improvements. This keeps you informed without requiring you to think about your website on a daily basis.</p>

<h3>Priority Support</h3>
<p>Maintenance clients get priority access to our team. If you need a content update, a bug fix, or have a question, you go to the front of the line. We respond to maintenance client requests within four hours during business hours, and we include a set number of small changes each month as part of the plan — things like updating a phone number, adding a team member photo, or adjusting a form field.</p>

<h3>Emergency Fix Response</h3>
<p>If something goes critically wrong — your site gets hacked, a plugin update breaks your checkout, or your hosting goes down — we respond within four hours, even outside of regular business hours. We have handled middle-of-the-night emergencies for businesses where downtime meant real revenue loss, like a WooCommerce store during a holiday sale or a medical practice's appointment booking system going down on a Monday morning.</p>

<h2>What Happens When You Skip Maintenance</h2>
<p>We are not trying to scare anyone, but we have seen the consequences of neglected WordPress sites too many times to sugarcoat it. Here is what typically happens when a WordPress site goes unmaintained.</p>

<h3>Months 1 to 3</h3>
<p>Updates accumulate but nothing visibly breaks. The site still looks fine to visitors. Security vulnerabilities start piling up in outdated plugins, but they have not been exploited yet. This is the false sense of security that makes people think maintenance is unnecessary.</p>

<h3>Months 3 to 6</h3>
<p>PHP and MySQL versions on the server may have been updated by the hosting provider, creating compatibility issues with outdated plugins. Minor visual glitches start appearing. Contact forms may stop sending emails. Some features may not work correctly on newer browsers or devices. Search rankings may start slipping as Core Web Vitals degrade.</p>

<h3>Months 6 to 12</h3>
<p>The risk of a security breach increases significantly. Known vulnerabilities in outdated plugins are actively exploited by automated bots that scan the entire internet for these exact weaknesses. Backups, if they were ever configured, may have stopped working. The database has accumulated significant bloat, slowing the site down further. Updating becomes risky because the gap between current and latest versions is so large that conflicts are almost guaranteed.</p>

<h3>Month 12 and Beyond</h3>
<p>At this point, the site often needs a complete overhaul rather than simple updates. We have had clients come to us with sites that were so far behind that the cost of catching up — fixing security issues, resolving compatibility conflicts, cleaning up the database, and restoring functionality — exceeded the cost of a full <a href="/services/website-redesign">website redesign</a>. It is the most expensive way to learn that maintenance is worth the investment.</p>

<h2>The Real Cost of Downtime</h2>
<p>Consider what an hour of downtime costs your business. If you are a service business in Albuquerque generating $50,000 per month in revenue, and 30 percent of your leads come from your website, every hour of downtime costs you roughly $20 in lost leads. A day of downtime could cost $500. A week could cost $3,500. Now factor in the SEO impact — Google devalues sites that are frequently down or slow — and the true cost multiplies.</p>
<p>For an e-commerce business, the math is even more direct. If your WooCommerce store processes $5,000 per day in orders, every hour of downtime is over $200 in lost sales that likely go straight to a competitor. Our maintenance plans cost a fraction of what even a single significant downtime incident costs most businesses.</p>

<h2>What Maintenance Covers That You Might Not Expect</h2>
<p>Beyond the core services of updates, backups, and monitoring, our maintenance plans include things that many business owners do not think about until they become problems. We monitor your SSL certificate expiration and renew it before it lapses, which would cause browsers to display a security warning to your visitors. We check that your contact forms are still delivering emails correctly, because SMTP configurations can break silently when hosting environments change. We verify that your Google Analytics tracking code is still firing properly, because a theme update can sometimes strip it out. We check for broken links that accumulate over time as you add and remove content. These are small things individually, but collectively they determine whether your website is working for your business or quietly failing.</p>

<h2>How We Are Different From Other Maintenance Providers</h2>
<p>There are plenty of companies that offer WordPress maintenance. Many of them are offshore operations that click "update all" once a week and call it done. We are based in New Mexico, we know the businesses we work with, and we treat your site like we built it ourselves — because in many cases, we did.</p>
<p>Our team has deep <a href="/services/wordpress-development">WordPress development</a> experience. When an update causes a conflict, we do not just roll it back and leave it. We diagnose the problem, find a solution, and resolve it properly. When we notice your site is slowing down, we investigate the root cause rather than just noting it in a report. When we spot a security vulnerability, we remediate it proactively rather than waiting for it to be exploited.</p>

<h2>Getting Started With a Maintenance Plan</h2>
<p>Getting started is straightforward. We begin with a comprehensive audit of your current site — checking for existing issues, outdated software, security vulnerabilities, and performance problems. We fix any existing issues as part of onboarding, so your site starts from a healthy baseline. Then we set up monitoring, configure backups, and begin the regular maintenance cycle.</p>
<h2>What Our Clients Say About Maintenance</h2>
<p>The most common feedback we hear from maintenance clients is relief. They no longer worry about their website. They do not wake up wondering if their site is down. They do not get stressed when WordPress sends an update notification. They know it is being handled by professionals who will catch problems before they become emergencies.</p>
<p>A dentist in Albuquerque told us that before signing up for our maintenance plan, she was spending three to four hours per month trying to manage her own WordPress updates, dealing with plugin conflicts, and Googling solutions to problems she did not fully understand. That time was worth far more than the cost of our plan, and the results were better because we catch issues she would not have even recognized as problems.</p>
<p>A construction company owner in Las Cruces signed up after their site went down for 48 hours because a hosting server failed and they had no recent backup. They lost an estimated $8,000 in potential leads during those two days. Since joining our maintenance plan, they have had 99.99 percent uptime, daily backups they can rely on, and the peace of mind that comes from knowing someone is watching their most important marketing asset around the clock.</p>
<p>If your WordPress site is running your business, it deserves the same level of ongoing care as any other critical business system. You would not skip oil changes on your work truck or ignore the expiration dates on your business insurance. Your website is no different. We are here to handle it so you can focus on what you do best — running your business.</p>
`,
  },
  {
    slug: 'security-hardening',
    title: 'WordPress Security Hardening',
    shortTitle: 'Security',
    description: 'If your WordPress site gets hacked, you lose rankings, customer trust, and potentially sensitive data. We lock down your installation with firewall rules, malware scanning, and proactive monitoring before problems happen.',
    icon: 'lock',
    features: [
      'Malware scanning and removal',
      'Firewall configuration',
      'Login security and 2FA setup',
      'File permission hardening',
      'SSL certificate installation',
      'Security audit and report',
    ],
    price: 'From $500',
    longContent: `
<h2>The WordPress Security Landscape in 2026</h2>
<p>WordPress powers over 40 percent of the web, and that makes it the most targeted content management system on the planet. This is not a flaw in WordPress itself — it is simply a numbers game. Attackers build automated tools that scan millions of sites looking for known vulnerabilities in outdated plugins, weak passwords, and misconfigured servers. They do not care whether you are a Fortune 500 company or a small law firm in Albuquerque. If your site has a vulnerability, it will be found and exploited.</p>
<p>In our eight years of working with WordPress, we have cleaned up after hundreds of security breaches and hardened over 400 sites. The businesses that invest in proactive security almost never get breached. The businesses that assume "it won't happen to me" are the ones calling us in a panic on a Monday morning when their site is serving malware or redirecting visitors to spam pages.</p>

<h2>Common WordPress Vulnerabilities We See</h2>
<p>Understanding the most common attack vectors helps explain why security hardening matters and what we are protecting against.</p>

<h3>Outdated Plugins and Themes</h3>
<p>This is the number one attack vector for WordPress sites, responsible for the vast majority of breaches we investigate. When a plugin developer discovers and patches a vulnerability, they publish an update. That update also publicly discloses what the vulnerability was. Attackers immediately build tools to exploit that exact vulnerability on sites that have not yet updated. If your plugin is three versions behind, every vulnerability discovered in those three versions is an open door into your site. This is why our <a href="/services/website-maintenance">maintenance plans</a> include weekly updates — they are your first line of defense.</p>

<h3>Weak Passwords and Brute Force Attacks</h3>
<p>Automated bots make thousands of login attempts per day against WordPress sites, trying common username and password combinations. If your admin username is "admin" and your password is anything that could appear in a dictionary, it is only a matter of time. We see sites that receive 10,000 or more failed login attempts per week. Without proper login security, one of those attempts will eventually succeed.</p>

<h3>File Upload Vulnerabilities</h3>
<p>Contact forms, membership systems, and file upload features can be exploited to upload malicious files to your server if they are not properly secured. We have investigated breaches where attackers uploaded PHP backdoor scripts through a poorly configured contact form file attachment feature. Once they have a backdoor on your server, they have complete control.</p>

<h3>SQL Injection and Cross-Site Scripting</h3>
<p>Poorly coded plugins or custom code can allow attackers to inject malicious SQL queries into your database or embed malicious scripts in your pages. These attacks can steal customer data, redirect visitors, or give attackers admin access. We review your installed plugins for known vulnerabilities and audit any custom code for common security flaws.</p>

<h3>Server and Hosting Vulnerabilities</h3>
<p>Your WordPress site is only as secure as the server it runs on. Outdated PHP versions, misconfigured file permissions, exposed configuration files, and shared hosting environments can all create vulnerabilities that exist below the WordPress layer. We audit the full stack, not just the WordPress installation.</p>

<h2>Our Security Hardening Process</h2>
<p>Security hardening is not installing a single plugin and calling it done. It is a systematic process that addresses every layer of your WordPress installation. Here is what we do.</p>

<h3>Comprehensive Security Audit</h3>
<p>We start by assessing your current security posture. We scan for existing malware, check for known vulnerabilities in your plugins and themes, review your hosting configuration, test your login security, audit file permissions, and check for exposed sensitive files. We document every finding and prioritize them by risk level. If your site is already compromised, we handle the cleanup first before hardening.</p>

<h3>Web Application Firewall Setup</h3>
<p>We configure a web application firewall that filters malicious traffic before it reaches your WordPress installation. This blocks known attack patterns, SQL injection attempts, cross-site scripting, and brute force attacks at the network level. The firewall rules are continuously updated to protect against newly discovered threats. We typically implement this at both the server level and the application level for defense in depth.</p>

<h3>Login Security and Two-Factor Authentication</h3>
<p>We implement multiple layers of login security. This includes changing the default login URL so bots cannot find it, limiting failed login attempts to block brute force attacks, implementing two-factor authentication for all admin accounts, enforcing strong password policies, and disabling XML-RPC if it is not needed. For a medical practice in Rio Rancho with multiple staff members accessing the WordPress admin, we set up role-based access so each person only has the permissions they need.</p>

<h3>File Permission Hardening</h3>
<p>WordPress files and directories need specific permissions to function correctly while remaining secure. Too permissive and attackers can modify files. Too restrictive and WordPress cannot operate normally. We set proper permissions for the wp-config.php file, the wp-content directory, the uploads folder, and all other critical locations. We also disable file editing through the WordPress admin panel, which is a common vector for attackers who gain admin access.</p>

<h3>Server-Level Hardening</h3>
<p>We work with your hosting environment to secure the server layer. This includes ensuring PHP is up to date and properly configured, disabling dangerous PHP functions, configuring security headers like Content-Security-Policy and X-Frame-Options, enabling ModSecurity or similar server-level protections, and locking down directory browsing. We also ensure your wp-config.php file contains proper security keys and salts, and that database credentials are not using default values.</p>

<h3>SSL Certificate and HTTPS Configuration</h3>
<p>HTTPS encryption is non-negotiable in 2026. It protects data transmitted between your visitors and your server, it is a Google ranking factor, and browsers flag sites without it as "Not Secure." We install and configure your SSL certificate, set up proper redirects from HTTP to HTTPS, fix any mixed content issues, and configure HSTS headers to prevent downgrade attacks.</p>

<h3>Malware Scanning and Monitoring</h3>
<p>We set up continuous malware scanning that checks your files and database for known malware signatures, suspicious code patterns, and unauthorized changes. Scans run daily, and any detection triggers an immediate alert and investigation. We also implement file integrity monitoring that detects when any core WordPress file, plugin file, or theme file has been modified, which is often the first sign of a breach.</p>

<h3>Database Security</h3>
<p>We change the default WordPress database table prefix, which prevents automated SQL injection attacks that assume default naming. We restrict database user privileges to only what WordPress needs. We clean up unnecessary data that could be sensitive, such as stored personal information in post revisions or old form submissions.</p>

<h2>Recovery Planning and Incident Response</h2>
<p>No security setup is 100 percent impervious. The goal is to make your site as hard a target as possible and to have a plan in place if something does get through. Our hardening service includes setting up a recovery plan that documents your site configuration, establishes backup restoration procedures, and defines an incident response process. If a breach occurs, we know exactly what steps to take to contain it, clean it up, and restore your site with minimal downtime.</p>
<p>We have executed this recovery process for businesses across New Mexico. A construction company in Albuquerque had their site compromised through a zero-day vulnerability in a popular form plugin — a vulnerability that was unknown until it was already being exploited. Because they had our security monitoring and backup system in place, we detected the breach within hours, identified the entry point, cleaned the malware, patched the vulnerability, and restored the site. Total downtime was under six hours. Without monitoring and backups, the damage would have been far worse.</p>

<h2>Compliance Considerations</h2>
<p>Depending on your industry, you may have regulatory requirements around website security and data protection. Medical practices need to consider HIPAA compliance for any patient data collected through their website. Businesses that process credit cards need PCI DSS compliance. Even general businesses should be aware of data protection best practices under applicable state and federal laws.</p>
<p>We are not lawyers and we do not provide legal compliance advice, but we do ensure that the technical security controls on your WordPress site align with common compliance frameworks. For a medical practice in Albuquerque collecting patient intake forms through their website, we ensure data is encrypted in transit and at rest, access is properly restricted, and sensitive submissions are handled securely.</p>

<h2>Real Breach Examples and Lessons Learned</h2>
<p>We share these examples not to alarm you but to illustrate why proactive security matters. A restaurant in Santa Fe had their site hacked and used to host a phishing page that mimicked a major bank's login. Google flagged their site as dangerous within 24 hours, they lost all search traffic, and it took three weeks to get the warning removed even after the site was cleaned. Three weeks of lost search visibility during their busy season cost them thousands in lost reservations.</p>
<p>A law firm in Las Cruces had their contact form exploited to send spam emails from their domain. Their email domain got blacklisted, which meant their legitimate emails to clients started bouncing. It took over a month to get delisted from all the major spam databases. During that time, they could not reliably communicate with their own clients via email.</p>
<p>Both of these situations were entirely preventable with proper security hardening. The cost of prevention is a fraction of the cost of cleanup and lost business.</p>

<h2>Ongoing Security Maintenance</h2>
<p>Security hardening establishes a strong baseline, but security is an ongoing process. New vulnerabilities are discovered regularly, and attackers continuously evolve their techniques. We recommend pairing security hardening with one of our <a href="/services/website-maintenance">maintenance plans</a> that includes continuous security monitoring, regular plugin updates, and ongoing vulnerability assessments. This ensures your site stays protected not just today, but next month and next year.</p>
<h2>The Cost of a Security Breach</h2>
<p>When we talk to business owners about security, the most common response is "my site is too small to be a target." That fundamentally misunderstands how WordPress attacks work. Attackers do not manually target individual sites. They use automated scanners that crawl the entire internet looking for specific vulnerabilities. Your site being small or local does not protect you. In fact, smaller sites are often easier targets because they are less likely to have professional security in place.</p>
<p>The cost of a breach extends far beyond the cleanup. There is the immediate cost of malware removal and site restoration, which typically runs several hundred to several thousand dollars depending on severity. Then there is the Google penalty — if Google flags your site as dangerous, you disappear from search results entirely, and it can take weeks to get the warning removed even after the site is clean. During that time, every potential customer who searches for your business sees a red warning page instead of your website.</p>
<p>For businesses that collect customer information — contact forms, appointment requests, consultation inquiries — a breach also means potential exposure of customer data. For a medical practice or law firm, that creates legal liability. For any business, it destroys trust. Customers who learn their data was compromised through your website are unlikely to do business with you again.</p>
<p>If you are not sure about the current security state of your WordPress site, we offer a free initial security assessment that will identify your most critical vulnerabilities and recommend the steps needed to address them. You do not have to wait for a breach to find out your site was vulnerable.</p>
`,
  },
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    shortTitle: 'WooCommerce',
    description: 'Selling online should not mean fighting with your website. We set up WooCommerce stores that are fast, easy to manage, and optimized to turn browsers into buyers. From product pages to checkout flow, every step is designed to convert.',
    icon: 'cart',
    features: [
      'Custom WooCommerce store setup',
      'Payment gateway integration',
      'Product page optimization',
      'Shipping and tax configuration',
      'Inventory management setup',
      'Checkout flow optimization',
    ],
    price: 'From $1,500',
    longContent: `
<h2>Selling Online With WooCommerce</h2>
<p>WooCommerce is the most popular e-commerce platform in the world, powering over 25 percent of all online stores. There is a good reason for that — it is built on WordPress, which means you own your store, your data, and your content completely. Unlike Shopify or BigCommerce, there is no monthly platform fee eating into your margins, no restrictions on how you can customize your store, and no risk of being deplatformed because a third party changed their terms of service.</p>
<p>We have been building WooCommerce stores for over eight years, and in that time we have set up everything from simple shops selling a handful of products to complex stores with thousands of SKUs, variable pricing, subscription models, and custom fulfillment workflows. For New Mexico businesses looking to sell online — whether you are a boutique in Santa Fe, a specialty food producer in Albuquerque, or a craft supplier in Taos — WooCommerce gives you the flexibility and control that other platforms simply cannot match.</p>

<h2>Our WooCommerce Store Setup Process</h2>
<p>Setting up a WooCommerce store that actually converts is different from setting up a brochure website. E-commerce has its own set of technical challenges, from payment processing to tax calculation to inventory management. Here is how we approach it.</p>

<h3>Planning and Store Architecture</h3>
<p>Before we write any code, we plan your store's architecture. This means organizing your product categories and attributes in a way that makes sense for both shoppers and search engines. We map out your navigation so customers can find products quickly. We plan which pages you need beyond just product listings — landing pages, about your brand, sizing guides, care instructions, wholesale inquiries, and anything else that supports the buying decision.</p>
<p>For a specialty chile and food products company in Albuquerque, this meant creating product categories by product type, heat level, and use case, along with recipe pages that featured the products and gift box landing pages for seasonal promotions. The architecture we built drove a 45 percent increase in average pages viewed per session because customers could easily browse and discover related products.</p>

<h3>Custom Theme and Design</h3>
<p>Your store's design directly impacts whether visitors trust you enough to enter their credit card information. We build custom WooCommerce themes that reflect your brand, showcase your products effectively, and follow proven e-commerce design patterns. This means professional product photography layouts, clear pricing displays, prominent add-to-cart buttons, trust signals like security badges and return policies, and a clean visual hierarchy that guides visitors toward purchasing.</p>
<p>We do not use generic WooCommerce themes. Every store we build has a custom design tailored to your brand and your products. A store selling handmade jewelry looks and feels completely different from a store selling industrial supplies, and the design should reflect that. We build using a combination of custom theme development and Elementor Pro with WooCommerce widgets, depending on the complexity of the project and your ongoing management needs.</p>

<h2>Payment Gateway Integration</h2>
<p>Getting paid reliably is the whole point. We integrate the payment gateways that make sense for your business. For most stores, that means Stripe for credit and debit cards, which offers the best combination of reliability, fees, and developer experience. We also set up PayPal as a secondary option since many customers prefer it. For businesses that need specialized payment processing — like a furniture store in Santa Fe that offers financing, or a subscription-based business that needs recurring billing — we configure the appropriate solutions.</p>
<p>We handle the entire payment gateway setup, including test transactions to verify everything works correctly before launch. We configure proper email receipts, payment confirmations, and failed payment notifications. We also ensure your checkout is PCI compliant so customer payment data is handled securely.</p>

<h2>Shipping Configuration</h2>
<p>Shipping is where many WooCommerce stores get complicated, and where many store owners get frustrated. We configure shipping zones, methods, and rates that match your actual fulfillment process. This might include flat rate shipping, free shipping thresholds, weight-based calculations, real-time carrier rates from USPS, UPS, or FedEx, or local pickup options.</p>
<p>For a New Mexico business shipping chile products nationwide, we set up weight-based shipping with special handling rules for perishable items. For a furniture maker in Santa Fe selling locally, we configured local delivery zones with different rates based on distance and free in-store pickup. For a business selling digital products, we configured instant download delivery with no shipping at all. Every store is different, and we configure shipping to match your reality.</p>

<h2>Product Management Done Right</h2>
<p>How your products are set up in WooCommerce affects everything from how they appear on your site to how they rank in Google to how easy they are for you to manage. We set up your product catalog with proper categories, tags, attributes, and variations. We configure product images with proper sizing, alt text, and gallery layouts. We write SEO-optimized product descriptions or optimize the ones you provide.</p>
<p>For stores with variable products — like a clothing store with multiple sizes and colors — we set up variations correctly so customers can select their options without confusion and inventory is tracked accurately for each combination. For stores with hundreds or thousands of products, we set up efficient import workflows so you can add and update products in bulk using CSV files rather than entering each one manually.</p>

<h2>Checkout Flow Optimization</h2>
<p>The checkout page is where you either make the sale or lose the customer. The average online cart abandonment rate is around 70 percent, and a significant chunk of that is caused by checkout friction. We optimize every aspect of the checkout to reduce abandonment and increase completions.</p>
<ul>
<li><strong>Streamlined fields:</strong> We remove every unnecessary form field. If you do not need a company name or a second address line, they should not be there creating friction.</li>
<li><strong>Guest checkout:</strong> We enable guest checkout so first-time buyers do not have to create an account before purchasing. Account creation is offered after the purchase is complete.</li>
<li><strong>Trust signals:</strong> Security badges, return policy summaries, and payment method icons are placed where they reduce purchase anxiety.</li>
<li><strong>Express payment:</strong> We implement Apple Pay, Google Pay, and PayPal Express options so returning customers can check out in seconds.</li>
<li><strong>Error handling:</strong> Clear, specific error messages that tell customers exactly what needs to be fixed rather than vague warnings.</li>
<li><strong>Mobile optimization:</strong> The checkout is fully optimized for mobile with appropriately sized touch targets, smart keyboard types for phone and email fields, and no horizontal scrolling.</li>
</ul>

<h2>Inventory Management</h2>
<p>WooCommerce includes built-in inventory management that works well for most small to medium stores. We configure stock tracking, low stock notifications, out-of-stock visibility settings, and backorder handling based on your business needs. For businesses that need more sophisticated inventory management — like syncing with a physical store's point-of-sale system or managing inventory across multiple warehouses — we integrate with dedicated inventory management solutions that connect to WooCommerce.</p>

<h2>Tax Configuration</h2>
<p>Sales tax for e-commerce is complicated, especially when you are selling to customers in multiple states. We configure WooCommerce tax settings based on your business's tax obligations. For most stores, we recommend and set up automated tax calculation services that determine the correct rate based on the customer's shipping address, handling the complexity of varying state, county, and city tax rates automatically. For a New Mexico-based business, that means New Mexico gross receipts tax is handled correctly for local sales, and out-of-state sales tax is calculated based on where the customer is located.</p>

<h2>Performance Optimization for WooCommerce</h2>
<p>WooCommerce stores have unique performance challenges that standard WordPress sites do not. Product queries are more database-intensive, product images are more numerous, and dynamic pages like the cart and checkout cannot be cached the same way as static pages. We optimize WooCommerce performance from the ground up — efficient product queries, optimized image loading, smart caching that works around dynamic pages, and proper hosting for e-commerce workloads.</p>
<p>If your WooCommerce store is already live and running slowly, our <a href="/services/speed-optimization">speed optimization service</a> includes WooCommerce-specific optimizations. A slow store directly impacts your conversion rate. Studies consistently show that every second of added load time reduces conversions by 7 percent. For a store processing $10,000 per month, a one-second improvement could mean an additional $700 per month in sales.</p>

<h2>SEO for WooCommerce Products</h2>
<p>Your products need to show up when people search for them. We optimize your WooCommerce store for search engines with proper product schema markup that enables rich results in Google, keyword-optimized product titles and descriptions, clean URL structures, proper category and tag architecture, and internal linking between related products and content pages. Our <a href="/services/wordpress-seo">WordPress SEO service</a> includes specialized WooCommerce optimization for stores that need comprehensive search visibility.</p>

<h2>Ongoing Store Management and Growth</h2>
<p>Launching your store is the beginning, not the end. WooCommerce stores need ongoing attention — plugin updates that do not break your checkout, security monitoring to protect customer data, performance maintenance as your product catalog grows, and feature additions as your business evolves. Our <a href="/services/website-maintenance">maintenance plans</a> include WooCommerce-specific monitoring and management to keep your store running smoothly.</p>
<p>We also help with post-launch growth strategies like email marketing integration, abandoned cart recovery, upsell and cross-sell configuration, loyalty programs, and conversion rate optimization based on your actual sales data. Many of our WooCommerce clients in New Mexico started with a basic store and have grown into sophisticated e-commerce operations over time, with us building new features and capabilities as their businesses expanded.</p>
<h2>WooCommerce vs Other E-Commerce Platforms</h2>
<p>Business owners often ask us whether they should use WooCommerce, Shopify, or another platform. The honest answer depends on your situation, but for most small to medium businesses in New Mexico, WooCommerce offers the best combination of flexibility, cost, and control.</p>
<p>Shopify is a good platform, but it comes with monthly fees that increase as you grow, transaction fees on top of payment processing fees unless you use Shopify Payments, and limitations on customization that can become frustrating as your business evolves. You also do not own your store — you are renting it. If Shopify changes their pricing, their terms, or discontinues a feature you depend on, you have limited options.</p>
<p>WooCommerce runs on your own hosting, which means you own everything. There are no platform fees, no transaction fees beyond what your payment processor charges, and no limitations on what you can build. The trade-off is that WooCommerce requires more technical management, which is exactly what our development and <a href="/services/website-maintenance">maintenance services</a> provide. We handle the technical complexity so you get the benefits of ownership without the headaches.</p>
<p>For a specialty food producer in Albuquerque shipping green chile nationwide, the ability to customize shipping rules, create bundle products, offer subscription boxes, and integrate with their existing inventory system made WooCommerce the clear choice. For a jewelry artisan in Santa Fe who wanted complete control over the visual presentation of their products without template constraints, WooCommerce's flexibility was exactly what they needed.</p>
<p>If you are ready to sell online or need to upgrade an existing store that is not performing, we would be happy to discuss what a WooCommerce project looks like for your specific products and business model.</p>
`,
  },
  {
    slug: 'website-redesign',
    title: 'WordPress Website Redesign',
    shortTitle: 'Redesign',
    description: 'Your website is the first impression most customers get of your business. If it looks outdated, loads slowly, or does not work on mobile, you are losing money. We redesign WordPress sites with modern aesthetics, better UX, and SEO-safe migrations.',
    icon: 'paintbrush',
    features: [
      'Full visual redesign and rebrand',
      'Content migration and restructuring',
      'SEO-safe URL redirects',
      'Conversion rate optimization',
      'Mobile experience overhaul',
      'Analytics and tracking setup',
    ],
    price: 'From $900',
    longContent: `
<h2>Signs Your Website Needs a Redesign</h2>
<p>Not every website that feels outdated actually needs a full redesign. Sometimes a few targeted improvements are enough. But after redesigning hundreds of WordPress sites over the past eight years, we have learned to recognize the clear signs that a site has reached the point where patching it up is more expensive and less effective than starting fresh.</p>
<ul>
<li><strong>Your site is not mobile-friendly:</strong> If your website was built before 2016 or was built with a theme that does not fully support responsive design, it probably does not work well on phones. With more than 60 percent of web traffic coming from mobile devices, a non-responsive site is turning away more than half your potential customers.</li>
<li><strong>Your bounce rate is above 60 percent:</strong> If most visitors are leaving after viewing just one page, your site is not engaging them. That could be a design problem, a content problem, or a speed problem — often all three.</li>
<li><strong>Your site looks dated:</strong> Web design trends change. A site that looked great in 2018 looks old today. Visitors make snap judgments about your business based on your website design. An outdated site suggests an outdated business, even if that is not true.</li>
<li><strong>Your site is painfully slow:</strong> If your site takes more than three seconds to load, you are losing visitors. Sometimes speed issues can be fixed with <a href="/services/speed-optimization">optimization</a>, but often the underlying theme and plugin architecture is so bloated that a rebuild is the more cost-effective path.</li>
<li><strong>You cannot update content easily:</strong> If making simple changes to your website requires a developer, your site's content management setup is failing you. A redesign gives us the opportunity to build a content management system that you can actually use.</li>
<li><strong>Your business has evolved:</strong> If your services, branding, or target audience have changed since your site was built, the site no longer represents your business accurately. A law firm in Albuquerque that has added three new practice areas since their site launched needs those areas properly represented, not crammed into a sidebar.</li>
</ul>

<h2>Our Redesign Process</h2>
<p>A website redesign done wrong can destroy your search rankings, break your existing traffic, and cost you months of recovery. Our process is designed to give you a better website while protecting everything you have already built.</p>

<h3>Audit and Discovery</h3>
<p>Before we design a single page, we audit your current site. We analyze your Google Analytics and Search Console data to understand which pages get traffic, which keywords you rank for, and where visitors are coming from. We identify your highest-performing content so we know what to preserve and enhance. We document your current URL structure so nothing gets lost in the transition. We review your competitors' sites to identify design patterns and features in your industry.</p>
<p>For a medical practice in Rio Rancho, this audit revealed that their blog posts about common conditions were driving 40 percent of their organic traffic but were buried three clicks deep in the navigation. In the redesign, we promoted that content to the homepage and saw a 25 percent increase in appointment requests within the first month.</p>

<h3>Content Strategy and Information Architecture</h3>
<p>Design follows content, not the other way around. Before we open a design tool, we map out your content strategy. What pages do you need? How should they be organized? What is the primary action you want visitors to take on each page? What content needs to be written, rewritten, or migrated from the old site?</p>
<p>We create a site map that organizes your content logically for both visitors and search engines. We define the page hierarchy, the navigation structure, and the user flows for your most important conversion paths. For a construction company in Las Cruces, this meant restructuring their site from a flat list of services into organized categories with individual project case studies, which gave them much stronger pages for each service they offer.</p>

<h3>Design Phase</h3>
<p>With the content strategy defined, we design your new site. We start with wireframes that show the layout and structure without visual styling, so we can focus on user experience without getting distracted by colors and fonts. Once the wireframes are approved, we move to full visual designs that incorporate your brand identity — colors, typography, imagery, and the overall look and feel you want to project.</p>
<p>You review and approve the design before any code is written. We typically present two to three design directions for the homepage and then develop the chosen direction across all page templates. We show you the design on desktop, tablet, and mobile so you know exactly what your visitors will see on every device.</p>

<h3>SEO-Safe Migration Planning</h3>
<p>This is the step that many web designers skip, and it is the one that can cause the most damage. If your current site has pages that rank in Google, those pages have accumulated authority over time. If the redesign changes their URLs without proper redirects, that authority disappears. We have seen businesses lose 50 percent or more of their organic traffic after a redesign because redirects were not handled properly.</p>
<p>We create a comprehensive redirect map that accounts for every URL on your old site. Every old URL gets a 301 redirect to the appropriate new URL. We update your XML sitemap. We submit the new sitemap to Google Search Console. We monitor for crawl errors in the weeks after launch and fix any that appear. Our goal is zero traffic loss from the migration — and in many cases, the improved site structure and content actually lead to traffic increases.</p>

<h3>Development and Build</h3>
<p>We build your new site on a staging environment so it does not affect your live site during development. We use the same <a href="/services/wordpress-development">custom WordPress development</a> approach we use for all our projects — clean code, Elementor Pro or custom theme development depending on your needs, Advanced Custom Fields for structured content, and a focus on performance from day one.</p>
<p>The development phase includes migrating your content from the old site, building all page templates, configuring forms and integrations, setting up any new functionality, and thorough testing across browsers and devices.</p>

<h3>UX Improvements</h3>
<p>A redesign is the perfect opportunity to fix the user experience problems that have been costing you leads and sales. Based on our audit findings and best practices from hundreds of projects, we improve navigation to reduce the clicks required to reach key content. We redesign forms to reduce abandonment. We improve page layouts to guide visitors toward your primary calls to action. We add trust signals — testimonials, credentials, certifications, portfolio items — where they have the most impact.</p>
<p>For a law firm in Albuquerque, UX improvements in their redesign included simplifying their practice area navigation, adding a prominent phone number to the mobile header, creating a streamlined contact form that replaced a 15-field intake form, and adding client testimonials near every call to action. Their contact form submission rate increased by 60 percent after launch.</p>

<h3>Mobile Experience Overhaul</h3>
<p>We do not just make the desktop site responsive — we design the mobile experience as its own thing. Navigation is rebuilt for thumb-friendly interaction. Content is prioritized for the mobile viewport so the most important information appears first. Phone numbers are tap-to-call. Maps are interactive. Forms are designed for on-screen keyboards with appropriate input types. Images are optimized for mobile bandwidth. The mobile experience gets the same design attention as the desktop experience because, for most businesses, it is where most of your visitors are.</p>

<h3>Conversion Rate Optimization</h3>
<p>Every redesign we do includes conversion optimization. We strategically place calls to action based on user behavior data. We use contrasting colors for primary buttons so they stand out. We reduce friction in conversion paths by minimizing required clicks and form fields. We implement social proof near decision points. We create clear value propositions above the fold on key landing pages. These are not abstract design theories — they are practices backed by data from our eight years of building and optimizing WordPress sites.</p>

<h2>URL Redirect Handling in Detail</h2>
<p>Because this is so critical, it deserves its own section. Here is exactly what we do to protect your search rankings during a redesign.</p>
<ul>
<li><strong>Full URL inventory:</strong> We crawl your existing site and create a complete list of every indexed URL</li>
<li><strong>Redirect mapping:</strong> Each old URL is mapped to the most relevant new URL — not just the homepage, but the specific equivalent page</li>
<li><strong>301 redirect implementation:</strong> We implement permanent 301 redirects at the server level for maximum reliability</li>
<li><strong>Post-launch monitoring:</strong> We check Google Search Console daily for the first two weeks after launch to catch any crawl errors or missed redirects</li>
<li><strong>Backlink preservation:</strong> If external sites link to specific pages on your old site, those redirects ensure the link equity is transferred to the new pages</li>
</ul>

<h2>Analytics and Tracking Setup</h2>
<p>A new site needs proper measurement from day one. We set up Google Analytics 4 with event tracking for your key conversion actions — form submissions, phone clicks, email clicks, and any other actions that indicate a lead or sale. We configure Google Search Console and submit your updated sitemap. We set up conversion goals so you can measure the ROI of your redesign with real data. If you use other tools like call tracking, CRM integrations, or advertising platforms, we configure those connections as well.</p>

<h2>Measuring Success After Launch</h2>
<p>A redesign should produce measurable improvements. In the weeks and months after launch, we track organic traffic trends to ensure there was no traffic loss from the migration. We compare conversion rates before and after to measure the impact of UX improvements. We monitor Core Web Vitals to ensure the new site is meeting performance standards. We review user behavior data — bounce rate, pages per session, time on site — to confirm that visitors are engaging more deeply with the new design.</p>
<p>For most of our redesign projects, we see a 20 to 40 percent improvement in conversion rates within the first three months, driven by better mobile experience, faster load times, and more strategic calls to action. Paired with ongoing <a href="/services/website-maintenance">maintenance</a> and <a href="/services/wordpress-seo">SEO optimization</a>, the new site continues to improve over time rather than slowly declining as the old one did.</p>
<h2>Common Redesign Mistakes We Help You Avoid</h2>
<p>We have seen enough botched redesigns from other agencies to know exactly what to avoid. The biggest mistake is prioritizing aesthetics over function. A beautiful website that does not convert visitors into customers is a failure no matter how good it looks. Every design decision we make is grounded in what drives results for your specific business and audience.</p>
<p>The second most common mistake is ignoring the existing SEO value of the old site. We have inherited clients whose previous developers redesigned their site, changed every URL, and implemented zero redirects. Their organic traffic dropped by 70 percent overnight and took six months to recover. Our redirect handling process ensures that never happens.</p>
<p>The third mistake is launching without proper analytics. If you cannot measure how your new site performs compared to the old one, you have no way to know whether the redesign was successful. We set up comprehensive tracking before launch so you have comparison data from day one.</p>
<p>Finally, many redesigns fail because the content is an afterthought. The design is finalized and then the client scrambles to fill pages with text at the last minute. Our process puts content strategy first, which means every page is designed around the actual content it will contain, resulting in a more cohesive and effective final product.</p>
<p>If your current website is holding your business back, we would be glad to take a look and give you an honest assessment of whether a redesign makes sense or whether targeted improvements on your existing site would be more cost-effective. We have told plenty of businesses that they do not need a full redesign — we only recommend it when it is genuinely the right solution.</p>
`,
  },
]
