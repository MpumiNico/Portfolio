import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    // Calculate how far down the page we've scrolled
    const scrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Show button when we're 80% down the page or in the contact section
    const scrollThreshold = height * 0.8;
    
    if (scrolled > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-6 bottom-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors cursor-pointer hover:shadow-blue-500/50 hover:scale-110 transform duration-300"
            style={{
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
              animation: 'pulse-shadow 3s infinite'
            }}
          >
            <ChevronUp size={24} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
