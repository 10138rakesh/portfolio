"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Database, Code2, LineChart, Brain, Terminal, Coffee, Layers, Activity } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="about" className="py-32 border-b border-gray-800 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center space-x-2 text-neon-teal font-mono mb-4 text-sm">
              <span className="w-8 h-[1px] bg-neon-teal"></span>
              <span>01. ABOUT ME</span>
            </div>
            <H2 className="text-4xl md:text-5xl border-none">Curiosity Driven by Data</H2>
          </motion.div>

          {/* Bento Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Main Narrative Card (Spans 2 columns) */}
            <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.07] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="w-32 h-32 md:w-48 md:h-48 text-neon-blue" />
                </div>

                <H3 className="text-2xl md:text-3xl text-white mb-6 font-semibold inline-flex items-center gap-3 relative z-10">
                  <Terminal className="text-neon-teal" /> The Developer's Mindset
                </H3>
                <div className="space-y-6 relative z-10 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I am a Full Stack Developer and Computer Science student who enjoys building complete web applications from frontend to backend. My journey is driven by curiosity, consistency, and a strong problem-solving mindset.
                  </p>
                  <p>
                    With hands-on experience in modern technologies like React, Node.js, and databases, I focus on creating user-friendly interfaces along with efficient backend logic. I enjoy working across the full stack to bring ideas to life.
                  </p>
                  <p>
                    I continuously improve my skills in Data Structures & Algorithms and development to build scalable and practical solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card (Spans 1 column) */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 flex flex-col gap-6">
              <div className="h-1/2 bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-neon-blue/50 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl group-hover:bg-neon-blue/30 transition-colors"></div>
                <Code2 className="text-neon-blue mb-4 w-8 h-8" />
                <div className="text-3xl md:text-3xl font-bold text-white mb-2 tracking-tight">Full Stack Developer</div>
                <div className="text-xs font-mono text-gray-400">Building complete web applications using React, Node.js, and modern technologies.</div>
              </div>

              <div className="h-1/2 bg-gradient-to-br from-gray-900/80 to-black backdrop-blur-xl border border-gray-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-emerald-400/50 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-colors"></div>
                <Layers className="text-emerald-400 mb-4 w-8 h-8" />
                <div className="text-3xl md:text-3xl font-bold text-white mb-2 tracking-tight">System Integration</div>
                <div className="text-xs font-mono text-gray-400">Connecting frontend and backend seamlessly using APIs and handling real-world data.</div>
              </div>
            </motion.div>

            {/* Full Stack Development Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                <Code2 className="text-neon-purple mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <H3 className="text-xl text-white mb-2">5-Star Coder</H3>
                <p className="text-sm text-gray-400 font-sans">Strong problem-solving skills through consistent practice in Data Structures & Algorithms.</p>
              </div>
            </motion.div>

            {/* Problem Solving (DSA) Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors">
                <Brain className="text-yellow-500 mb-4 w-8 h-8 group-hover:rotate-12 transition-transform" />
                <H3 className="text-xl text-white mb-2">Problem Solving (DSA)</H3>
                <p className="text-sm text-gray-400 font-sans">Strong foundation in Data Structures & Algorithms with focus on efficient solutions.</p>
              </div>
            </motion.div>

            {/* Integration Card */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:bg-white/[0.08] transition-colors overflow-hidden relative">
                <Activity className="text-neon-teal mb-4 w-8 h-8 z-10 relative" />
                <H3 className="text-xl text-white mb-2 z-10 relative">Top 10 Finalist</H3>
                <p className="text-sm text-gray-400 font-sans z-10 relative">Ranked among top performers by building real-world solutions under pressure.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-teal/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
