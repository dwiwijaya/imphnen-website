const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const isDev = process.env.NODE_ENV === 'development';

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['your-image-domain.com'], // optional
  },
  // Disable PWA in dev
  ...(isDev && {
    pwa: {
      disable: true,
    },
  }),
});
