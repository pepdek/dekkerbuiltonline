import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function FooterV2() {
  const services = [
    { label: 'Kitchen Remodeling', href: '/kitchen-remodel' },
    { label: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
    { label: 'Whole Home Remodels', href: '/full-home-remodel' },
    { label: 'ADU Construction', href: '/adu-construction' },
    { label: 'Basement Remodeling', href: '/basement-remodeling' },
    { label: 'Decks & Patios', href: '/deck-patio' },
    { label: 'New Construction', href: '/new-construction' },
  ];

  const company = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
    { label: 'Project Gallery', href: '/project-gallery' },
    { label: 'General Contractor Tacoma', href: '/general-contractor-bellevue' },
  ];

  const legal = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <footer className="bg-[#1E3A2E] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <img
              src="/manus-storage/renovision-logo_63d2bd18.png"
              alt="Renovision"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 text-sm mb-6">
              Design-build contractor specializing in luxury renovations across Seattle and the Eastside.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b68a3c]" />
                <a href="tel:+15599050994" className="text-sm hover:text-[#b68a3c] transition-colors">
                  (559) 905-0994
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b68a3c]" />
                <a href="mailto:office@renovisiondesignandbuild.com" className="text-sm hover:text-[#b68a3c] transition-colors break-all">
                  office@renovisiondesignandbuild.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b68a3c] mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>1400 112th Ave NE</p>
                  <p>Tacoma, WA 98004</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#b68a3c]" />
                <p className="text-sm">Mon–Fri, 8am–5pm</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#b68a3c]">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href}>
                    <span className="text-sm text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#b68a3c]">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#b68a3c]">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#b68a3c]">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tacoma</li>
              <li>Kirkland</li>
              <li>Redmond</li>
              <li>Seattle</li>
              <li>Mercer Island</li>
              <li>Sammamish</li>
              <li>Issaquah</li>
              <li>Snoqualmie</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/renovisiondesignandbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#b68a3c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/renovisiondesignandbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#b68a3c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/renovision-design-build"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#b68a3c] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-right">
              <p>&copy; 2026 Renovision Design & Build. All rights reserved.</p>
              <p className="mt-2">
                Licensed & Bonded | BBB Accredited | Serving Greater Seattle & Eastside
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-gray-400">
            Design-Build Excellence | Custom Homes & Renovations | Seattle, Tacoma & Eastside
          </p>
        </div>
      </div>
    </footer>
  );
}
