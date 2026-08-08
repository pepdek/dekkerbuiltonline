import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function MapsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1E3A2E] mb-4 text-center">
          Serving the Greater Seattle Eastside
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Renovision Design & Build serves Tacoma, Kirkland, Redmond, and surrounding areas. We're based in Tacoma and bring our expertise to your home.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.3858394848666!2d-122.20432!3d47.6149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906d3d3d3d3d3d%3A0x1234567890abcdef!2s1400%20112th%20Ave%20NE%2C%20Tacoma%2C%20WA%2098004!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <Card className="p-6 bg-[#F6F8F3] border-0 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E3A2E] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#b68a3c]" />
                Service Areas
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Tacoma</p>
                <p>• Gig Harbor</p>
                <p>• Lakewood</p>
                <p>• Puyallup</p>
                <p>• Spanaway</p>
                <p>• Sumner</p>
                <p>• Bonney Lake</p>
                <p>• Eatonville</p>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Don't see your area? Contact us—we may be able to help.
              </p>
            </Card>

            <Card className="p-6 bg-[#1E3A2E] text-white border-0 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Office Location</h3>
              <p className="text-sm mb-4">
                1400 112th Ave NE<br />
                Tacoma, WA 98004
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+15599050994" className="text-[#b68a3c] hover:underline">
                    (559) 905-0994
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong> Mon–Fri, 8am–5pm
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/sAw9VHhjcitFRKrMA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#b68a3c] hover:underline text-sm font-semibold"
              >
                Get Directions →
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
