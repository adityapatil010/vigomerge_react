import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white px-6 py-16 lg:px-16 max-w-5xl mx-auto text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center">Privacy and Policy</h2>
      <p className="text-gray-600 mb-6">
        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
      </p>
      <p className="text-gray-600 mb-10">
        We may update this policy from time to time. Please check back periodically for any changes.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">1. Introduction</h3>
      <p className="text-gray-600 mb-4">
        Vigomerge Technology is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our website, use our services, or interact with us. By
        accessing our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use
        our services.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">2. Information We Collect</h3>
      <h4 className="text-lg font-semibold mt-4">A. Personal Information</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>Job title</li>
        <li>Payment details (for paid services)</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">B. Non-Personal Information</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Browser type & version</li>
        <li>IP address</li>
        <li>Device information</li>
        <li>Cookies & tracking data</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">C. How We Collect Information</h4>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Directly from you (e.g., forms, registrations, inquiries)</li>
        <li>Automatically via cookies & analytics tools</li>
        <li>From third-party services (e.g., CRM, marketing platforms)</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-3">3. Sharing & Disclosure of Information</h3>
      <p className="text-gray-600 mb-4">
        We may share your data with:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Service providers</li>
        <li>Business partners (with your consent)</li>
        <li>Legal authorities (if required by law)</li>
        <li>Affiliates & subsidiaries</li>
      </ul>
      <p className="text-gray-600 mb-4">
        We do not sell your personal information to third parties.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h3>
      <p className="text-gray-600 mb-4">
        We implement industry-standard security measures, including:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Encryption (SSL/TLS)</li>
        <li>Access controls</li>
        <li>Regular security audits</li>
      </ul>
      <p className="text-gray-600 mb-4">
        However, no method is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">5. Cookies & Tracking Technologies</h3>
      <p className="text-gray-600 mb-4">
        We use cookies to:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Enhance user experience</li>
        <li>Analyze website traffic</li>
        <li>Personalize content</li>
      </ul>
      <p className="text-gray-600 mb-4">
        You can disable cookies in your browser settings, but some features may not work properly.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">6. Your Privacy Rights</h3>
      <p className="text-gray-600 mb-4">
        Depending on your location, you may have the right to:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Access, correct, or delete your data</li>
        <li>Opt out of marketing communications</li>
        <li>Restrict or object to processing</li>
        <li>Data portability</li>
      </ul>
      <p className="text-gray-600 mb-4">
        To exercise these rights, contact us at <a href="mailto:info@vigomerge.com" className="text-indigo-600 hover:underline">info@vigomerge.com</a>.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">7. Contact Us</h3>
      <p className="text-gray-600 mb-4">
        For questions or requests regarding this Privacy Policy, contact us at: <a href="mailto:info@vigomerge.com" className="text-indigo-600 hover:underline">info@vigomerge.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
