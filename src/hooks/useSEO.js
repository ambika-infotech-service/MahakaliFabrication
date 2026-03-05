import { useEffect } from 'react';
import { SEO_CONFIG, buildAbsoluteUrl } from '../utils/seo';

const upsertMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      tag.setAttribute(key, String(value));
    }
  });
};

const upsertLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      tag.setAttribute(key, String(value));
    }
  });
};

const upsertJsonLd = (schema) => {
  const id = 'page-jsonld';
  let script = document.getElementById(id);

  if (!schema) {
    if (script) {
      script.remove();
    }
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

const useSEO = ({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  keywords,
  noIndex = false,
  schema,
}) => {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${SEO_CONFIG.siteName}`
      : SEO_CONFIG.defaultTitle;
    const pageDescription = description || SEO_CONFIG.defaultDescription;
    const canonicalUrl = buildAbsoluteUrl(path);
    const ogImage = image
      ? (image.startsWith('http') ? image : buildAbsoluteUrl(image))
      : buildAbsoluteUrl(SEO_CONFIG.defaultImage);

    document.title = pageTitle;

    upsertMetaTag('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    });

    upsertMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex, nofollow' : 'index, follow',
    });

    if (keywords && keywords.length > 0) {
      upsertMetaTag('meta[name="keywords"]', {
        name: 'keywords',
        content: keywords.join(', '),
      });
    }

    upsertLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    upsertMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: type,
    });
    upsertMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    });
    upsertMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    });
    upsertMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SEO_CONFIG.siteName,
    });
    upsertMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    });

    upsertMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageTitle,
    });
    upsertMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    });
    upsertMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    });
    upsertMetaTag('meta[name="twitter:site"]', {
      name: 'twitter:site',
      content: SEO_CONFIG.twitterHandle,
    });

    upsertJsonLd(schema);
  }, [description, image, keywords, noIndex, path, schema, title, type]);
};

export default useSEO;
