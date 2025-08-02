'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'Pistis Tech Hub',
    location: 'Remote (Lagos, Nigeria)',
    duration: 'March 2024 - Present',
    description: [
      'Engineered high-performance API endpoints using Django REST Framework, boosting system efficiency by 30% for 2,000+ concurrent users.',
      'Led a team of 3 engineers to deliver critical API solutions, cutting development time by 20% through streamlined workflows.',
      'Integrated Paystack and Flutterwave payment gateways into an e-learning platform, increasing user satisfaction by 15%.',
      'Containerized deployments with Docker and set up a CI/CD pipeline, reducing deployment time from 4 hours to 1 hour.',
      'Migrated to AWS EC2 with load balancing, decreasing downtime by 10% and improving resilience.',
    ],
    tags: ['Django', 'Django REST', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'ApeXpress',
    location: 'Remote',
    duration: 'January 2025 - Present',
    description: [
      'Architected a scalable, serverless microservices backend for a ride-sharing platform using AWS Lambda, API Gateway, and DynamoDB.',
      'Implemented real-time features with WebSocket API and Redis, enabling live ride tracking and notifications.',
      'Developed a secure authentication system with JWT, Google OAuth 2.0, and multi-factor authentication.',
      'Integrated Stripe for payment processing and Twilio/SendGrid for multi-channel communication.',
      'Designed a file management system with S3 presigned URLs for secure document handling.',
    ],
    tags: ['AWS Lambda', 'DynamoDB', 'Node.js', 'WebSocket', 'Redis'],
  },
  {
    id: 3,
    role: 'Backend Developer Intern',
    company: 'Nhub Foundation',
    location: 'Jos South, Nigeria',
    duration: 'February 2020 - December 2021',
    description: [
      'Built RESTful APIs with Django and FastAPI, enhancing system efficiency by 20%.',
      'Collaborated on backend functionalities, reducing development time by 15%.',
      'Ensured code quality and security, decreasing vulnerabilities by 10%.',
    ],
    tags: ['Python', 'Django', 'FastAPI', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-16' : 'md:pl-1/2 md:pr-16'}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 items-center justify-center z-10">
                <FiBriefcase className="text-white" size={14} />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {exp.role} at {exp.company}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <FiCalendar className="mr-1" size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <FiMapPin className="mr-1" size={14} />
                  <span>{exp.location}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
