/**
 * SEO Utilities for Renovision Clone
 * Includes meta tags, structured data, and SEO best practices
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  robots?: string;
  structuredData?: Record<string, any>;
}

/**
 * Update document meta tags
 */
export function updateMetaTags(config: SEOConfig) {
  // Title
  document.title = config.title;

  // Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);

  // Keywords
  if (config.keywords && config.keywords.length > 0) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', config.keywords.join(', '));
  }

  // OG Tags
  if (config.ogImage) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', config.ogImage);
  }

  if (config.ogType) {
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', config.ogType);
  }

  // Canonical
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }

  // Robots
  if (config.robots) {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', config.robots);
  }

  // Structured Data
  if (config.structuredData) {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(config.structuredData);
  }
}

/**
 * Generate structured data for Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Renovision Design & Build',
    image: '/manus-storage/renovision-logo_63d2bd18.png',
    description: 'Design-build contractor specializing in kitchen remodels, bathroom renovations, ADU construction, and whole-home remodels in Seattle and the Eastside.',
    url: 'https://renovision-clone.manus.space',
    telephone: '(559) 905-0994',
    email: 'office@renovisiondesignandbuild.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1400 112th Ave NE',
      addressLocality: 'Tacoma',
      addressRegion: 'WA',
      postalCode: '98004',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.6149,
      longitude: -122.2043,
    },
    areaServed: [
      'Tacoma, WA',
      'Kirkland, WA',
      'Redmond, WA',
      'Seattle, WA',
      'Mercer Island, WA',
      'Sammamish, WA',
      'Issaquah, WA',
    ],
    priceRange: '$$$',
    sameAs: [
      'https://www.facebook.com/renovisiondesignandbuild',
      'https://www.instagram.com/renovisiondesignandbuild',
    ],
  };
}

/**
 * Generate structured data for Service
 */
export function getServiceSchema(
  name: string,
  description: string,
  areaServed: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Renovision Design & Build',
      url: 'https://renovision-clone.manus.space',
    },
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
  };
}

/**
 * Generate breadcrumb schema
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * SEO Config for different pages
 */
export const pageConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Renovision Design & Build | Custom Home Remodeling in Seattle & Tacoma',
    description: 'Design-build contractor specializing in kitchen remodels, bathroom renovations, ADU construction, and whole-home remodels across Seattle and the Eastside.',
    keywords: [
      'home remodeling',
      'kitchen remodeling',
      'bathroom remodeling',
      'Tacoma',
      'Seattle',
      'contractor',
      'design-build',
      'ADU construction',
    ],
    robots: 'index, follow',
  },
  kitchen: {
    title: 'Kitchen Remodeling | Renovision Design & Build | Tacoma & Seattle',
    description: 'Custom kitchen remodeling services in Tacoma, Seattle, and the Eastside. Design-build expertise with in-house crews.',
    keywords: [
      'kitchen remodeling',
      'kitchen renovation',
      'Tacoma kitchen remodeling',
      'Seattle kitchen remodeling',
      'custom kitchens',
    ],
    robots: 'index, follow',
  },
  bathroom: {
    title: 'Bathroom Remodeling | Renovision Design & Build | Tacoma & Seattle',
    description: 'Luxury bathroom remodeling services in Tacoma, Seattle, and the Eastside. Spa-like designs with premium finishes.',
    keywords: [
      'bathroom remodeling',
      'bathroom renovation',
      'Tacoma bathroom remodeling',
      'Seattle bathroom remodeling',
      'master bathroom',
    ],
    robots: 'index, follow',
  },
  about: {
    title: 'About Renovision Design & Build | Design-Build Contractor',
    description: 'Learn about Renovision Design & Build, a trusted design-build contractor in Tacoma and Seattle with 20+ years of experience.',
    keywords: [
      'about renovision',
      'design-build contractor',
      'Tacoma contractor',
      'Seattle contractor',
    ],
    robots: 'index, follow',
  },
  contact: {
    title: 'Contact Renovision Design & Build | Free Consultation',
    description: 'Contact Renovision Design & Build for a free consultation. Serving Tacoma, Seattle, and the Eastside.',
    keywords: [
      'contact renovision',
      'free consultation',
      'home remodeling consultation',
    ],
    robots: 'index, follow',
  },
};
