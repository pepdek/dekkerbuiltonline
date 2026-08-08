import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F6F8F3] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A2E] mb-6">
            Terms and Conditions
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
                Agreement to Terms
              </h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Renovision Design & Build LLC ("we," "us," "our," or "Company"), concerning your access to and use of the website as well as any other media form, media channel, mobile website, or mobile application relating or connected thereto (collectively, the "Site").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Renovision Design & Build LLC's Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Disclaimer
              </h2>
              <p>
                The materials on Renovision Design & Build LLC's Site are provided on an 'as is' basis. Renovision Design & Build LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Limitations
              </h2>
              <p>
                In no event shall Renovision Design & Build LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Renovision Design & Build LLC's Site, even if Renovision Design & Build LLC or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Renovision Design & Build LLC's Site could include technical, typographical, or photographic errors. Renovision Design & Build LLC does not warrant that any of the materials on the Site are accurate, complete, or current. Renovision Design & Build LLC may make changes to the materials contained on the Site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Links
              </h2>
              <p>
                Renovision Design & Build LLC has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Renovision Design & Build LLC of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Modifications
              </h2>
              <p>
                Renovision Design & Build LLC may revise these Terms and Conditions for the Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Governing Law
              </h2>
              <p>
                These Terms and Conditions and any separate agreements we may enter into to provide the Site are governed by and construed in accordance with the laws of the State of Washington, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E3A2E] mb-4">
                Contact Information
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Renovision Design & Build LLC</strong></p>
                <p>1400 112th Ave NE<br />Tacoma, WA 98004<br />United States</p>
                <p><a href="tel:+15599050994" className="text-[#b68a3c] hover:underline">(559) 905-0994</a></p>
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
