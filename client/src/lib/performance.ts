/**
 * Performance Optimization Utilities for Mobile
 * Implements 2026 best practices for Core Web Vitals
 */

/**
 * Lazy load images with Intersection Observer
 */
export function initLazyLoading() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = (img as HTMLImageElement).getAttribute('data-src');
      if (src) {
        (img as HTMLImageElement).src = src;
      }
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px',
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Defer non-critical CSS loading
 */
export function deferNonCriticalCSS() {
  const links = document.querySelectorAll('link[data-defer]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      link.setAttribute('media', 'print');
      link.addEventListener('load', () => {
        link.setAttribute('media', 'all');
      });
    }
  });
}

/**
 * Optimize font loading
 */
export function optimizeFontLoading() {
  // Preload critical fonts
  const preloadLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
  preloadLinks.forEach(link => {
    link.setAttribute('crossorigin', 'anonymous');
  });

  // Use font-display: swap to prevent FOIT (Flash of Invisible Text)
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Monitor Core Web Vitals
 */
export function monitorCoreWebVitals() {
  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }

    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('FID:', (entry as any).processingDuration);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }

    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  const criticalResources = [
    '/manus-storage/renovision-logo_63d2bd18.png',
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.png') || resource.endsWith('.jpg') ? 'image' : 'script';
    link.href = resource;
    document.head.appendChild(link);
  });
}

/**
 * Implement request idle callback for non-critical work
 */
export function scheduleNonCriticalWork(callback: () => void) {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 0);
  }
}

/**
 * Optimize bundle size by lazy loading heavy components
 */
export function lazyLoadComponent(componentName: string) {
  return import(`../pages/${componentName}`);
}

/**
 * Implement aggressive caching strategy
 */
export function setupCaching() {
  if ('caches' in window) {
    caches.open('renovision-v1').then(cache => {
      // Cache critical assets
      const criticalAssets = [
        '/',
        '/index.html',
        '/styles/animations.css',
      ];
      cache.addAll(criticalAssets).catch(err => {
        console.warn('Cache setup failed:', err);
      });
    });
  }
}

/**
 * Debounce function for performance-sensitive operations
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for high-frequency events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations() {
  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      deferNonCriticalCSS();
      optimizeFontLoading();
      preloadCriticalResources();
      monitorCoreWebVitals();
      setupCaching();
    });
  } else {
    // DOM already loaded
    initLazyLoading();
    deferNonCriticalCSS();
    optimizeFontLoading();
    preloadCriticalResources();
    monitorCoreWebVitals();
    setupCaching();
  }

  // Schedule non-critical work
  scheduleNonCriticalWork(() => {
    console.log('Non-critical work scheduled');
  });
}
