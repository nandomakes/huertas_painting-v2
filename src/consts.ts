// ════════════════════════════════════════════════════════════════════
// CENTRALIZED SITE DATA — HUERTA'S PAINTING, LLC
// Edit ONLY this file (+ the images in src/assets/images) to personalize
// the whole site. All copy below comes from huertaspaintingllc.com — no
// invented prices, numbers or reviews.
// ════════════════════════════════════════════════════════════════════

export const SITE = {
  name: "Huerta's Painting",
  brand: "Huerta's Painting, LLC",
  shortName: "Huerta's",
  role: 'Residential Painting Services',
  city: 'Apple Valley, MN',
  founder: 'Pedro Ramirez-Huerta',
  founded: '2018',
  // Kept under ~60 chars so Google shows it whole.
  title: "House Painters in Apple Valley, MN | Huerta's Painting",
  // Kept under ~155 chars so Google doesn't truncate it.
  description:
    "Family-owned house painters in Apple Valley, MN. Interior & exterior painting, drywall & ceiling repair, deck refinishing. Free estimates.",
  // Must match `site` in astro.config.mjs and robots.txt.
  url: 'https://huertaspaintingllc.com',
  themeColor: '#192A53',
};

// ── Analytics ───────────────────────────────────────────────────────
// Empty = no tag is emitted. Paste the GA4 Measurement ID (G-XXXXXXX) here,
// or set PUBLIC_GA4_ID in Vercel to override per-environment.
export const GA4_ID = '';

// ── Contact / Phone ─────────────────────────────────────────────────
export const PHONE_DISPLAY = '(952) 769-3906';
export const PHONE_TEL = '+19527693906';

export const CONTACT = {
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  // Pedro takes both calls AND texts on the same number.
  smsHref: `sms:${PHONE_TEL}`,
  email: 'huertaspaintingllc@gmail.com',
  city: 'Apple Valley, MN',
  locality: 'Apple Valley',
  region: 'MN',
  // ⚠️ The live site publishes no street address or hours — add them here
  // (and to the JSON-LD in Layout.astro) if the client wants them shown.
  // Pin from the Google Business Profile (HUERTA'S PAINTING LLC).
  geo: { lat: 44.7769435, lng: -93.243083 },
  mapEmbed:
    "https://maps.google.com/maps?q=HUERTA'S%20PAINTING%20LLC%2C%20Apple%20Valley%2C%20MN&ll=44.7769435,-93.243083&z=12&output=embed",
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=HUERTA%27S+PAINTING+LLC&destination_place_id=ChIJBzGQ7vA39ocRYgBEeT8yMXU',
};

// ── Social / review profiles ────────────────────────────────────────
export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/huertaspaintingllc/' },
  { name: 'Nextdoor', href: 'https://nextdoor.com/pages/huertas-painting-llc-apple-valley-mn/' },
];

// The client asked NOT to show the star rating anywhere on the site — only
// links that send visitors to the profiles to read the reviews themselves.
export const PROFILES = {
  /** Google Business Profile → reviews panel. */
  google:
    "https://www.google.com/maps/place/HUERTA'S+PAINTING+LLC/@44.7769435,-93.243083,12z/data=!4m8!3m7!1s0x87f637f0ee903107:0x7531323f79440062!8m2!3d44.7769435!4d-93.243083!9m1!1b1",
  /** Opens Google's "write a review" dialog (used on the review funnel). */
  googleWriteReview: 'https://g.page/r/CWIARHk_MjF1EAI/review',
  facebook: 'https://www.facebook.com/huertaspaintingllc/',
  facebookReviews: 'https://www.facebook.com/huertaspaintingllc/reviews',
  nextdoor: 'https://nextdoor.com/pages/huertas-painting-llc-apple-valley-mn/',
  nextdoorRecommend: 'https://nextdoor.com/pages/huertas-painting-llc-apple-valley-mn/recommendations/',
  bbb: 'https://www.bbb.org/us/mn/farmington/profile/residential-painter/huertas-painting-llc-0704-1000076060',
};

/** Review funnel pages — same URLs as the WordPress site (QR codes / texts). */
export const REVIEW_FUNNEL = {
  start: '/we-value-our-clients/',
  positive: '/thanks-for-responding/',
  negative: '/thanks-for-your-feedback/',
};

// ── Images ──────────────────────────────────────────────────────────
// Live in src/assets/images (NOT public/) so Astro emits responsive,
// hashed AVIF/WebP. Render with <Image>/<Picture> from astro:assets.
import heroImg from './assets/images/huertas-painting-truck-hero.jpg';
import bandImg from './assets/images/painting-section-background.jpg';
import painterImg from './assets/images/interior-painter-residential.jpg';
import pedroImg from './assets/images/pedro-ramirez-huerta-founder.jpg';
import pedro2Img from './assets/images/pedro-ramirez-huerta.jpg';
import ladderImg from './assets/images/painter-on-ladder.png';
import step1Img from './assets/images/step-1-consultation.jpg';
import step2Img from './assets/images/step-2-quote.jpg';
import step3Img from './assets/images/step-3-relax.jpg';
import interiorAVImg from './assets/images/house-painting-interior-apple-valley.jpg';
import interiorLkImg from './assets/images/house-painting-interior-lakeville.jpg';
import exteriorEgImg from './assets/images/house-painting-exterior-eagan.jpg';
import interiorEgImg from './assets/images/house-painting-interior-eagan.jpg';
import exteriorFmImg from './assets/images/house-painting-exterior-farmington.png';
import bbbImg from './assets/images/badges/bbb-accredited.png';
import nextdoorImg from './assets/images/badges/nextdoor-neighborhood-favorite.png';

import svcInterior from './assets/images/services/interior-painting.jpg';
import svcInterior2 from './assets/images/services/interior-painting-2.jpg';
import svcExterior from './assets/images/services/exterior-painting.jpg';
import svcExterior2 from './assets/images/services/exterior-painting-2.jpg';
import svcDrywall from './assets/images/services/drywall-repair.jpg';
import svcDrywall2 from './assets/images/services/drywall-repair-2.jpg';
import svcTexturing from './assets/images/services/ceiling-texturing.jpg';
import svcCeiling from './assets/images/services/ceiling-repair.jpg';
import svcCeiling2 from './assets/images/services/ceiling-repair-2.jpg';
import svcDeck from './assets/images/services/deck-refinishing.jpg';
import svcDeck2 from './assets/images/services/deck-refinishing-2.jpg';

export const IMAGES = {
  // The client's own van photo — they asked to keep it as the home hero.
  hero: { src: heroImg, alt: "Huerta's Painting work van parked outside a home in Apple Valley, MN" },
  band: { src: bandImg, alt: 'Painter rolling a fresh coat onto a living-room wall' },
  painter: { src: painterImg, alt: "Huerta's Painting crew member painting a residential interior" },
  pedro: { src: pedroImg, alt: "Pedro Ramirez-Huerta, founder of Huerta's Painting" },
  pedro2: { src: pedro2Img, alt: "Pedro Ramirez-Huerta on a job site" },
  ladder: { src: ladderImg, alt: 'Professional painter on a ladder' },
  interiorAV: { src: interiorAVImg, alt: 'Interior house painting in Apple Valley, MN' },
  interiorLk: { src: interiorLkImg, alt: 'Interior house painting in Lakeville, MN' },
  exteriorEg: { src: exteriorEgImg, alt: 'Exterior house painting in Eagan, MN' },
  interiorEg: { src: interiorEgImg, alt: 'Interior house painting in Eagan, MN' },
  exteriorFm: { src: exteriorFmImg, alt: 'Exterior house painting in Farmington, MN' },
};

// Full-bleed backgrounds: high-res Unsplash photos (free license), so they
// stay sharp at full width. The client's own photos are ≤1180px wide and
// looked blurry when stretched across the screen; they are still used at
// their real size in cards, the gallery and the reviews.
import bgHero from './assets/images/unsplash/hero-suburban-house.jpg';
import bgStats from './assets/images/unsplash/stats-two-story-house.jpg';
import bgTudor from './assets/images/unsplash/page-tudor-house.jpg';
import bgHouseLawn from './assets/images/unsplash/page-house-lawn.jpg';
import bgBrightLiving from './assets/images/unsplash/page-bright-living-room.jpg';
import bgLivingWindow from './assets/images/unsplash/page-living-room-window.jpg';
import bgAreaAV from './assets/images/unsplash/area-apple-valley-house.jpg';
import bgAreaLk from './assets/images/unsplash/area-lakeville-interior.jpg';
import bgAreaEg from './assets/images/unsplash/area-eagan-interior.jpg';
import bgAreaFm from './assets/images/unsplash/area-farmington-interior.jpg';
import svcHeroInterior from './assets/images/unsplash/svc-hero-interior-painting.jpg';
import svcHeroExterior from './assets/images/unsplash/svc-hero-exterior-painting.jpg';
import svcHeroDrywall from './assets/images/unsplash/svc-hero-drywall-repair.jpg';
import svcHeroTexturing from './assets/images/unsplash/svc-hero-ceiling-texturing.jpg';
import svcHeroCeiling from './assets/images/unsplash/svc-hero-ceiling-repair.jpg';
import svcHeroDeck from './assets/images/unsplash/svc-hero-deck-refinishing.jpg';

export const BACKGROUNDS = {
  hero: bgHero,
  stats: bgStats,
  about: bgTudor,
  contact: bgHouseLawn,
  services: bgBrightLiving,
  gallery: bgLivingWindow,
  areas: {
    'apple-valley-house-painting': bgAreaAV,
    'lakeville-house-painting': bgAreaLk,
    'eagan-house-painting': bgAreaEg,
    'farmington-house-painting': bgAreaFm,
    // New city pages reuse the hi-res page backgrounds.
    'burnsville-house-painting': bgHouseLawn,
    'rosemount-house-painting': bgStats,
    'eden-prairie-house-painting': bgLivingWindow,
    'richfield-house-painting': bgBrightLiving,
    'mendota-heights-house-painting': bgTudor,
  } as Record<string, ImageMetadata>,
  serviceHeroes: {
    'interior-painting': svcHeroInterior,
    'exterior-painting': svcHeroExterior,
    'drywall-repair': svcHeroDrywall,
    'ceiling-texturing': svcHeroTexturing,
    'ceiling-repair': svcHeroCeiling,
    'deck-refinishing': svcHeroDeck,
  } as Record<string, ImageMetadata>,
};

// Only badges that carry no star rating (client request).
export const BADGES = {
  bbb: { src: bbbImg, alt: 'BBB Accredited Business', href: PROFILES.bbb },
  nextdoor: { src: nextdoorImg, alt: 'Nextdoor Neighborhood Favorite 2021–2025', href: PROFILES.nextdoor },
};

// ── Hero copy ───────────────────────────────────────────────────────
export const HERO = {
  kicker: 'Apple Valley, MN · 5-Star Rated',
  // The H1 carries service + city — what search intent is built on.
  line1: 'Residential Painting',
  line2: 'in Apple Valley, MN',
  sub: 'Whether you need interior painting, exterior painting, drywall repair or ceiling painting, our team of painting professionals are ready to help.',
};

// ── Trust points (home "Why choose us") ─────────────────────────────
export const TRUST = [
  { title: 'Real Reviews on Google', body: 'South Metro homeowners praise our fair estimates, exceptional painting and timely completion — read them on our Google profile.', icon: 'star' },
  { title: 'Nextdoor Neighborhood Favorite', body: 'Voted a Neighborhood Favorite on Nextdoor every year from 2021 through 2025.', icon: 'home' },
  { title: 'Fully Registered & Insured', body: 'A registered Minnesota LLC, fully insured for your peace of mind.', icon: 'shield' },
  { title: 'Guaranteed Workmanship', body: 'We guarantee our workmanship so you can rest assured every project is completed with exceptional quality.', icon: 'badge' },
  { title: 'Exceptional Service', body: "We're known to not miss any detail, and we complete all projects to 100% satisfaction.", icon: 'spark' },
] as const;

// ── Founder quote ───────────────────────────────────────────────────
export const QUOTE = {
  text: 'We are dedicated to providing long-lasting results with quality products and workmanship.',
  author: 'Pedro Ramirez-Huerta',
  role: 'Founder',
};

// ── About ───────────────────────────────────────────────────────────
export const ABOUT = {
  kicker: 'About us',
  title: 'We Treat Every Home Like It Is Our Own',
  sub: 'Precision Painting with Personalized Service',
  lead: "We are a 5-STAR locally-owned and operated family business in Apple Valley, MN. Count on us for fair estimates, exceptional painting, and timely completion. We are known to not miss any detail. We complete all projects to 100% satisfaction.",
  founderLine: "Huerta's Painting was founded in 2018 by Pedro Ramirez-Huerta, and he personally oversees each project.",
};

// Stats from the live About page counters.
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
export const STATS: Stat[] = [
  { value: 10, suffix: '+', label: 'Years experience' },
  { value: 300, suffix: '+', label: 'Projects completed' },
  { value: 9, suffix: '', label: 'Cities served' },
  { value: 100, suffix: '%', label: 'Satisfaction guaranteed' },
];

// "What sets us apart" — About page.
export const APART = [
  {
    title: 'Locally Owned and Operated',
    body: 'As an owner-operated business, we are personally invested in every project from start to finish. We pay close attention to every detail and pride ourselves in friendly and courteous service.',
  },
  {
    title: 'High Quality Workmanship',
    body: 'We go above and beyond to ensure you get excellent, long-lasting results with the high-quality products and preparation steps we take in every project. We pride ourselves on being extremely informed about the process and products we use.',
  },
  {
    title: 'Guaranteed Customer Satisfaction',
    body: "We leave our customers satisfied with their overall project from start to finish. We take steps to care for customers' homes from protection set-up to final clean-up. Count on 100% satisfaction.",
  },
];

// ── Process (1-2-3) ─────────────────────────────────────────────────
export const PROCESS = [
  {
    title: 'Schedule a Free Consultation',
    body: 'Schedule a free in-home consultation to review job requirements and for us to take measurements.',
    image: step1Img,
  },
  {
    title: 'Quote Review & Scheduling',
    body: 'After the in-home visit, you will receive a custom quote. We work with you to schedule a convenient time for our team to come and complete the work.',
    image: step2Img,
  },
  {
    title: 'Prep, Paint & Clean-Up',
    body: 'Our team takes care of everything from prep work to final clean-up, protecting your floors, walls and furnishings along the way.',
    image: step3Img,
  },
  {
    title: 'Sit Back and Relax',
    body: 'Get ready to enjoy your newly transformed space. Founder Pedro Ramirez-Huerta personally oversees each project to 100% satisfaction.',
    image: step3Img,
  },
];

// ── Services ────────────────────────────────────────────────────────
export interface Service {
  slug: string;
  /** Legacy anchor on /services/ (old URLs: /services/#interior). */
  anchor: string;
  num: string;
  name: string;
  short: string;
  intro: string;
  bulletsLead: string;
  bullets: string[];
  image: ImageMetadata;
  image2: ImageMetadata;
  icon: string;
  /** <title> for the detail page — under ~60 chars. */
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'interior-painting',
    anchor: 'interior',
    num: '01',
    name: 'Interior Painting',
    short: 'A custom plan for your space — from a few rooms freshened up to a whole-home makeover.',
    intro:
      'Revitalize your living space with our professional interior painting services. We understand that every home is different and so together we create a custom plan designed for your space. Whether you need a few rooms freshened up or a makeover of your entire home, we are here to help.',
    bulletsLead: 'Count on us for:',
    bullets: [
      'Color consultation expertise',
      'High quality materials selection',
      'Thorough surface preparation including patching and priming',
      'Precision application for a flawless finish',
    ],
    image: svcInterior,
    image2: svcInterior2,
    icon: 'roller',
    seoTitle: "Interior Painting in Apple Valley, MN | Huerta's Painting",
    seoDescription:
      'Professional interior house painting in Apple Valley & the South Metro. Color consultation, thorough prep and a flawless finish. Free estimates.',
  },
  {
    slug: 'exterior-painting',
    anchor: 'exterior',
    num: '02',
    name: 'Exterior Painting',
    short: "Long-lasting protection for your home's first line of defense against the elements.",
    intro:
      "Looking for long-lasting exterior painting? The exterior paint is your home's first line of defense against critters, moisture, and the elements. By thorough prep work, high-end products, and proper application techniques, we can ensure long-lasting results.",
    bulletsLead: 'Look to us to not skip a step:',
    bullets: [
      'Surface preparation including cleaning, scraping, and sanding',
      'Priming for promoting adhesion and long-lasting color retention',
      'Precision techniques to give even coverage and flawless results',
    ],
    image: svcExterior,
    image2: svcExterior2,
    icon: 'house',
    seoTitle: "Exterior House Painting in Apple Valley, MN | Huerta's",
    seoDescription:
      'Exterior house painting built to last Minnesota weather: cleaning, scraping, sanding, priming and even coverage. Serving the South Metro. Free estimates.',
  },
  {
    slug: 'drywall-repair',
    anchor: 'drywall',
    num: '03',
    name: 'Drywall Repair',
    short: 'Nicks, cracks and damaged spots restored so your walls look brand new.',
    intro:
      'Is it time to get rid of those unsightly nicks, cracks and damaged spots on your walls? We can restore your walls so they look brand new and flawless. Our skilled team can handle every step of the drywall repair process no matter how extensive the damage.',
    bulletsLead: 'What we handle:',
    bullets: [
      'Full assessment of the integrity of your walls',
      'Development of tailored solutions to seamlessly do the repair',
      'Tools and techniques for obtaining the best results for surface restoration',
    ],
    image: svcDrywall,
    image2: svcDrywall2,
    icon: 'wall',
    seoTitle: "Drywall Repair in Apple Valley, MN | Huerta's Painting",
    seoDescription:
      'Seamless drywall repair for nicks, cracks and damaged walls in Apple Valley and the Twin Cities South Metro. Paint-ready, flawless results.',
  },
  {
    slug: 'ceiling-texturing',
    anchor: 'texturing',
    num: '04',
    name: 'Ceiling Texturing',
    short: 'Popcorn removal or a new texture — from smooth and sleek to intricate patterns.',
    intro:
      'Whether you want popcorn ceiling removed or a new texturing surface to disguise imperfections, we can tackle your texturing needs with minimal mess and stress. Our skilled craftsmen offer a wide range of solutions from smooth and sleek to more intricate patterns. We can make your ceiling a stunning focal point with our expert knowledge of texturing.',
    bulletsLead: 'Our process:',
    bullets: [
      "Style consultation along with an assessment of your current ceiling's condition",
      'Careful removal of any excess texture material, protecting your floors, walls, and furnishings from debris',
      'Application of a seamless and uniform texturing look',
    ],
    image: svcTexturing,
    image2: svcCeiling2,
    icon: 'texture',
    seoTitle: "Ceiling Texturing & Popcorn Removal | Huerta's Painting",
    seoDescription:
      'Popcorn ceiling removal and new ceiling textures in Apple Valley, MN — with minimal mess and full protection of your floors and furnishings.',
  },
  {
    slug: 'ceiling-repair',
    anchor: 'ceiling',
    num: '05',
    name: 'Ceiling Repair',
    short: 'Water stains, peeling and cracks fixed at the root — your ceiling, good as new.',
    intro:
      'Do you have water damage or deteriorated spots on your ceilings? We can help you get rid of those unappealing yellow spots and eliminate any peeling and cracking on your ceilings. Our goal is not only to repair the damage but also to ensure your ceiling looks as good as new.',
    bulletsLead: 'What to expect:',
    bullets: [
      'Thorough assessment to identify the root cause of the problem',
      'Implementation of tailored solutions',
      'Full capability to do patching, retexturing, and even complete ceiling replacement',
    ],
    image: svcCeiling,
    image2: svcCeiling2,
    icon: 'ceiling',
    seoTitle: "Ceiling Repair in Apple Valley, MN | Huerta's Painting",
    seoDescription:
      'Ceiling repair for water damage, stains, peeling and cracks — patching, retexturing or full replacement. Serving Apple Valley & the South Metro.',
  },
  {
    slug: 'deck-refinishing',
    anchor: 'deck',
    num: '06',
    name: 'Deck Refinishing',
    short: 'Old stain stripped, rotten boards replaced and a finish that protects for seasons.',
    intro:
      'Bring some new life to your deck with professional refinishing. We remove old paint and stain, replace damaged boards, and apply new finishes to exterior decks. Doing a deck refinishing yourself can be a frustrating task that takes away your precious weekend time. Allow us to tackle this project for you!',
    bulletsLead: 'Every deck job includes:',
    bullets: [
      'Replacement of rotten boards and sanding of surfaces',
      'Selection and application of the appropriate finish that repels moisture without locking it in',
      'Allowance for the right amount of weathering time',
    ],
    image: svcDeck,
    image2: svcDeck2,
    icon: 'deck',
    seoTitle: "Deck Refinishing & Staining in Apple Valley, MN | Huerta's",
    seoDescription:
      'Deck refinishing and staining: old finish removed, rotten boards replaced, sanded and sealed with a finish that repels moisture. Free estimates.',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

// ── Service area ────────────────────────────────────────────────────
export const AREAS = [
  'Apple Valley',
  'Lakeville',
  'Burnsville',
  'Eagan',
  'Rosemount',
  'Farmington',
  'Eden Prairie',
  'Richfield',
  'Mendota Heights',
];

// City landing pages. The first four keep the WordPress URLs; the other five
// follow the same template so every served city has its own page.
export interface AreaPage {
  slug: string;
  city: string;
  h1: string;
  intro: string;
  h2: string;
  image: ImageMetadata;
  image2: ImageMetadata;
  seoTitle: string;
  seoDescription: string;
}
export const AREA_PAGES: AreaPage[] = [
  {
    slug: 'apple-valley-house-painting',
    city: 'Apple Valley',
    h1: 'House Painters in Apple Valley, MN',
    intro:
      'We are a 5-STAR locally-owned house painting business based in Apple Valley, MN. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company in Apple Valley',
    image: interiorAVImg,
    image2: svcExterior,
    seoTitle: "Apple Valley House Painting | Huerta's Painting",
    seoDescription:
      "Apple Valley's 5-star, locally-owned house painters. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free estimates.",
  },
  {
    slug: 'lakeville-house-painting',
    city: 'Lakeville',
    h1: 'House Painters Serving Lakeville, MN',
    intro:
      'We are a 5-STAR locally-owned house painting business that serves Lakeville, MN. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Lakeville',
    image: interiorLkImg,
    image2: svcInterior2,
    seoTitle: "Lakeville House Painting | Huerta's Painting",
    seoDescription:
      '5-star house painters serving Lakeville, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Call for a free estimate.',
  },
  {
    slug: 'eagan-house-painting',
    city: 'Eagan',
    h1: 'House Painters Serving Eagan, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Eagan, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Eagan',
    image: exteriorEgImg,
    image2: interiorEgImg,
    seoTitle: "Eagan House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Eagan, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free estimates.',
  },
  {
    slug: 'farmington-house-painting',
    city: 'Farmington',
    h1: 'House Painters Serving Farmington, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Farmington, MN and the surrounding area. We do both interior and exterior residential house painting along with ceiling repair and texturing.',
    h2: '5-Star House Painting Company Serving Farmington',
    image: exteriorFmImg,
    image2: interiorLkImg,
    seoTitle: "Farmington House Painting | Huerta's Painting",
    seoDescription:
      '5-star house painters serving Farmington, MN: interior & exterior painting, ceiling repair & texturing, deck finishing. Free estimates.',
  },
  {
    slug: 'burnsville-house-painting',
    city: 'Burnsville',
    h1: 'House Painters Serving Burnsville, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Burnsville, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Burnsville',
    image: interiorAVImg,
    image2: svcExterior,
    seoTitle: "Burnsville House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Burnsville, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free quotes.',
  },
  {
    slug: 'rosemount-house-painting',
    city: 'Rosemount',
    h1: 'House Painters Serving Rosemount, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Rosemount, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Rosemount',
    image: exteriorEgImg,
    image2: svcInterior2,
    seoTitle: "Rosemount House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Rosemount, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free quotes.',
  },
  {
    slug: 'eden-prairie-house-painting',
    city: 'Eden Prairie',
    h1: 'House Painters Serving Eden Prairie, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Eden Prairie, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Eden Prairie',
    image: interiorLkImg,
    image2: svcExterior2,
    seoTitle: "Eden Prairie House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Eden Prairie, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free quotes.',
  },
  {
    slug: 'richfield-house-painting',
    city: 'Richfield',
    h1: 'House Painters Serving Richfield, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Richfield, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Richfield',
    image: interiorEgImg,
    image2: svcInterior,
    seoTitle: "Richfield House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Richfield, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free quotes.',
  },
  {
    slug: 'mendota-heights-house-painting',
    city: 'Mendota Heights',
    h1: 'House Painters Serving Mendota Heights, MN',
    intro:
      'We are a 5-STAR family-owned house painting business that serves Mendota Heights, MN and the surrounding area. We do both interior and exterior residential house painting.',
    h2: '5-Star Quality House Painting Company Serving Mendota Heights',
    image: exteriorFmImg,
    image2: svcDeck2,
    seoTitle: "Mendota Heights House Painting | Huerta's Painting",
    seoDescription:
      '5-star, family-owned house painters serving Mendota Heights, MN. Interior & exterior painting, drywall and ceiling repair, deck finishing. Free quotes.',
  },
];

// ── Gallery: before & after ─────────────────────────────────────────
// Labels follow each photo's original filename on the live site (its
// captions were out of order with its images).
const galleryGlob = import.meta.glob<{ default: ImageMetadata }>(
  './assets/images/gallery/*.{jpg,png}',
  { eager: true }
);
const gImg = (file: string) => galleryGlob[`./assets/images/gallery/${file}`].default;

export const GALLERY = [
  { file: 'before-after-kitchen-painting.jpg', label: 'Kitchen painting' },
  { file: 'before-after-exterior-painting.jpg', label: 'Exterior painting' },
  { file: 'before-after-fireplace-painting.jpg', label: 'Fireplace painting' },
  { file: 'before-after-deck-refinishing-1.jpg', label: 'Deck refinishing' },
  { file: 'before-after-accent-wall-painting.png', label: 'Accent wall painting' },
  { file: 'before-after-ceiling-repair.jpg', label: 'Ceiling repair' },
  { file: 'before-after-front-door-painting.jpg', label: 'Front door painting' },
  { file: 'before-after-drywall-repair.jpg', label: 'Drywall repair' },
  { file: 'before-after-porch-refinishing-staining.png', label: 'Porch refinishing & staining' },
  { file: 'before-after-bedroom-painting.png', label: "Children's bedroom painting" },
  { file: 'before-after-ceiling-repair-painting.png', label: 'Ceiling repair & painting' },
  { file: 'before-after-deck-stairs-refinishing.jpg', label: 'Deck stairs refinishing' },
  { file: 'before-after-deck-finishing-1.jpg', label: 'Deck finishing' },
  { file: 'before-after-ceiling-repair-2.jpg', label: 'Ceiling repair' },
  { file: 'before-after-deck-repair-staining.png', label: 'Deck repair & staining' },
  { file: 'before-after-deck-refinishing-2.jpg', label: 'Deck refinishing' },
  { file: 'before-after-deck-refinishing-3.jpg', label: 'Deck refinishing' },
  { file: 'before-after-deck-refinishing-4.jpg', label: 'Deck refinishing' },
  { file: 'before-after-deck-refinishing-5.jpg', label: 'Deck refinishing' },
  { file: 'before-after-deck-refinishing-6.png', label: 'Deck refinishing' },
  { file: 'before-after-deck-refinishing-7.png', label: 'Deck refinishing' },
].map((g) => ({ ...g, src: gImg(g.file), alt: `Before and after: ${g.label.toLowerCase()} by Huerta's Painting` }));

// ── Google reviews ──────────────────────────────────────────────────
// Scraped from the Google Business Profile on 2026-10-09. The rating itself
// is deliberately NOT shown anywhere (client request). Quotes are verbatim; long ones are cut at a sentence and
// end in "…". Only two reviewers attached photos (Ann Marie, Ed) — those
// are `photoBy: 'customer'`. Every other card pairs the review with one of
// Huerta's own project photos OF THE SAME SERVICE, labelled as such on the
// card so nobody reads it as that customer's home.

import revAnnMarie1 from './assets/images/reviews/deck-staining-ann-marie-1.jpg';
import revAnnMarie2 from './assets/images/reviews/deck-staining-ann-marie-2.jpg';
import revEdLund from './assets/images/reviews/living-room-painting-ed-lund.jpg';

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
  /** Short job label shown under the name, from the review itself. */
  job: string;
  date: string;
  photo: { src: ImageMetadata; alt: string };
  photoBy: 'customer' | 'project';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Pedro and his crew are fantastic! Very professional, knowledgeable and meticulous. Communicative and they truly want to get it RIGHT! I've found my new forever painting company. Highly recommend!!!",
    author: 'Ann Marie VonBank',
    source: 'Google Review',
    job: 'Exterior painting · Wood staining',
    date: '2022',
    photo: { src: revAnnMarie1, alt: "Ann Marie's freshly stained deck and railings" },
    photoBy: 'customer',
  },
  {
    quote:
      'We had Pedro and his team paint a few rooms and our ceiling. They did an excellent job and I was surprised at how clean they worked. They even repaired numerous imperfections, holes, and stains in our walls that look even better than they did originally. Highly recommended!',
    author: 'Ed Lund',
    source: 'Google Review',
    job: 'Interior painting · Brown to light grey',
    date: '2022',
    photo: { src: revEdLund, alt: "Ed's living room after painting, walls in light grey" },
    photoBy: 'customer',
  },
  {
    quote:
      "Pedro is always great to work with. I've hired him for five different residential jobs, so he's definitely one of the first people I call when I need work done. His prices are fair, he always responds, and he's solid on making sure the job is to your satisfaction. Can't recommend him enough.",
    author: 'Corey Anthony',
    source: 'Google Review',
    job: 'Popcorn removal · Drywall · Deck staining',
    date: '2026',
    photo: { src: gImg('before-after-deck-repair-staining.png'), alt: "Before and after deck repair and staining by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "Pedro and his team did an excellent job removing the popcorn texture and then applying the knockdown texture to my ceilings. They hung plastic along walls to protect and covered both furniture and floors with plastic. They take a lot of pride in their work and I call the finished results artwork! My house looks updated!",
    author: 'Kathy Nickell',
    source: 'Google Review',
    job: 'Popcorn ceiling removal',
    date: '2026',
    photo: { src: svcTexturing, alt: "Ceiling texturing project by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "They painted all of my trim, modernized my stair railing with a fresh new look, patched drywall, and even repaired and painted a stained ceiling. Every part of the project was completed with incredible attention to detail, and the finished space looks even better than I imagined.",
    author: 'Megs',
    source: 'Google Review',
    job: 'Lower level · Trim · Ceiling repair',
    date: '2026',
    photo: { src: gImg('before-after-ceiling-repair-painting.png'), alt: "Before and after ceiling repair and painting by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "July 2026: Pedro and his team completed structural repairs, sanded, and restained our deck. The structural repairs were meticulously executed. The refinished deck shines, ready to meet the challenges of Minnesota weather. Pedro is very professional, accommodating and a pleasure to work with.",
    author: 'Dick Buggs',
    source: 'Google Review',
    job: 'Deck repair & restain · Mendota Heights',
    date: '2026',
    photo: { src: revAnnMarie2, alt: 'A deck stained by Huerta’s Painting (photo shared by a customer)' },
    photoBy: 'project',
  },
  {
    quote:
      "Pedro and his team have completed three significant jobs for us over the last 5 years. With the latest being exterior staining the entire house, which well exceeded our expectations. His crew is friendly, respectable, and OMG, the most on time crew you could ask for – to the tee usually 3 mins early each day.",
    author: 'Shannon Sheckler',
    source: 'Google Review',
    job: 'Exterior staining · Interior',
    date: '2026',
    photo: { src: gImg('before-after-exterior-painting.jpg'), alt: "Before and after exterior painting by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "Pedro and his team were amazing! They replaced a lot of our rotting deck boards (stairs included), and sanded and stained the entire deck. The finished product looks beautiful. They were very attentive to detail and gave us updates along the way so we knew what to expect.",
    author: 'Jenna Bergquist',
    source: 'Google Review',
    job: 'Deck boards & stairs · Staining',
    date: '2026',
    photo: { src: gImg('before-after-deck-stairs-refinishing.jpg'), alt: "Before and after deck stairs refinishing by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "They did an amazing job! Very particular and professional. We had a large hole in our Sheetrock and we honestly cannot see where it was. Pedro worked magic! We will definitely be using them for any future painting jobs!",
    author: 'Shannon Dorf',
    source: 'Google Review',
    job: 'Drywall repair · Interior painting',
    date: '2023',
    photo: { src: gImg('before-after-drywall-repair.jpg'), alt: "Before and after drywall repair by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "Pedro was very professional and Knowledgable when it came to updating my kitchen cabinets. I did not want to spend a fortune replacing them. His recommendations exceeded my expectations. I love my kitchen and I will highly recommend his services to everyone.",
    author: 'Mario Rodriguez',
    source: 'Google Review',
    job: 'Cabinet painting',
    date: '2021',
    photo: { src: gImg('before-after-kitchen-painting.jpg'), alt: "Before and after kitchen cabinet painting by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "Pedro and his team painted several areas on our main level, including a vaulted 16 foot ceiling. He was quick to respond, set up a time to stop by, sent a professional estimate, and very reasonably priced. His work is exceptional, he is friendly and polite. Best contractor experience in years! Thanks, Pedro!",
    author: 'Jane Hendrickson',
    source: 'Google Review',
    job: 'Interior painting · Vaulted ceiling',
    date: '2022',
    photo: { src: svcInterior, alt: "Interior painting project by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "We had Pedro of Huerta's Painting paint the exterior of our house as well as stain our front porch decking. All I can say is if you want the job done right than you don't need to look any further than Huerta's. Probably the best contractor I have hired for any job, either exterior or interior. The best!",
    author: 'Jim B.',
    source: 'Google Review',
    job: 'Exterior painting · Porch staining',
    date: '2021',
    photo: { src: gImg('before-after-porch-refinishing-staining.png'), alt: "Before and after porch refinishing and staining by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "We were extremely happy with the work done by Pedro and Huerta's Painting. The finished project turned out even better than we hoped for; and Pedro was able to hide any of the \"helpful\" DIY mistakes I may have made while working on the project prior to calling Huerta's for finishing.",
    author: 'Nick & Holly Bartels',
    source: 'Google Review',
    job: 'Interior painting · Drywall repair',
    date: '2021',
    photo: { src: gImg('before-after-accent-wall-painting.png'), alt: "Before and after accent wall painting by Huerta's Painting" },
    photoBy: 'project',
  },
  {
    quote:
      "Our experience with Huerta Painting was simply superb from start to finish. We hired Huerta Painting for both interior and exterior painting and received a prompt detailed bid. Mr. Huerta's strong work ethic was apparent throughout the project. In a five-star system, we'd rate Huerta Painting at ten-stars.",
    author: 'David P. Rigoni',
    source: 'Google Review',
    job: 'Interior & exterior painting',
    date: '2020',
    photo: { src: exteriorEgImg, alt: "Exterior house painting project by Huerta's Painting" },
    photoBy: 'project',
  },
];

/** The quote featured big on black (reference's centered statement). */
export const FEATURED_QUOTE = {
  before: 'Probably the best contractor I have hired for any job, either exterior or interior.',
  highlight: 'The best!',
  author: 'Jim B.',
  meta: 'Google Review / Exterior painting & porch staining',
};

// ── FAQ — every answer is a fact stated on the live site ────────────
export interface Faq {
  q: string;
  a: string;
}

/** FAQPage JSON-LD node. One helper so every page's schema has one shape. */
export const faqPageSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const HOME_FAQS: Faq[] = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We start with a free in-home consultation to review your project and take measurements, and then send you a custom quote. Call or text (952) 769-3906 or send the estimate form to book it.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Apple Valley, MN and serve the South Metro of the Twin Cities, including Lakeville, Burnsville, Eagan, Rosemount, Farmington, Eden Prairie, Richfield and Mendota Heights.',
  },
  {
    q: 'Are you insured?',
    a: "Yes. Huerta's Painting, LLC is fully registered and insured.",
  },
  {
    q: 'Do you guarantee your work?',
    a: 'We guarantee our workmanship and complete every project to 100% customer satisfaction.',
  },
  {
    q: 'Do you handle the prep work and clean-up?',
    a: "Yes. We protect your floors, walls and furnishings before we start, do all of the surface prep — patching, sanding and priming — and handle the final clean-up, so you can sit back and relax.",
  },
  {
    q: 'Who will be working on my home?',
    a: "Huerta's Painting is family-owned and owner-operated. Founder Pedro Ramirez-Huerta personally oversees each project from start to finish.",
  },
];

// ── Navigation ──────────────────────────────────────────────────────
export const NAV_LINKS: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  {
    href: '/services/',
    label: 'Services',
    children: SERVICES.map((s) => ({ href: `/services/${s.slug}/`, label: s.name })),
  },
  { href: '/gallery/', label: 'Gallery' },
  {
    href: '/apple-valley-house-painting/',
    label: 'Locations',
    children: AREA_PAGES.map((a) => ({ href: `/${a.slug}/`, label: `${a.city}, MN` })),
  },
  { href: '/contact-us/', label: 'Contact' },
];

// The four WordPress city pages the client asked to keep front and center.
export const KEY_CITIES = [
  'farmington-house-painting',
  'apple-valley-house-painting',
  'lakeville-house-painting',
  'eagan-house-painting',
];

// Estimate form: posts to the Vercel function in /api/estimate.js.
export const ESTIMATE_ENDPOINT = '/api/estimate';
// Review funnel "bad experience" form: /api/feedback.js.
export const FEEDBACK_ENDPOINT = '/api/feedback';
