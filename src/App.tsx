/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { GithubChart } from './components/GithubChart';
import { Blog } from './components/Blog';
import { Resources } from './components/Resources';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <header className="py-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-transparent dark:border-transparent">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl tracking-tight"
          >
            Palak<span className="text-[#fb542b]">.</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
          </motion.div>
        </header>

        <main className="pb-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GithubChart />
          <Blog />
          <Resources />
        </main>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Palak Singla. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#fb542b] transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-[#fb542b] transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#fb542b] transition-colors"><Twitter size={18} /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

