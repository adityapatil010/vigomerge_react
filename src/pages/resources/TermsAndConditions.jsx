import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Vigomerge Inc.! These Terms and Conditions (“Terms”) govern your access to and use of our website, services,
          software, and any related offerings (collectively, the “Services”). By accessing or using our Services, you agree to
          be bound by these Terms. If you do not agree, please do not use our Services.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Use of Services</h3>
        <p className="text-gray-700 mb-2">
          You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for
          ensuring that all information you provide is accurate, current, and complete.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Use our Services in violation of any applicable laws or regulations</li>
          <li>Attempt to gain unauthorized access to systems or networks connected to our platform</li>
          <li>Distribute malware, spam, or harmful code</li>
          <li>Interfere with or disrupt the functionality of our Services</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Intellectual Property</h3>
        <p className="text-gray-700 mb-4">
          All content and materials on our website and platforms—including software, logos, graphics, text, and design—are the
          intellectual property of Vigomerge Inc or our licensors. You may not reproduce, distribute, modify, or create
          derivative works without our prior written consent.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Service Availability and Modifications</h3>
        <p className="text-gray-700 mb-4">
          We strive to ensure high availability of our Services but do not guarantee uninterrupted access. We may modify, update,
          suspend, or discontinue parts or all of our Services at any time, with or without notice.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Payment and Subscriptions (If Applicable)</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>All fees are stated in dollar, INR, Pound and are due as specified at the time of purchase or subscription.</li>
          <li>Late payments may result in suspension or termination of Services.</li>
          <li>Subscription services may automatically renew unless canceled prior to the renewal date.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Termination</h3>
        <p className="text-gray-700 mb-4">
          We may suspend or terminate your access to our Services at any time, with or without cause or notice, if you violate
          these Terms or engage in any harmful or illegal conduct. You may stop using our Services at any time. Provisions
          regarding intellectual property, disclaimers, limitations of liability, and governing law will survive termination.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Governing Law</h3>
        <p className="text-gray-700 mb-4">
          These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law
          principles. Any disputes shall be resolved in the courts located in [Jurisdiction].
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">7. Changes to These Terms</h3>
        <p className="text-gray-700 mb-4">
          We may update these Terms from time to time. If we make significant changes, we will notify you via our website or by
          email. Continued use of the Services after changes take effect constitutes your agreement to the revised Terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
