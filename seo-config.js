const defaultTitle = 'NextJS Landing Starter';
const defaultDescription = 'Modern and minimal landing page starter built with Next.js';

const SEO = {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nextjs-landing-starter.vercel.app/', // Your website URL
        site_name: defaultTitle,
        title: defaultTitle,
        description: defaultDescription,
        images: [
            {
                url: 'https://nextjs-landing-starter.vercel.app/og-image.jpg', // Your image URL
                width: 1200,
                height: 630,
                alt: defaultTitle,
            },
        ],
    },
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.png',
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
        },
        {
            rel: 'manifest',
            href: '/manifest.json',
        },
    ],
    twitter: {
        handle: '@yourhandle',
        site: '@yourhandle',
        cardType: 'summary_large_image',
    },
};

export default SEO;
