import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook to scroll to top when route changes
 * Improves UX by ensuring users see the top of new pages
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);
}
