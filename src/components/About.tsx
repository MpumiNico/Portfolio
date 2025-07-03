import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/20">
                <img
                  src="https://mocha-cdn.com/01978279-6781-7955-a94a-6dfa964fa29d/TMA-Photos-147.jpg"
                  alt="Mpumi Nicollete Mahlalela"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Software Developer 
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Mpumi Nicollete Mahlalela, a passionate software developer with expertise in building web applications and software solutions. I enjoy turning complex problems into simple, beautiful, and intuitive designs. My focus is on creating efficient, scalable, and maintainable code.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With a strong foundation in multiple programming languages and frameworks, I strive to stay at the forefront of technology trends and best practices. I'm dedicated to continuous learning and improving my skills to deliver high-quality solutions.
            </p>

            

            <a
              href="https://www.canva.com/design/DAGnhH1D7GU/Bm2Q1Eva4h431lkrdkZOgw/view?utm_content=DAGnhH1D7GU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc2af7655eb" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
