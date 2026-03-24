import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'training',
    title: 'AI Tool & Automation',
    organization: 'TalentGro, Mohali',
    date: 'Mar 2026',
    description: 'I use Artificial Intelligence tools to perform tasks that normally require human intelligence and I also use technology to perform tasks automatically without human effort.',
  },
  {
    type: 'training',
    title: 'Wordpress',
    organization: 'TalentGro, Mohali',
    date: 'Oct 2025',
    description: 'I used to create and manage websites without needing advanced coding skills. It allows users to build websites, blogs and online stores without needing deep programming knowledge.',
  },
];

const education = [
  {
    type: 'education',
    title: 'BCA (AI & DS)',
    organization: 'Om Sterling Global University, Hisar',
    date: 'Sep 2024 - May 2027',
    description: 'I had participated in various types of club activities which are at university level.',
  },
  {
    type: 'education',
    title: '12th Pass (Commerce)',
    organization: 'St. Joseph’s International School, Hisar',
    date: 'April 2023 - March 2024',
    description: 'I have done my 12th with Commerce stream (Non-Maths).',
  },
];

export function Experience() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6 text-gray-900 dark:text-white">
            <Briefcase className="text-[#fb542b]" />
            <h2 className="text-2xl font-bold">Training</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                <div className="absolute w-3 h-3 bg-[#fb542b] rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-gray-950"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{exp.organization}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6 text-gray-900 dark:text-white">
            <GraduationCap className="text-[#fb542b]" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                <div className="absolute w-3 h-3 bg-[#fb542b] rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-gray-950"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{edu.organization}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{edu.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
