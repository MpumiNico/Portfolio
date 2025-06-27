import { motion, Variants } from 'framer-motion';

const certifications = [
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    code: 'AI-900',
    color: 'bg-blue-600',
    image: '/images/certifications/AI-900.png',
    description: 'Demonstrates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    color: 'bg-blue-600',
    image: '/images/certifications/AZ-900.png',
    description: 'Validates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
    
  },
  {
    name: 'Oracle Certified Associate, Java SE 8 Programmer',
    code: 'Java SE 8',
    color: 'bg-red-600',
    image: '/images/certifications/Oracle java.png',
    description: 'Demonstrates understanding and proficiency in Java SE 8 programming language, APIs, and foundational Java concepts.',
  
  },
  {
    name: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    color: 'bg-yellow-600',
    image: '/images/certifications/Power bi.png',
    description: 'Validates expertise in preparing, modeling, visualizing data, and deploying and maintaining deliverables with Microsoft Power BI.',

  }
];

const Certifications = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      }
    },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Professional <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-shadow"
            >
              <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-h-44 w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {cert.code}
                    </div>
                    
                  </div>
                  <p className="mt-3 text-gray-400">{cert.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                  
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            These certifications represent my commitment to continuous learning and professional development
            in the ever-evolving field of technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
