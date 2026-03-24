import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'React Documentation',
    description: 'The official documentation for React, a JavaScript library for building user interfaces.',
    url: 'https://react.dev/',
    icon: '⚛️'
  },
  {
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
    url: 'https://tailwindcss.com/docs',
    icon: '🌊'
  },
  {
    title: 'Next.js',
    description: 'The React Framework for the Web. Enables features like server-side rendering and generating static websites.',
    url: 'https://nextjs.org/docs',
    icon: '▲'
  },
  {
    title: 'React Router',
    description: 'Declarative routing for React apps. Keep your UI in sync with the URL.',
    url: 'https://reactrouter.com/en/main',
    icon: '🛣️'
  }
];

export function Resources() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-8 text-gray-900 dark:text-white">
          <BookOpen className="text-[#fb542b]" />
          <h2 className="text-2xl font-bold">Important Resources</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#fb542b] dark:hover:border-[#fb542b] transition-all shadow-sm"
            >
              <div className="text-2xl bg-gray-50 dark:bg-gray-800 p-3 rounded-lg group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                {resource.icon}
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#fb542b] transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-[#fb542b] transition-colors" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                  {resource.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
