"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { assets } from "../assests/assets";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ahmad-khan-1" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-mujtaba-aman/" },
];

const Footer = () => {
  return (
    <footer className="mt-16 sm:mt-20 w-full overflow-hidden text-slate-950 dark:text-white">
      {/* Infinite scrolling marquee */}
      <div className="relative border-y border-slate-300 dark:border-white/10 py-3 sm:py-6 bg-slate-50 dark:bg-white/[0.02] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-max"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {Array.from({ length: 4 }).map((_, j) => (
                <React.Fragment key={j}>
                  <span className="text-xl sm:text-4xl md:text-6xl font-Ovo px-3 sm:px-6">
                    Let's build something
                  </span>
                  <span className="text-xl sm:text-4xl md:text-6xl px-3 sm:px-6 text-accent">
                    ✦
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Magnetic email CTA */}
      <div className="flex flex-col items-center py-10 sm:py-16 px-4 sm:px-6 max-w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={assets.logo}
            alt="Ahmad Mujtaba"
            className="w-20 sm:w-28 mb-6 sm:mb-8 h-auto dark:invert"
          />
        </motion.div>

        <span className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-slate-500 dark:text-gray-500 mb-3 sm:mb-4 text-center">
          Got a project in mind?
        </span>

        <MagneticEmail />

        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-500 dark:text-gray-400 text-center px-2">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for full-stack roles &amp; freelance work
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-300 dark:border-white/10 py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
            © 2026 Ahmad Mujtaba. All rights reserved.
          </p>

          <ul className="flex items-center gap-6 sm:gap-8">
            {socialLinks.map((link, index) => (
              <li key={index}>
                {/* FIXED: Added missing <a> opening tag */}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Email that follows cursor slightly when nearby — "magnetic" effect
const MagneticEmail = () => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Disable heavy magnetic shift on touch screens for smoother mobile performance
    if (window.innerWidth < 640) return;

    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.4 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href="https://mail.google.com/mail/?view=cm&fs=1&to=amanullahqurayshi@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="text-base sm:text-2xl md:text-4xl font-Ovo hover:text-accent transition-colors duration-300 break-all text-center px-2 max-w-full"
    >
      amanullahqurayshi@gmail.com
    </motion.a>
  );
};

export default Footer;
