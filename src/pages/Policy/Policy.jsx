import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Policy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Drivys</title>
        <meta
          name="description"
          content="Read Drivys Privacy Policy to understand how we collect, use, and protect your personal data while using our app."
        />
      </Helmet>
      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] justify-start items-center">
            
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px]">
              <Header />
            </div>

            {/* Privacy Policy Content */}
            <div className="w-full max-w-4xl px-6 lg:px-12 py-10">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Privacy <span className="text-orange-500">Policy</span>
              </h1>
              <p className="text-gray-300 text-center mb-12">
                Drivys is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our App.
              </p>

              {/* Sections */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                  <h3 className="font-semibold mb-2">a. Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Payment information</li>
                    <li>Location data (if allowed)</li>
                  </ul>
                  <h3 className="font-semibold mt-4 mb-2">b. Usage Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Log-in times</li>
                    <li>Lesson bookings</li>
                    <li>Communications with Instructors or Schools</li>
                    <li>Device information (e.g., operating system, IP address)</li>
                  </ul>
                  <h3 className="font-semibold mt-4 mb-2">c. Location Data</h3>
                  <p className="text-gray-300">
                    We may collect and store your real-time location data (if you enable this feature).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Facilitate bookings and communication between Students and Instructors/Schools.</li>
                    <li>Process payments securely.</li>
                    <li>Improve the functionality of the App.</li>
                    <li>Send you notifications and updates about your lessons.</li>
                    <li>Ensure compliance with UAE regulations.</li>
                    <li>Detect and prevent fraud.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. How We Share Your Information</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Driving Schools and Instructors – to facilitate lesson bookings.</li>
                    <li>Payment Processors – to process payments securely.</li>
                    <li>Law Enforcement – if required by law or to protect our rights.</li>
                    <li>Third-Party Service Providers – for analytics, marketing, and customer support.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Data Retention</h2>
                  <p className="text-gray-300">
                    We retain your data for as long as necessary to provide our services and comply with legal requirements. After that, your data will be deleted or anonymized.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Access, update, or delete your data.</li>
                    <li>Withdraw consent for data collection (some features may be disabled).</li>
                    <li>Request a copy of your personal data.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Encryption of sensitive data.</li>
                    <li>Secure payment processing.</li>
                    <li>Regular security audits.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Children’s Privacy</h2>
                  <p className="text-gray-300">
                    Our services are not intended for individuals under the age of 18. If we discover that we have collected data from minors, we will delete it immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Third-Party Links</h2>
                  <p className="text-gray-300">
                    The App may contain links to third-party websites. We are not responsible for their privacy practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Changes to Privacy Policy</h2>
                  <p className="text-gray-300">
                    We may update this Privacy Policy from time to time. Any changes will be posted in the App. Your continued use of the App constitutes acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                  <p className="text-gray-300">
                    If you have any questions or concerns about this Privacy Policy, contact us at:
                  </p>
                  <Link to="/contact" className="text-orange-500 underline">
                    Contact Page
                  </Link>
                </section>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Policy;
