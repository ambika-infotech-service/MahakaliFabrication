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
