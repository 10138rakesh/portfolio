"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { GraduationCap, School, MapPin, Calendar } from "lucide-react";

const educationDetails = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.66",
    location: "Phagwara, Punjab",
    period: "Aug' 23 – Jun' 27",
    icon: <GraduationCap className="w-6 h-6 text-neon-blue" />,
    color: "neon-blue"
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Intermediate",
    score: "Percentage: 72%",
    location: "Hyderabad, Telangana",
    period: "Apr' 22 – Mar' 23",
    icon: <School className="w-6 h-6 text-neon-teal" />,
    color: "neon-teal"
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Matriculation",
    score: "Percentage: 90%",
    location: "Hyderabad, Telangana",
    period: "Apr' 20 – Mar' 21",
    icon: <School className="w-6 h-6 text-neon-purple" />,
    color: "neon-purple"
  }
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="education" className="py-24 border-b border-gray-800 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-blue font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-blue"></span>
              <span>03. ACADEMIC JOURNEY</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Education</H2>
          </motion.div>

          <div className="space-y-8">
            {educationDetails.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Connection Line */}
                {index !== educationDetails.length - 1 && (
                  <div className="absolute left-[31px] top-[60px] w-px h-[calc(100%+32px)] bg-gradient-to-b from-gray-700 to-transparent z-0" />
                )}

                <div className="relative z-10 flex flex-col md:flex-row gap-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {edu.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <H3 className="text-2xl text-white font-semibold">{edu.institution}</H3>
                      <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-500" /> {edu.period}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-500" /> {edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <p className="text-lg text-gray-200 font-medium flex items-center gap-2">
                        {edu.degree}
                      </p>
                      <p className="text-neon-teal font-mono font-bold tracking-wider">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
