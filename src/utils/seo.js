export const SEO_CONFIG = {
  siteName: 'Mahakali Fabrication',
  siteUrl: 'https://mahakalifabrication.com',
  defaultTitle: 'Mahakali Fabrication | Metal Fabrication and Industrial Solutions',
  defaultDescription:
    'Mahakali Fabrication provides precision metal fabrication, welding, and industrial solutions with quality craftsmanship and reliable delivery.',
  defaultImage: '/vite.svg',
  twitterHandle: '@mahakalifab',
};

export const buildAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${normalizedPath}`;
};

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  logo: buildAbsoluteUrl('/vite.svg'),
  sameAs: ['https://ambikainfotech.online/'],
});

export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SEO_CONFIG.siteName,
  image: buildAbsoluteUrl('/vite.svg'),
  url: SEO_CONFIG.siteUrl,
  telephone: '+1 (234) 567-890',
  email: 'info@mahakalifabrication.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Fabrication Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
});

export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildAbsoluteUrl(item.path),
  })),
});
