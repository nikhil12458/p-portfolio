import { motion } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';

export function GithubChart() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center sm:items-start"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">GitHub Contributions</h2>
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="min-w-max p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <GitHubCalendar 
              username="palak1924" 
              colorScheme="dark"
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                color: 'inherit'
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
