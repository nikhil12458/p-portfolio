import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
          <p className="mb-4">
            Hello! I'm Palak Singla, an aspiring AI Engineer with a passion for building intelligent systems and automating complex tasks. I am currently pursuing my BCA in Artificial Intelligence & Data Science at Om Sterling Global University, Hisar.
          </p>
          <p>
            My journey involves exploring various AI tools, Python programming, and web development using platforms like WordPress. I enjoy leveraging technology to perform tasks automatically without human effort, and I'm constantly learning to expand my skill set in the ever-evolving tech landscape.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
