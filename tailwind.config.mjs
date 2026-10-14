/** @type {import('tailwindcss').Config} */
// VERSION 2 — layout, spacing AND branding from paris-painting.com (measured
// with DevTools): navy #192A53, orange #F27834, warm cream #F7F5F1 sections,
// Montserrat 600 headings + Poppins body. Components only use the semantic
// token names below, so the three versions share markup and differ here.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: '#F27834', // CTAs, section titles
        primaryDk: '#D9652A', // CTA hover
        onPrimary: '#FFFFFF', // text on primary
        secondary: '#192A53', // navy: top bar, hero panel, footer, card titles
        secondaryDk: '#0F1830', // footer legal bar
        accent: '#E39B1B', // shield / check icons
        heading: '#F27834', // h2 color (orange titles, as on the reference)
        link: '#F27834', // text links & icons on light backgrounds
        linkDk: '#D9652A',
        ink: '#192A53', // small headings & strong text
        body: '#303030', // paragraph text
        muted: '#5B647C', // secondary text
        surface: '#F7F5F1', // alternating section background
        line: '#E3DED4', // hairlines on light
        paper: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        // Reference content width: 1080px (180px gutters at 1440).
        content: '67.5rem',
      },
      borderRadius: {
        btn: '14px',
        card: '14px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
