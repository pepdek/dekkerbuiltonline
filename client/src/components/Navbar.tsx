import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { label: 'Kitchen Remodeling', href: '/kitchen-remodel' },
    { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
    { label: 'Whole Home Remodels', href: '/full-home-remodel' },
    { label: 'ADU Construction', href: '/adu-construction' },
    { label: 'Basement Remodeling', href: '/basement-remodeling' },
    { label: 'Decks & Patios', href: '/deck-patio' },
    { label: 'New Construction', href: '/new-construction' },
  ];

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
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#333333] hover:text-[#b68a3c] transition-colors font-medium">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Desktop Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-56 bg-white border border-[#EEEEEE] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <span className="block px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] hover:text-[#b68a3c] transition-colors cursor-pointer text-sm">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about-us">
            <span className="text-[#333333] hover:text-[#b68a3c] font-medium transition-colors cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-[#333333] hover:text-[#b68a3c] font-medium transition-colors cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Right Section: Phone & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+15599050994"
            className="text-[#333333] hover:text-[#b68a3c] font-medium transition-colors"
          >
            (559) 905-0994
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
            {/* Mobile Services Dropdown */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left text-[#333333] hover:text-[#b68a3c] font-medium transition-colors flex items-center justify-between"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="bg-white border border-[#EEEEEE] rounded-lg py-2">
                {services.map((service, index) => (
                  <Link key={index} href={service.href}>
                    <span className="block px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] hover:text-[#b68a3c] transition-colors cursor-pointer text-sm">
                      {service.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about-us">
              <span className="text-[#333333] hover:text-[#b68a3c] font-medium transition-colors cursor-pointer block">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-[#333333] hover:text-[#b68a3c] font-medium transition-colors cursor-pointer block">
                Contact Us
              </span>
            </Link>
            <a
              href="tel:+15599050994"
              className="text-[#1E3A2E] font-bold text-lg"
            >
              (559) 905-0994
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
