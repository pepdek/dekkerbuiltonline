/**
 * Skip to Content Link
 * Improves keyboard navigation and accessibility
 * Allows users to skip repetitive navigation and jump to main content
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 z-50 px-4 py-2 bg-[#b68a3c] text-white font-bold rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform duration-200"
    >
      Skip to main content
    </a>
  );
}
