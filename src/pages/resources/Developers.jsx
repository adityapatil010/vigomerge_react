import React from 'react';
import { Code2, Smartphone, Cpu, ShoppingCart, Cloud, Users, Brain, Layers, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="text-indigo-600 size-8" />,
    title: 'Web Development',
    details: [
      'Custom website development',
      'Front-end and back-end development',
      'Responsive, mobile-first design',
      'CMS development (WordPress, Drupal, Joomla)',
    ],
  },
  {
    icon: <Smartphone className="text-indigo-600 size-8" />,
    title: 'Mobile App Development',
    details: [
      'Native iOS and Android applications',
      'Cross-platform app development (Flutter, React Native)',
      'Mobile UI/UX design and optimization',
      'App maintenance and updates',
    ],
  },
  {
    icon: <Cpu className="text-indigo-600 size-8" />,
    title: 'Software Development',
    details: [
      'Custom software solutions tailored to business needs',
      'SaaS product development',
      'API development and integration',
      'Software modernization and reengineering',
    ],
  },
  {
    icon: <ShoppingCart className="text-indigo-600 size-8" />,
    title: 'E-Commerce Development',
    details: [
      'E-commerce website and app development (Shopify, Magento, WooCommerce)',
      'Shopping cart and payment gateway integration',
      'Marketplace development solutions',
    ],
  },
  {
    icon: <Cloud className="text-indigo-600 size-8" />,
    title: 'Cloud Application Development',
    details: [
      'Cloud-native application design',
      'Serverless architecture and microservices',
      'Cloud migration and optimization (AWS, Azure, Google Cloud)',
    ],
  },
  {
    icon: <Users className="text-indigo-600 size-8" />,
    title: 'Dedicated Development Teams',
    details: [
      'Hire full-time or part-time developers',
      'Staff augmentation to extend your in-house team',
      'Agile teams for faster project delivery',
    ],
  },
  {
    icon: <Brain className="text-indigo-600 size-8" />,
    title: 'Emerging Technology Solutions',
    details: [
      'Blockchain development',
      'AI and Machine Learning integration',
      'Internet of Things (IoT) applications',
      'AR/VR app development',
    ],
  },
  {
    icon: <Layers className="text-indigo-600 size-8" />,
    title: 'Our Development Stack',
    details: [
      'Frontend: React.js, Angular, Vue.js, HTML5, CSS3, JavaScript',
      'Backend: Node.js, PHP, Python, Java, .NET, Ruby on Rails',
      'Mobile: Swift, Kotlin, Flutter, React Native',
      'Database: MySQL, PostgreSQL, MongoDB, Firebase',
      'Cloud: AWS, Microsoft Azure, Google Cloud Platform',
    ],
  },
  {
    icon: <CheckCircle className="text-indigo-600 size-8" />,
    title: 'Why Choose Us',
    details: [
      'Experienced Developers with industry certifications',
      'Flexible Engagement Models',
      'Agile Methodology for fast delivery',
      'Commitment to Quality with thorough QA',
      'End-to-End Support from consultation to maintenance',
    ],
  },
];

const Developers = () => {
  return (
    <div className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Developer</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert Developers, Tailored Solutions. Our Developer Services empower businesses to build powerful, scalable, and innovative technology solutions.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">{service.icon}<h3 className="text-xl font-semibold text-gray-800">{service.title}</h3></div>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                {service.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Build the Future With Us</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Looking for expert developers to turn your ideas into reality? Contact us today for a free consultation and discover how we can help you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developers;
