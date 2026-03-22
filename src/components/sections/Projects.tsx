"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Card, Badge, Button } from "@/components/ui";
import { Github, ExternalLink } from "lucide-react";
import { personalLinks } from "@/config/personalLinks";


const projects = [
  {
    title: "Helpmefy - Emergency Support System",
    problem: "Real-time help requests platform enabling secure authentication, efficient data handling, and instant problem-solving.",
    techniques: "RESTful APIs, Secure Authentication, Mongoose Schemas",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    github: "https://github.com/10138rakesh",
    demo: "#",
    bgImage: "/helpmify-bg.png",
  },
  {
    title: "Techie - E-commerce Website",
    problem: "Responsive e-commerce platform with robust backend modules, user authentication, and shopping cart functionality.",
    techniques: "Full-Stack Development, Map Integration",
    tools: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Tailwind CSS"],
    github: "https://github.com/10138rakesh",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mastering C++ Training Output",
    problem: "Developed multiple mini-programs implementing algorithms and core object-oriented concepts.",
    techniques: "Dynamic Programming, Algorithms, OOP",
    tools: ["C++", "Problem Solving", "Logic"],
    github: "https://github.com/10138rakesh",
    demo: "#",
    bgImage: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop",
  }
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 border-b border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-purple font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-purple"></span>
              <span>03. SELECTED WORKS</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Projects</H2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group relative h-[450px] lg:h-[500px] flex flex-col rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 duration-300 pointer-events-auto border border-gray-800 hover:border-neon-teal/50 shadow-lg">

                  {/* Background Image Setup */}
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  />

                  {/* Heavy Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 z-10" />

                  <div className="relative z-20 flex flex-col h-full p-8">
                    <div className="flex justify-between items-start mb-6">
                      <H3 className="text-2xl text-white group-hover:text-neon-teal transition-colors drop-shadow-md">{project.title}</H3>
                      <div className="flex space-x-4 text-gray-300">
                        <a href={project.github} className="hover:text-white bg-black/60 p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-gray-600 shadow-xl">
                          <Github className="w-7 h-7" />
                        </a>
                      </div>
                    </div>


                    <div className="mb-6 flex-grow flex flex-col justify-end">
                      <P className="text-base text-gray-300 mt-0 mb-4 drop-shadow-sm">{project.problem}</P>
                      <div className="text-sm font-mono text-gray-400 bg-black/40 p-3 rounded-lg backdrop-blur-md border border-gray-800/50">
                        <span className="text-neon-blue font-bold">Techniques:</span> {project.techniques}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-gray-800/50">
                      {project.tools.map((tool, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 text-xs font-mono text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button variant="outline" size="lg" className="font-mono" onClick={() => window.open(personalLinks.github, '_blank')}>

              View All on GitHub <Github className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
