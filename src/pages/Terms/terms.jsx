import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Drivys</title>
        <meta
          name="description"
          content="Read Drivys Terms & Conditions to understand eligibility, booking, cancellations, payments, safety policies, and user responsibilities."
        />
      </Helmet>
      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] justify-start items-center">
            
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4">
              <Header />
            </div>

            {/* Terms & Conditions Content */}
            <div className="w-full max-w-4xl px-6 lg:px-12 py-10">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Terms <span className="text-orange-500">& Conditions</span>
              </h1>
              <p className="text-gray-300 text-center mb-12">
                Please read these Terms carefully before using Drivys. By using our App, you agree to the following policies.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                  <p className="text-gray-300">
                    Drivys is a platform that connects individuals seeking driving lessons (Students) with driving schools and driving instructors (“Schools” and “Instructors”). Drivys acts solely as an intermediary and does not provide driving lessons directly. By using the App, you agree to comply with these Terms and all applicable laws and regulations in the United Arab Emirates (UAE).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Eligibility</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Be at least 18 years old or have the consent of a parent or legal guardian.</li>
                    <li>Have the legal capacity to enter into binding agreements.</li>
                    <li>Provide accurate and truthful information during registration.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
                  <p className="text-gray-300">
                    To use the App, you must create an account. You are responsible for maintaining the confidentiality of your account and password. You agree to notify Drivys immediately of any unauthorized access or use of your account. We reserve the right to suspend or terminate your account if any information provided is false or misleading.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Booking Policy</h2>
                  <p className="text-gray-300">
                    All bookings must be made in advance through the app. Rescheduling or cancellations must be done at least 24 hours before the session to avoid fees.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Cancellation & Refund Policy</h2>
                  <p className="text-gray-300">
                    If you cancel a session less than 24 hours before it starts, a cancellation fee may apply. Refunds will only be processed for unused services based on our review.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Payment Policy</h2>
                  <p className="text-gray-300">
                    All payments must be made through the approved payment methods. We accept credit/debit cards, and in some cases, cash. All transactions are securely processed.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. User Conduct Policy</h2>
                  <p className="text-gray-300">
                    Users must show respect toward instructors and students. Abusive language, harassment, or inappropriate behavior will result in suspension or account termination.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Liability Disclaimer</h2>
                  <p className="text-gray-300">
                    Drivys is not liable for personal losses, injuries, or third-party actions during lessons. We strive for safety, but users are responsible for their conduct.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Changes to Policies</h2>
                  <p className="text-gray-300">
                    We reserve the right to update our terms and policies at any time. Users will be notified of major changes through the app.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Lesson Attendance Policy</h2>
                  <p className="text-gray-300">
                    Students must arrive on time. Delays over 15 minutes may result in cancellation or deduction of session time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Late Policy</h2>
                  <p className="text-gray-300">
                    Both students and instructors must inform in advance if they will be late. Repeated lateness may lead to penalties.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">12. Safety Policy</h2>
                  <p className="text-gray-300">
                    All users must comply with road safety regulations and follow instructor guidance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">13. Account Suspension Policy</h2>
                  <p className="text-gray-300">
                    We reserve the right to suspend accounts that violate our terms or misuse the platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">14. Device & App Compatibility</h2>
                  <p className="text-gray-300">
                    The app supports most modern Android and iOS devices. Users are responsible for updating to the latest version.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">15. Marketing Communication Policy</h2>
                  <p className="text-gray-300">
                    We may send emails or SMS for promotions. You can opt out at any time from your profile settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">16. Third-Party Integration</h2>
                  <p className="text-gray-300">
                    Some services rely on third-party providers (e.g., payment gateways). We are not liable for their policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">17. Fair Usage Policy</h2>
                  <p className="text-gray-300">
                    Abuse of booking privileges or promotional offers may result in limitations or account review.
                  </p>
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

export default Terms;
