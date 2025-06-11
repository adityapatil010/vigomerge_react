import React from 'react';
import {
  UsersRound,
  MessagesSquare,
  GraduationCap,
  Share2,
  CalendarCheck,
  ThumbsUp,
  Code,
  HeartHandshake,
} from 'lucide-react';

const communitySolutions = [
  {
    id: 1,
    icon: <UsersRound className="text-indigo-600 size-7" />,
    title: 'Online Community Platform Development',
    description: [
      'Custom community websites and portals',
      'Discussion forums, groups, and networking features',
      'Integration with CRM, events, and LMS',
    ],
  },
  {
    id: 2,
    icon: <MessagesSquare className="text-indigo-600 size-7" />,
    title: 'Community Engagement Programs',
    description: [
      'Online events, webinars, and virtual meetups',
      'Hackathons, coding competitions, and challenges',
      'Loyalty programs, ambassador networks, and influencer partnerships',
    ],
  },
  {
    id: 3,
    icon: <GraduationCap className="text-indigo-600 size-7" />,
    title: 'Knowledge Sharing and Learning Platforms',
    description: [
      'E-learning portals for professional development',
      'Resource libraries, documentation hubs, and FAQs',
      'Certification programs and training courses',
    ],
  },
  {
    id: 4,
    icon: <Share2 className="text-indigo-600 size-7" />,
    title: 'Social Media and Community Management',
    description: [
      'Social community creation (LinkedIn, Discord, Slack)',
      'Content creation, moderation, and support',
      'Audience growth strategies and analytics',
    ],
  },
  {
    id: 5,
    icon: <CalendarCheck className="text-indigo-600 size-7" />,
    title: 'Events and Meetups',
    description: [
      'In-person and virtual conference support',
      'Community-led workshops, seminars, and hack days',
      'Sponsorship and partnership management',
    ],
  },
  {
    id: 6,
    icon: <ThumbsUp className="text-indigo-600 size-7" />,
    title: 'Feedback and Collaboration Tools',
    description: [
      'Community feedback loops for product improvement',
      'Idea submission platforms and innovation hubs',
      'Beta testing communities for new launches',
    ],
  },
  {
    id: 7,
    icon: <Code className="text-indigo-600 size-7" />,
    title: 'Developer and Partner Communities',
    description: [
      'Developer evangelism programs',
      'API and open-source community building',
      'Partner portal creation and engagement strategies',
    ],
  },
  {
    id: 8,
    icon: <HeartHandshake className="text-indigo-600 size-7" />,
    title: 'Why Invest in Community',
    description: [
      'Stronger brand loyalty & user engagement',
      'Faster innovation via direct feedback',
      'Business growth through referrals',
      'Authentic advocacy & trust building',
      'Attract top developers, partners, customers',
    ],
  },
];

const Community = () => {
  return (
    <div className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Community</h2>
          <p className="mt-4 text-lg text-gray-600">
            Building Stronger Connections Through Technology. Our Community Services foster collaboration, knowledge sharing, and sustainable growth.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {communitySolutions.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800">Let's Grow Together</h3>
          <p className="mt-4 text-gray-600">
            Ready to build a vibrant community around your brand and services? Get in touch today and discover how we can create meaningful connections that fuel your growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
