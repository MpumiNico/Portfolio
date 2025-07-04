import { motion } from "framer-motion";

const projects = [
  {
    title: "Inventory System - In progress",
    description:
      "The Inventory Management System is a web-based application designed to help small retail businesses effectively manage their stock levels, sales, and reporting.",
    image: "/images/certifications/Inventory.png",
    technologies: ["PHP", "MYSQL", "Bootstrap"],
    demoLink: "#",
    repoLink: "https://github.com/MpumiNico/Inventory_system",
  },
  {
    title: "Blogsite",
    description:
      "A career blogsite, featuring full CRUD functionality for managing articles.",
    image: "/images/certifications/blogsite.png",
    technologies: ["Python", "Django", "Bootstrap"],
    demoLink: "https://blogsitep.netlify.app/",
    repoLink: "https://github.com/MpumiNico/blogsite",
  },
  {
    title: "To-do List",
    description:
      "This is a simple and user-friendly task management application designed to help users organize their daily activities.",
    image: "/images/certifications/todo-list.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://to-do-list-delta-six-78.vercel.app/",
    repoLink: "https://github.com/MpumiNico/To-do-list",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application built using React and Axios that allows users to view real-time weather information for any city worldwide",
    image: "/images/certifications/weather.png",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    demoLink: "https://projectappweather.netlify.app/",
    repoLink: "https://github.com/MpumiNico/weather-app-project",
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition duration-300 transform hover:translate-y-[-5px]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="text-blue-400 hover:text-blue-500 transition-colors font-medium flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="text-blue-400 hover:text-blue-500 transition-colors font-medium flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
