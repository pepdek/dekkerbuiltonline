import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <img
              src="/manus-storage/renovision-logo_63d2bd18.png"
              alt="Renovision Design & Build"
              className="h-12 w-auto"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services">
            <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/about-us">
            <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Right Section: Phone & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+14252766501"
            className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors"
          >
            (425) 276-6501
          </a>
          <a
            href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-[#F6F8F3] rounded transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#1E3A2E]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1E3A2E]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#F6F8F3] border-t border-[#EEEEEE]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/services">
              <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer block">
                Services
              </span>
            </Link>
            <Link href="/about-us">
              <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer block">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-[#333333] hover:text-[#1E3A2E] font-medium transition-colors cursor-pointer block">
                Contact Us
              </span>
            </Link>
            <a
              href="tel:+14252766501"
              className="text-[#1E3A2E] font-bold text-lg"
            >
              (425) 276-6501
            </a>
            <a
              href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Request Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
