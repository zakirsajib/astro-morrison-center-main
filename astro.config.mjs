import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://themorriscenter.com/',
  output: 'hybrid',
  adapter: cloudflare({
    mode: "directory"
  }),
  server: {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
  },
  //image: {
  //  remotePatterns: [{ protocol: "https" }],
  //  service: { entrypoint: 'astro/assets/services/sharp' },
  //},
  experimental: {
    contentCollectionCache: true,
  },
  //jsx: 'react',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://themorriscenter.com/category/morris-center/' &&
        page !== 'https://themorriscenter.com/home/' &&
        page !== 'https://themorriscenter.com/assessment/'
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    })
  ],
  redirects: {
    '/336-2': {
      status: 301,
      destination: '/contact-us/'
    },
    '/contacts': {
      status: 301,
      destination: '/contact-us/'
    },
    '/about-tmc': {
      status: 301,
      destination: '/about/'
    },
    '/about-tmc/': {
      status: 301,
      destination: '/about/'
    },
    '/assessment': {
      status: 301,
      destination: '/services/testing/'
    },
    '/assessment/': {
      status: 301,
      destination: '/services/testing/'
    },
    '/our-research': {
      status: 301,
      destination: '/research/'
    },
    '/red-flags': {
      status: 301,
      destination: '/neurodiversity/'
    },
    
    '/testimonials/professional-talks': {
      status: 301,
      destination: '/research/'
    },
    '/trandisciplinary-approach': {
      status: 301,
      destination: '/transdisciplinary-approach/'
    },
    '/trandisciplinary-approach/': {
      status: 301,
      destination: '/transdisciplinary-approach/'
    },
    '/treatment': {
      status: 301,
      destination: '/services/tutoring-programs/'
    },
    '/treatment/': {
      status: 301,
      destination: '/services/tutoring-programs/'
    },
    '/treatment/now-foundations-of-speech-language-reading-and-spelling': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/foundations/'
    },
    '/treatment/now-foundations-of-speech-language-reading-and-spelling/': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/foundations/'
    },
    '/treatment/now-grammar-and-writing': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/grammar-and-writing/'
    },
    '/treatment/now-grammar-and-writing/': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/grammar-and-writing/'
    },
    '/treatment/now-math-concept-imagery': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/math-concept-imagery/'
    },
    '/treatment/now-math-concept-imagery/': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/math-concept-imagery/'
    },
    '/treatment/now-mental-imagery-for-language-comprehension-memory-and-reasoning': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/mental-imagery/'
    },
    '/treatment/now-mental-imagery-for-language-comprehension-memory-and-reasoning/': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/mental-imagery/'
    },
    '/treatment/now-morphology': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/'
    },
    '/treatment/now-morphology/': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/'
    },
    '/why-the-morris-center-is-different': {
      status: 301,
      destination: '/why-the-morris-center/'
    },
    '/why-the-morris-center-is-different/': {
      status: 301,
      destination: '/why-the-morris-center/'
    },
    '/now-grammar-and-writing': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/grammar-and-writing/'
    },
    '/now-programs': {
      status: 301,
      destination: 'https://www.nowprograms.com/programs/'
    }
  }
});