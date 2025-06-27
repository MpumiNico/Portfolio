import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', color: 'bg-orange-600' },
  { name: 'CSS', color: 'bg-blue-600' },
  { name: 'JAVASCRIPT', color: 'bg-yellow-500' },
  { name: 'PYTHON', color: 'bg-green-600' },
  { name: 'PHP', color: 'bg-indigo-600' },
  { name: 'REACT', color: 'bg-cyan-500' },
  { name: 'DJANGO', color: 'bg-green-800' },
  { name: 'BOOTSTRAP', color: 'bg-purple-600' },
  { name: 'C++', color: 'bg-blue-800' },
  { name: 'SQL', color: 'bg-amber-700' },
  { name: 'JAVA', color: 'bg-red-600' },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
  type: 'spring' as const, 
  stiffness: 100
}
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`${skill.color} text-white px-6 py-3 rounded-full font-medium shadow-lg transform hover:rotate-6 transition-all duration-300`}
                style={{
                  boxShadow: `0 0 10px ${index % 2 === 0 ? '#3b82f6' : '#60a5fa'}`,
                  animation: `pulse-shadow 3s infinite ${index * 0.5}s`
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-full h-52 bg-blue-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">Development Approach</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My development philosophy centers on writing clean, maintainable code that adheres to industry best practices. I believe in the power of collaboration and continuous improvement.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I take a test-driven development approach when appropriate and focus on creating responsive, accessible, and performant applications that provide an excellent user experience across all devices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
