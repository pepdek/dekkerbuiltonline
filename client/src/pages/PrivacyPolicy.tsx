import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Introduction
              </h2>
              <p>
                Renovision Design & Build LLC ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li>Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                <li>Data From Social Networks: User information from social networking sites, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Use of Your Information
              </h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                <li>Notify you of updates to the Site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Disclosure of Your Information
              </h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to comply with the law, enforce our Site policies, or protect ours or others' rights, property, or safety.</li>
                <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Renovision Design & Build LLC</strong></p>
                <p>1400 112th Ave NE<br />Bellevue, WA 98004<br />United States</p>
                <p><a href="tel:+14252766501" className="text-[#b68a3c] hover:underline">(425) 276-6501</a></p>
                <p><a href="mailto:office@renovisiondesignandbuild.com" className="text-[#b68a3c] hover:underline">office@renovisiondesignandbuild.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
