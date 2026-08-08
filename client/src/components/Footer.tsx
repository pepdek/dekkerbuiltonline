import { Link } from 'wouter';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A2E] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/manus-storage/renovision-logo_63d2bd18.png"
              alt="Renovision Design & Build"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mb-6">
              Design-build custom homes & high-end renovations across Seattle and the Eastside. Affordable luxury, built to last.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Renovision-Design-Build/61558418548384/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b68a3c] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/renovision.design.build/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b68a3c] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCN2FVUACNnMfAGr4jjkyLVQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b68a3c] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#b68a3c]">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/kitchen-remodel">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Kitchen Remodels
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/bathroom-remodeling">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Bathroom Remodels
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/full-home-remodel">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Whole Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/adu-construction">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    ADUs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/basement-remodeling">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Basement Remodels
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/deck-patio">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Decks & Patios
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/new-construction">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    New Construction
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#b68a3c]">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    About us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/project-gallery">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#b68a3c]">LOCATIONS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/general-contractor-bellevue">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Bellevue
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/general-contractor-tacoma">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Tacoma
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/general-contractor-gig-harbor">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Gig Harbor
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/general-contractor-lakewood">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Lakewood
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/general-contractor-puyallup">
                  <span className="text-gray-300 hover:text-[#b68a3c] transition-colors cursor-pointer">
                    Puyallup
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#b68a3c]">CONTACT</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a
                  href="tel:+14252766501"
                  className="hover:text-[#b68a3c] transition-colors font-bold"
                >
                  (425) 276-6501
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sAw9VHhjcitFRKrMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b68a3c] transition-colors"
                >
                  1400 112th Ave NE, Bellevue, WA 98004, United States
                </a>
              </li>
              <li>
                <a
                  href="mailto:Renovisiondesign.build@gmail.com"
                  className="hover:text-[#b68a3c] transition-colors"
                >
                  Renovisiondesign.build@gmail.com
                </a>
              </li>
              <li>Mon–Fri, 8am–5pm</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Renovision Design & Build LLC. All Rights Reserved. © 2026
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/privacy-policy">
                <span className="hover:text-[#b68a3c] transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-and-conditions">
                <span className="hover:text-[#b68a3c] transition-colors cursor-pointer">
                  Terms and Conditions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
