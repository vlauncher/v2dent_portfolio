'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode className="text-blue-500" size={24} />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: <FiServer className="text-green-500" size={24} />,
    items: ['Python', 'Django', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    category: 'DevOps & Cloud',
    icon: <FiCloud className="text-purple-500" size={24} />,
    items: ['AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate Software Developer with over 5 years of experience in crafting scalable, 
              high-performance applications. My expertise spans across Python, JavaScript, and cloud 
              technologies, with a strong focus on building efficient APIs and leading development teams.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I recently architected a cutting-edge serverless backend for a ride-sharing app, 
              featuring real-time tracking and secure payments. I'm passionate about innovation 
              and always eager to take on new challenges in the tech industry.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                Cloud Architecture
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                Team Leadership
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-opacity-10 dark:bg-opacity-20 mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
