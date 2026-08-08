import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NavbarV2() {
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

  return (
    <nav className="bg-white border-b border-[#EEEEEE] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <span className="cursor-pointer">
              <img
                src="/manus-storage/renovision-logo_63d2bd18.png"
                alt="Renovision"
                className="h-12 w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-[#333333] hover:text-[#b68a3c] transition-colors cursor-pointer font-medium">
                Home
              </span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-[#333333] hover:text-[#b68a3c] transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-56 bg-white border border-[#EEEEEE] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
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
              <span className="text-[#333333] hover:text-[#b68a3c] transition-colors cursor-pointer font-medium">
                About Us
              </span>
            </Link>

            <Link href="/contact">
              <span className="text-[#333333] hover:text-[#b68a3c] transition-colors cursor-pointer font-medium">
                Contact Us
              </span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15599050994" className="text-[#b68a3c] font-bold hover:text-[#1E3A2E] transition-colors">
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#333333]" />
            ) : (
              <Menu className="w-6 h-6 text-[#333333]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#EEEEEE]">
            <Link href="/">
              <span className="block px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] cursor-pointer">
                Home
              </span>
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] flex items-center justify-between"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="bg-[#F6F8F3]">
                  {services.map((service, index) => (
                    <Link key={index} href={service.href}>
                      <span className="block px-8 py-2 text-[#333333] hover:text-[#b68a3c] cursor-pointer text-sm">
                        {service.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about-us">
              <span className="block px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] cursor-pointer">
                About Us
              </span>
            </Link>

            <Link href="/contact">
              <span className="block px-4 py-2 text-[#333333] hover:bg-[#F6F8F3] cursor-pointer">
                Contact Us
              </span>
            </Link>

            <div className="px-4 py-4 border-t border-[#EEEEEE] space-y-3">
              <a href="tel:+15599050994" className="block text-[#b68a3c] font-bold">
                (559) 905-0994
              </a>
              <a
                href="https://online-booking.workiz.com/?ac=222496cf11c27d57caa0355901711c2872bdf8a41b9fe61368e9de0fed98cc44"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
              >
                Request Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
