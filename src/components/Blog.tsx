import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Mastering CSS Custom Properties (Variables)',
    excerpt: 'CSS custom properties, also known as CSS variables, have revolutionized how we write stylesheets. Learn how to use them effectively for theming, responsive design, and cleaner code.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    tags: ['CSS', 'Web Design', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'The Power of CSS Grid and Flexbox',
    excerpt: 'Understanding when to use Grid versus Flexbox is crucial for modern web development. We explore the strengths of each layout module and how they can work together seamlessly.',
    date: 'February 28, 2026',
    readTime: '7 min read',
    tags: ['CSS', 'Layout', 'HTML'],
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop'
  }
];

export function Blog() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Writings</h2>
          <a href="#" className="text-sm font-medium text-[#fb542b] hover:underline flex items-center gap-1">
            View all <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="flex flex-col gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-full md:w-1/3 aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col flex-grow py-2">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#fb542b] transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
