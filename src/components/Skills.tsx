import { motion } from 'motion/react';

const skills = [
  { name: 'AI Tools', icon: '🤖', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  { name: 'Python', icon: '🐍', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  { name: 'WordPress', icon: '📝', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
  { name: 'React', icon: '⚛️', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
  { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  { name: 'CSS', icon: '🎨', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  { name: 'HTML', icon: '📄', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
  { name: 'Figma', icon: '🎨', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
  { name: 'Next.js', icon: '▲', color: 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300' },
  { name: 'Tailwind CSS', icon: '🌊', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300' },
];

export function Skills() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm shadow-sm border border-gray-100 dark:border-gray-800 ${skill.color}`}
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
