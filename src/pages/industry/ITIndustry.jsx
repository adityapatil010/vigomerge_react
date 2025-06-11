import React from 'react';

const ITIndustry = () => {
  return (
    <div className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">IT Industry</h2>
        <p className="text-xl text-gray-700 mb-8">
          Transforming Businesses Through Innovative Technology Solutions
        </p>
        <p className="text-gray-700 mb-6">
          In today's fast-paced digital world, businesses need reliable, scalable, and innovative IT services to stay ahead of
          the curve. Our IT Industry Services are designed to empower organizations by delivering cutting-edge technology
          solutions that enhance efficiency, security, and growth.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. IT Consulting</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Strategic IT planning aligned with your business goals</li>
              <li>Digital transformation advisory</li>
              <li>Technology roadmap development</li>
              <li>Risk assessment and compliance consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Software Development</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom application development</li>
              <li>Mobile app development (iOS, Android, Cross-platform)</li>
              <li>Web development and modernization</li>
              <li>Software integration and API services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Managed IT Services</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>24/7 network monitoring and management</li>
              <li>Help desk and technical support</li>
              <li>Cloud services management (AWS, Azure, Google Cloud)</li>
              <li>Disaster recovery and backup solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">4. Cloud Solutions</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cloud migration and deployment</li>
              <li>SaaS, PaaS, and IaaS implementations</li>
              <li>Hybrid and multi-cloud environments</li>
              <li>Cloud optimization and cost management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">5. Emerging Technologies</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>AI and machine learning solutions</li>
              <li>Blockchain development</li>
              <li>Internet of Things (IoT) applications</li>
              <li>Robotic Process Automation (RPA)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">6. Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Industry Expertise: Decades of combined experience across multiple industries.</li>
              <li>Tailored Solutions: Customized IT strategies for businesses of all sizes.</li>
              <li>Cutting-Edge Technology: We integrate the latest innovations to future-proof your business.</li>
              <li>Customer-Centric Approach: Our solutions are designed around your needs and challenges.</li>
              <li>24/7 Support: Dedicated teams available whenever you need assistance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">7. Let’s Build the Future Together</h3>
            <p className="text-gray-700">
              Ready to transform your business with world-class IT services?{' '}
              <a href="mailto:info@vigomerge.com" className="text-indigo-600 underline font-medium">
                Contact us
              </a>{' '}
              today for a free consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITIndustry;
