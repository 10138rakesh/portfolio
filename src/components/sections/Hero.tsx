"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { H1, P } from "@/components/ui/Typography";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const fullText = "rakesh chandra tripathy";

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.substring(0, text.length + 1));
          setSpeed(120);
        } else {
          setSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.substring(0, text.length - 1));
          setSpeed(60);
        } else {
          setSpeed(500);
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, speed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effect */}
      <ParticleNetwork />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-1.5 w-max"
            >
              <Terminal size={16} className="text-neon-teal" />
              <span className="text-sm font-mono text-white/80 flex items-center">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                  className="w-[2px] h-4 bg-neon-teal ml-1"
                />
              </span>
            </motion.div>

            <H1 className="text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] leading-none tracking-tight">
              Hello, I'm <br className="hidden sm:block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-[length:200%_auto] animate-[gradient_10s_linear_infinite]" style={{ backgroundImage: "linear-gradient(to right, #0ea5e9, #a855f7, #10b981, #f59e0b, #f43f5e, #0ea5e9)" }}>Rakesh</span>.
            </H1>

            <div className="space-y-4 max-w-2xl">
              <P className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Full Stack Developer focused on building complete, scalable web applications.
              </P>
              <P className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
                I bridge the gap between complex backend logic and user-friendly frontend interfaces to bring modern ideas to life.
              </P>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[350px] h-[350px] xl:w-[420px] xl:h-[420px] rounded-full flex items-center justify-center group">
              {/* Animated Outline Rings */}
              <div className="absolute inset-[-20px] rounded-full border border-neon-teal/30 animate-[spin_20s_linear_infinite] group-hover:border-neon-teal transition-colors duration-500"></div>
              <div className="absolute inset-[-40px] rounded-full border-t border-neon-blue/40 animate-[spin_15s_linear_infinite_reverse] group-hover:border-neon-blue transition-colors duration-500"></div>

              {/* Gradient Glow behind the photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-neon-teal/20 blur-xl" />

              {/* Profile Photo Circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #a855f7, #10b981) border-box" }}>
                <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-neon-teal/40 group-hover:ring-neon-teal/80 transition-all duration-500">
                  <img
                    src="/rakesh-profile.png"
                    alt="Rakesh Chandra Tripathy"
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer interactive text-gray-500 hover:text-neon-blue transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono mb-2">SCROLL DOWN</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-current to-transparent" />
      </motion.div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
