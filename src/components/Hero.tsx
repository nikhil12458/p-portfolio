import { motion } from 'motion/react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center md:items-start md:flex-row gap-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-xl shrink-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=400&auto=format&fit=crop" 
          alt="Panda Profile" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Palak Singla
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-6"
        >
          AI Engineer
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <MapPin size={16} />
            <span>House No.180, Old Grain Market, Barwala, Hisar</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Phone size={16} />
            <span>95188XXXXX</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Mail size={16} />
            <span>singlap2406@gmail.com</span>
          </div>
        </motion.div>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#fb542b' }}
        >
          <Download size={18} />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
