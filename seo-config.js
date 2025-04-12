const defaultTitle = 'IMPHNEN Landing Page';
const defaultDescription = 'Sebuah komunitas revolusioner gerakan enggan ngoding, dimana kita lebih fokus scroll fesnukan daripada lanjut ngoding.';

const SEO = {
    title: defaultTitle,
    description: defaultDescription,
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://imphnen-website.vercel.app/', // Your website URL
        site_name: defaultTitle,
        title: defaultTitle,
        description: defaultDescription,
        images: [
            {
                url: 'https://imphnen-website/og-image.jpg', // Your image URL
                width: 2550,
                height: 945,
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
